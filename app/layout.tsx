import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { siteMeta, ogMeta } from "@lib/constants";
import { Header } from "@components/header";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { NextAuthProvider } from "@lib/next-auth/provider";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@lib/next-auth/options";

config.autoAddCss = false;

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"], weight: "400" });

const { siteTitle, siteDesc, siteUrl, siteIcon } = siteMeta;

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteTitle}`,
    default: siteTitle,
  },
  description: siteDesc,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    ...ogMeta,
    title: {
      template: `%s | ${siteTitle}`,
      default: siteTitle,
    },
  },
  icons: {
    icon: siteIcon,
    apple: siteIcon,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(nextAuthOptions);

  return (
    <html lang="ja">
      <body className={notoSansJP.className}>
        <NextAuthProvider session={session}>
          <div className="fullbleed">
            <Header />

            {children}
          </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
