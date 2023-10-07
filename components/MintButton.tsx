"use client";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
  Metaplex,
  bundlrStorage,
  walletAdapterIdentity,
} from "@metaplex-foundation/js";

interface MintButtonProps {
  media_url: string;
  setShow: any;
}

function MintButton({ media_url, setShow }: MintButtonProps) {
  const { connection } = useConnection();
  const wallet = useWallet();
  const { publicKey } = wallet;
  const description = localStorage.getItem("description");

  const metadata = {
    name: "Generated NFT",
    symbol: "CFNFT",
    description: `${description}. 
        Powered by CryptoFeedNFT.`,
    image: media_url,
    creators: [{ address: publicKey, share: 100 }],
  };

  async function mintOne() {
    if (!publicKey) throw new WalletNotConnectedError();

    const metaplex = Metaplex.make(connection)
      .use(walletAdapterIdentity(wallet));

    if (process.env.NEXT_PUBLIC_SOLANA_NETWORK === "devnet") {
      metaplex.use(
        bundlrStorage({
          address: "https://devnet.bundlr.network",
          providerUrl: "https://api.devnet.solana.com",
          timeout: 5000,
        })
      );
    } else {
      metaplex.use(bundlrStorage());
    }

    const { uri } = await metaplex.nfts().uploadMetadata(metadata);

    console.log("Uploading metadata...");
    console.log("Metadata uploaded:", uri);

    const { nft, response } = await metaplex.nfts().create({
      uri,
      name: metadata.name,
      symbol: metadata.symbol,
      sellerFeeBasisPoints: 500, // Represents 5.00%.
      isMutable: true,
    });

    console.log(nft);
    console.log({ txSignature: response.signature });

    setShow(true);
  }

  return (
    <button
      className="w-full rounded-lg bg-gradient-to-r from-purple-300 to-pink-200 py-4 text-xl font-semibold text-black"
      onClick={mintOne}
    >
      Mint now
    </button>
  );
}

export default MintButton;
