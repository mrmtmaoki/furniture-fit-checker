import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./lib/site";
import FitChecker from "./FitChecker";

const title = "家具が玄関を通るか無料判定｜搬入サイズ・対角線チェッカー";
const description =
  "引っ越しや家具の搬入で「玄関を通るか」不安なときに使える無料ツール。家具のサイズと玄関・ドア・廊下の寸法を入力するだけで、まっすぐ通るか、対角線計算で斜めにすれば通るかを自動判定します。";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "家具 搬入 玄関 通るか",
    "引っ越し 家具 サイズ 対角線",
    "家具 搬入経路",
    "玄関 家具 通る 判定",
    "搬入 対角線 計算",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: SITE_NAME,
  url: SITE_URL,
  description,
  inLanguage: "ja",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "JPY",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FitChecker />
    </>
  );
}
