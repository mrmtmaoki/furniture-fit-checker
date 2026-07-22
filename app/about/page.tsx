import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/site";

const title = "このサイトについて";
const description =
  "家具 搬入チェッカーがどんなサイトか、作った理由、判定の考え方、運営者情報について説明します。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/about`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
  },
};

export default function AboutPage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ このサイトについて
      </p>

      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect x="18" y="20" width="26" height="16" fill="#D9A62E" transform="rotate(35 31 28)" />
        </svg>
        <div>
          <p className="eyebrow">About</p>
          <h1>このサイトについて</h1>
          <p>家具 搬入チェッカーの目的と、運営についてご案内します。</p>
        </div>
      </div>

      <div className="card article">
        <h2>サイトの目的</h2>
        <p>
          引っ越しや家具の買い替えの際、「玄関やドアを家具が通るかどうか」は現地で運んでみるまで分からず、不安になりがちなポイントです。「家具
          搬入チェッカー」は、家具のサイズと玄関・ドア・廊下の寸法を入力するだけで、まっすぐ通せそうか、対角線を使えば通せそうかを簡易的に判定できる無料ツールです。
        </p>
        <p>
          引っ越し当日に家具が入らず慌てる、業者との間でトラブルになる、といった事態を少しでも減らせるように、事前確認の手助けとして作りました。
        </p>
      </div>

      <div className="card article">
        <h2>判定の考え方</h2>
        <p>
          入力された家具のサイズ（幅・奥行き・高さ）と開口部のサイズ（幅・高さ）をもとに、次の2パターンで通過可否を計算しています。
        </p>
        <ul>
          <li>
            <strong>まっすぐ通す場合</strong>
            ：家具の短い方の辺が開口部の幅以内、かつ家具の高さが開口部の高さ以内かどうか
          </li>
          <li>
            <strong>斜めにして通す場合</strong>
            ：家具を傾けたときの対角線の長さをもとに、開口部を斜めに使えば通せる可能性があるかどうか
          </li>
        </ul>
        <p>
          さらに「曲がり角・L字の廊下がある」を選択すると、回転させるための余分なスペースを考慮した判定に切り替わります。
        </p>
        <div className="note-box">
          この判定はあくまで目安です。壁や床の凹凸、ドア枠・靴箱の出っ張り、天井の梁や照明器具など、計算に含まれない要因で実際には通らないケースもあります。最終判断は必ず実測・現地確認のうえ、必要に応じて引っ越し業者や家具店にご相談ください。
        </div>
      </div>

      <div className="card article">
        <h2>入力データの扱いについて</h2>
        <p>
          このツールに入力した家具・開口部のサイズは、お使いのブラウザ内だけで計算処理されます。サーバーへの送信や保存は行っていません。詳しくは
          <Link href="/privacy">プライバシーポリシー</Link>
          をご覧ください。
        </p>
      </div>

      <div className="card article">
        <h2>運営者情報</h2>
        <p>
          運営者：家具 搬入チェッカー 運営者
          <br />
          お問い合わせ：<Link href="/contact">お問い合わせページ</Link>
          よりご連絡ください。
        </p>
      </div>

      <div className="card cta-card">
        <h2>実際に判定してみましょう</h2>
        <p>家具のサイズと玄関・ドアの寸法を入力するだけで、すぐに結果が確認できます。</p>
        <Link href="/" className="cta-link">
          搬入経路チェッカーを使う
        </Link>
      </div>

      <footer>
        本サイトの情報は一般的な目安を提供するものであり、搬入の可否を保証するものではありません。
      </footer>
    </div>
  );
}
