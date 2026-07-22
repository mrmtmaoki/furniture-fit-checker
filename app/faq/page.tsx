import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/site";

const title = "よくある質問";
const description =
  "家具 搬入チェッカーの使い方や判定の精度、対応環境などについて、よくいただく質問にお答えします。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/faq`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/faq`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
  },
};

const faqs = [
  {
    q: "判定結果はどのくらい信頼できますか？",
    a: "家具と開口部の寸法をもとにした簡易的な幾何計算による目安です。壁や床の凹凸、ドア枠・靴箱の出っ張り、天井の梁や照明器具などは計算に含まれていないため、判定が「通る」でも実際には通らないことがあります。必ず実測のうえ、余裕を持って搬入計画を立ててください。",
  },
  {
    q: "梱包された状態のサイズと、家具自体のサイズどちらを入力すればいいですか？",
    a: "梱包されたまま運ぶ場合は梱包時のサイズを、梱包を外して運ぶ場合は家具自体のサイズを入力してください。梱包材の分だけ数センチ大きくなることが多いので、迷った場合は大きい方の数値で確認するのが安全です。",
  },
  {
    q: "「曲がり角がある」にチェックを入れるとどう変わりますか？",
    a: "曲がり角やL字の廊下で家具の向きを変えるには、家具の長辺に近い分だけ余分なスペースが必要です。チェックを入れると、この回転スペースを考慮した、より慎重な判定に切り替わります。",
  },
  {
    q: "開口部の寸法はどこを測ればいいですか？",
    a: "ドア枠の内側（有効開口幅）を測るのが基本です。ドア自体を開けた状態で、床から天井方向・壁から壁方向の一番狭い部分をメジャーで実測してください。目安のサイズは「ガイド」ページも参考にしてください。",
  },
  {
    q: "スマートフォンでも使えますか？",
    a: "はい、スマートフォン・タブレット・パソコンのブラウザからご利用いただけます。特別なアプリのインストールは不要です。",
  },
  {
    q: "入力した数値は保存されますか？",
    a: "保存されません。入力データはブラウザ内でのみ計算に使用され、サーバーへの送信や保存は行っていません。詳しくは",
    linkLabel: "プライバシーポリシー",
    linkHref: "/privacy",
    aSuffix: "をご覧ください。",
  },
  {
    q: "利用料金はかかりますか？",
    a: "無料でご利用いただけます。",
  },
  {
    q: "判定結果を家族や引っ越し業者と共有できますか？",
    a: "判定後に表示される「この結果をコピーする」ボタンから、結果のテキストをクリップボードにコピーできます。LINEやメールにそのまま貼り付けて共有可能です。",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${item.a}${item.linkLabel ?? ""}${item.aSuffix ?? ""}`,
      },
    })),
  };

  return (
    <div className="wrap">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ よくある質問
      </p>

      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect x="18" y="20" width="26" height="16" fill="#D9A62E" transform="rotate(35 31 28)" />
        </svg>
        <div>
          <p className="eyebrow">FAQ</p>
          <h1>よくある質問</h1>
          <p>搬入経路チェッカーの使い方や判定の考え方について、よくいただく質問をまとめました。</p>
        </div>
      </div>

      <div className="card article">
        {faqs.map((item) => (
          <div className="faq-item" key={item.q}>
            <h3>Q. {item.q}</h3>
            <p>
              A. {item.a}
              {item.linkHref && item.linkLabel ? (
                <>
                  <Link href={item.linkHref}>{item.linkLabel}</Link>
                  {item.aSuffix}
                </>
              ) : null}
            </p>
          </div>
        ))}
      </div>

      <div className="card cta-card">
        <h2>実際に判定してみましょう</h2>
        <p>家具のサイズと玄関・ドアの寸法を入力するだけで、すぐに結果が確認できます。</p>
        <Link href="/" className="cta-link">
          搬入経路チェッカーを使う
        </Link>
      </div>

      <footer>
        解決しない質問がありましたら、<Link href="/contact">お問い合わせフォーム</Link>
        からご連絡ください。
      </footer>
    </div>
  );
}
