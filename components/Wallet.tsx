"use client";

import React, { FC, useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import {
    WalletModalProvider,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

type Props = {
    children?: React.ReactNode;
};

export const Wallet: FC<Props> = ({ children }) => {
    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
    const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

    // You can also provide a custom RPC endpoint.
    const endpoint = useMemo(() => process.env.NEXT_PUBLIC_CUSTOM_RPC_URL ?? clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [new PhantomWalletAdapter()],
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
