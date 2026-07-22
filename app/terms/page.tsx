import type { Metadata } from "next";
import Link from "next/link";
import { SITE_NAME, SITE_URL } from "../lib/site";

const title = "利用規約";
const description = "家具 搬入チェッカーのご利用にあたっての規約です。";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title,
    description,
    url: `${SITE_URL}/terms`,
    siteName: SITE_NAME,
    locale: "ja_JP",
    type: "article",
  },
};

export default function TermsPage() {
  return (
    <div className="wrap">
      <p className="breadcrumb">
        <Link href="/">家具 搬入チェッカー</Link> ／ 利用規約
      </p>

      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect x="18" y="20" width="26" height="16" fill="#D9A62E" transform="rotate(35 31 28)" />
        </svg>
        <div>
          <p className="eyebrow">Terms of Use</p>
          <h1>利用規約</h1>
          <p>
            本規約は、{SITE_NAME}（以下「当サイト」）が提供するサービスの利用条件を定めるものです。
          </p>
        </div>
      </div>

      <div className="card article">
        <h2>第1条（適用）</h2>
        <p>
          本規約は、当サイトが提供するすべてのサービス（以下「本サービス」）の利用に関わる一切の関係に適用されるものとします。ユーザーは、本サービスを利用することで、本規約に同意したものとみなします。
        </p>
      </div>

      <div className="card article">
        <h2>第2条（サービスの内容）</h2>
        <p>
          本サービスは、ユーザーが入力した家具および開口部の寸法をもとに、家具が開口部を通過できる可能性を簡易的に計算・表示する無料ツールです。計算結果は目安であり、実際の搬入可否を保証するものではありません。
        </p>
      </div>

      <div className="card article">
        <h2>第3条（禁止事項）</h2>
        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはならないものとします。</p>
        <ul>
          <li>法令または公序良俗に違反する行為</li>
          <li>当サイトのサーバーやネットワークの機能を妨害する行為</li>
          <li>本サービスのソースコードやコンテンツを不正に複製・改変・転用する行為</li>
          <li>その他、当サイトが不適切と判断する行為</li>
        </ul>
      </div>

      <div className="card article">
        <h2>第4条（免責事項）</h2>
        <p>
          当サイトは、本サービスの計算結果の正確性、完全性、有用性等について、いかなる保証も行いません。本サービスの利用によって生じたいかなる損害（家具の破損、搬入作業に関するトラブル、その他の損害を含みますがこれらに限りません）についても、当サイトは一切の責任を負いません。
        </p>
        <p>
          当サイトは、本サービスの内容を予告なく変更、中断、終了することがあり、これによってユーザーに生じた損害について責任を負いません。
        </p>
      </div>

      <div className="card article">
        <h2>第5条（知的財産権）</h2>
        <p>
          本サービスに関する著作権その他の知的財産権は、当サイトまたは正当な権利を有する第三者に帰属します。無断での複製・転載・改変等を禁止します。
        </p>
      </div>

      <div className="card article">
        <h2>第6条（本規約の変更）</h2>
        <p>
          当サイトは、必要と判断した場合には、ユーザーへの事前の通知なく本規約を変更できるものとします。変更後の規約は、当ページに掲載した時点から効力を生じるものとします。
        </p>
      </div>

      <div className="card article">
        <h2>第7条（準拠法・管轄）</h2>
        <p>
          本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、当サイト運営者の所在地を管轄する裁判所を専属的合意管轄とします。
        </p>
      </div>

      <p className="breadcrumb">
        個人情報の取り扱いについては<Link href="/privacy">プライバシーポリシー</Link>
        をご覧ください。
      </p>

      <footer>制定日：2026年7月22日</footer>
    </div>
  );
}
