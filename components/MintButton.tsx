"use client";

import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import {
    Metaplex,
    bundlrStorage,
    walletAdapterIdentity,
} from "@metaplex-foundation/js";
import { Connection, clusterApiUrl, Keypair } from "@solana/web3.js";

interface MintButtonProps {
    media_url: string;
}

function MintButton({ media_url }: MintButtonProps) {
    const { connection } = useConnection();
    const wallet = useWallet();
    const { publicKey } = wallet;

    const metadata = {
        name: "AI Generated NFT",
        symbol: "AINFT",
        description: "This NFT was generated using Stable Diffusion",
        image: media_url,
        creators: [{ address: publicKey, share: 100 }],
    };

    async function mintOne() {
        if (!publicKey) throw new WalletNotConnectedError();

        const lamports = await connection.getMinimumBalanceForRentExemption(0);

        const metaplex = Metaplex.make(connection)
            // set our keypair to use, and pay for the transaction
            .use(walletAdapterIdentity(wallet))
            // define a storage mechanism to upload with
            .use(
                bundlrStorage({
                    address: "https://devnet.bundlr.network",
                    providerUrl: "https://api.devnet.solana.com",
                    timeout: 5000,
                })
            );

        const { uri } = await metaplex.nfts().uploadMetadata(metadata);

        console.log("Uploading metadata...");
        console.log("Metadata uploaded:", uri);

        const { nft, response } = await metaplex.nfts().create({
            uri,
            name: metadata.name,
            symbol: metadata.symbol,

            // `sellerFeeBasisPoints` is the royalty that you can define on nft
            sellerFeeBasisPoints: 500, // Represents 5.00%.

            isMutable: true,
        });

        console.log(nft);
        console.log({ txSignature: response.signature });
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
