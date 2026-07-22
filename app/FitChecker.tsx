"use client";

import { useState } from "react";
import Link from "next/link";

type FitState = "ok" | "warn" | "bad";

type Segment = { text: string } | { figure: string };

interface ResultData {
  state: FitState;
  title: string;
  segments: Segment[];
}

function renderSegments(segments: Segment[]) {
  return segments.map((seg, i) =>
    "figure" in seg ? (
      <span key={i} className="figure">
        {seg.figure}
      </span>
    ) : (
      <span key={i}>{seg.text}</span>
    )
  );
}

function segmentsToText(segments: Segment[]) {
  return segments.map((seg) => ("figure" in seg ? seg.figure : seg.text)).join("");
}

export default function FitChecker() {
  const [fW, setFW] = useState("");
  const [fD, setFD] = useState("");
  const [fH, setFH] = useState("");
  const [dW, setDW] = useState("");
  const [dH, setDH] = useState("");
  const [hasCorner, setHasCorner] = useState(false);

  const [result, setResult] = useState<ResultData | null>(null);
  const [summary, setSummary] = useState("");
  const [copyMsg, setCopyMsg] = useState("");

  function setPreset(w: number, h: number) {
    setDW(String(w));
    setDH(String(h));
  }

  function checkFit() {
    const nfW = parseFloat(fW);
    const nfD = parseFloat(fD);
    const nfH = parseFloat(fH);
    const ndW = parseFloat(dW);
    const ndH = parseFloat(dH);
    if ([nfW, nfD, nfH, ndW, ndH].some((v) => Number.isNaN(v))) return;

    // Straight pass: smallest horizontal side must fit door width, height must fit door height
    const straightSide = Math.min(nfW, nfD);
    const straightOK = straightSide <= ndW && nfH <= ndH;

    // Diagonal pass (tilt the furniture): try both W-H and D-H diagonals against door height,
    // with the remaining depth needing to fit the door width for the turning motion.
    const diag1 = Math.sqrt(nfW * nfW + nfH * nfH);
    const diag2 = Math.sqrt(nfD * nfD + nfH * nfH);
    const minDoorDiagonal = Math.sqrt(ndW * ndW + ndH * ndH);
    let canTiltThrough =
      Math.min(diag1, diag2) <= minDoorDiagonal && Math.min(nfW, nfD) <= ndW * 1.15;

    // A corner/turn needs extra rotation space roughly equal to the furniture's longest
    // horizontal side; if the passage is tight, a corner makes a marginal "tilt" pass unreliable.
    const cornerRisk = hasCorner && Math.max(nfW, nfD) > ndW * 1.4;
    if (hasCorner && canTiltThrough && cornerRisk) {
      canTiltThrough = false;
    }

    let state: FitState;
    let title: string;
    let segments: Segment[];

    if (straightOK) {
      state = "ok";
      title = "◎ まっすぐ通せそうです";
      segments = [
        { text: "家具の幅（短い方の辺 " },
        { figure: `${straightSide}cm` },
        { text: "）が開口部の幅 " },
        { figure: `${ndW}cm` },
        { text: "以内、高さ " },
        { figure: `${nfH}cm` },
        { text: "も開口部の高さ " },
        { figure: `${ndH}cm` },
        { text: "以内なので、立てたまま普通に通せる可能性が高いです。" },
      ];
      if (hasCorner) {
        segments.push({
          text: " 曲がり角がある場合でも、まっすぐ通せるサイズなら比較的リスクは低めです。",
        });
      }
    } else if (canTiltThrough) {
      state = "warn";
      title = "△ 斜めにすれば通せる可能性があります";
      segments = [
        { text: "立てたままでは厳しいですが、対角線（約 " },
        { figure: `${Math.round(Math.min(diag1, diag2))}cm` },
        {
          text: "）で見ると、開口部を斜めに使えば通せる可能性があります。曲がり角や廊下の奥行きに余裕があるか、実際に運ぶ前に確認してください。",
        },
      ];
    } else {
      state = "bad";
      title = "✕ このままでは厳しそうです";
      segments = [
        { text: "立てても斜めにしても、開口部（幅 " },
        { figure: `${ndW}cm` },
        { text: "／高さ " },
        { figure: `${ndH}cm` },
        {
          text: "）に対して家具が大きすぎる可能性があります。分解できるか確認する、ドアを一時的に外す、窓やベランダからの搬入を検討する、などの対策が必要かもしれません。",
        },
      ];
      if (hasCorner && cornerRisk) {
        segments.push({
          text: " 特に曲がり角では家具を回転させるスペースが余分に必要になるため、直線部分の計算だけでは判断できません。",
        });
      }
    }

    setResult({ state, title, segments });
    setCopyMsg("");

    const plain = segmentsToText(segments);
    setSummary(
      `【家具搬入チェック】\n家具: 幅${nfW}×奥行${nfD}×高さ${nfH}cm\n開口部: 幅${ndW}×高さ${ndH}cm${
        hasCorner ? "（曲がり角あり）" : ""
      }\n判定: ${title}\n${plain}`
    );
  }

  function copyResult() {
    navigator.clipboard
      .writeText(summary)
      .then(() => {
        setCopyMsg("コピーしました。家族や引っ越し業者に送ってみてください。");
      })
      .catch(() => {
        setCopyMsg("コピーできませんでした。手動で選択してください。");
      });
  }

  const rotation = result ? (result.state === "ok" ? 0 : result.state === "warn" ? 35 : 55) : 0;
  const furnitureColor = result ? `var(--${result.state})` : "var(--ok)";

  return (
    <div className="wrap">
      <div className="hero">
        <svg width="64" height="64" viewBox="0 0 64 64">
          <rect x="10" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="50" y="8" width="4" height="48" fill="#2C3E50" />
          <rect x="10" y="6" width="44" height="4" fill="#2C3E50" />
          <rect
            x="18"
            y="20"
            width="26"
            height="16"
            fill="#D9A62E"
            transform="rotate(35 31 28)"
          />
        </svg>
        <div>
          <p className="eyebrow">Furniture Fit Checker</p>
          <h1>その家具、玄関を通りますか？</h1>
          <p>
            家具のサイズと、通したい玄関・ドア・廊下の寸法を入れるだけで、まっすぐ通るか、斜めにすれば通るか、対角線の計算で判定します。
          </p>
        </div>
      </div>

      <div className="card">
        <h2>寸法を入力</h2>
        <p className="sub">
          メジャーで実測した数字（cm）を入れてください。梱包されたまま運ぶ場合は梱包サイズで。
        </p>

        <div className="group-title">搬入したい家具</div>
        <div className="row3">
          <div className="field">
            <label htmlFor="fW">幅 W</label>
            <input
              type="number"
              id="fW"
              placeholder="90"
              value={fW}
              onChange={(e) => setFW(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="fD">奥行き D</label>
            <input
              type="number"
              id="fD"
              placeholder="45"
              value={fD}
              onChange={(e) => setFD(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="fH">高さ H</label>
            <input
              type="number"
              id="fH"
              placeholder="180"
              value={fH}
              onChange={(e) => setFH(e.target.value)}
            />
          </div>
        </div>

        <div className="group-title">通したい場所（玄関・ドア・廊下の入口など）</div>
        <div className="presets">
          <button type="button" className="preset-btn" onClick={() => setPreset(80, 200)}>
            玄関ドアの目安（幅80×高さ200）
          </button>
          <button type="button" className="preset-btn" onClick={() => setPreset(75, 190)}>
            室内ドアの目安（幅75×高さ190）
          </button>
          <button type="button" className="preset-btn" onClick={() => setPreset(80, 220)}>
            廊下の目安（幅80×高さ220）
          </button>
        </div>
        <div className="row3">
          <div className="field">
            <label htmlFor="dW">開口部の幅</label>
            <input
              type="number"
              id="dW"
              placeholder="75"
              value={dW}
              onChange={(e) => setDW(e.target.value)}
            />
          </div>
          <div className="field">
            <label htmlFor="dH">開口部の高さ</label>
            <input
              type="number"
              id="dH"
              placeholder="190"
              value={dH}
              onChange={(e) => setDH(e.target.value)}
            />
          </div>
        </div>

        <div className="toggle-row">
          <input
            type="checkbox"
            id="hasCorner"
            checked={hasCorner}
            onChange={(e) => setHasCorner(e.target.checked)}
          />
          <label htmlFor="hasCorner">この先に曲がり角・L字の廊下がある</label>
        </div>
        <p className="hint" style={{ margin: "4px 0 0 24px" }}>
          階段の踊り場や廊下の曲がり角では、家具を回転させる分だけ余分なスペースが必要です。
        </p>

        <button type="button" className="btn-primary" onClick={checkFit}>
          通るか判定する
        </button>
      </div>

      {result && (
        <div className="card">
          <div className="illust">
            <svg width="220" height="150" viewBox="0 0 220 150">
              <line x1="30" y1="20" x2="30" y2="130" stroke="#2C3E50" strokeWidth="5" />
              <line x1="190" y1="20" x2="190" y2="130" stroke="#2C3E50" strokeWidth="5" />
              <line x1="27" y1="18" x2="193" y2="18" stroke="#2C3E50" strokeWidth="5" />
              <rect
                x="70"
                y="45"
                width="80"
                height="40"
                fill={furnitureColor}
                opacity="0.85"
                rx="3"
                transform={`rotate(${rotation} 110 65)`}
              />
            </svg>
          </div>
          <div className={`result ${result.state}`}>
            <div className="result-head">
              <div className="result-title">{result.title}</div>
            </div>
            <div className="result-body">{renderSegments(result.segments)}</div>
            <div className="margin-note">
              実測値ぴったりだと危険なので、判定が「通る」の場合でも余裕は5〜10cm以上見ておくと安心です。梱包時は実物より数cm大きくなることもあります。
            </div>
          </div>
          <button type="button" className="btn-secondary" onClick={copyResult}>
            この結果をコピーする（家族や業者に共有）
          </button>
          <div id="copyMsg">{copyMsg}</div>
        </div>
      )}

      <p className="breadcrumb" style={{ textAlign: "center" }}>
        寸法が分からないときは
        <Link href="/guide"> 玄関ドア・室内ドアのサイズ目安と曲がり角の注意点ガイド </Link>
        もあわせてご覧ください。
      </p>

      <footer>
        曲がり角のある廊下や、天井の梁・照明などの突起物は別途確認が必要です。判定が難しい場合は無理せず、業者への相談・分解搬入・窓からの搬入も検討してください。
      </footer>
    </div>
  );
}
