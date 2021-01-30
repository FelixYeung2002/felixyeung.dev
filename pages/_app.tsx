import Layout from "@components/Layout";
import "@styles/global.scss";
import React from "react";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}