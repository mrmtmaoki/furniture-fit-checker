"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    const params = new URLSearchParams();
    formData.forEach((value, key) => params.append(key, String(value)));

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params.toString(),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="card">
        <h2>送信が完了しました</h2>
        <p className="sub">
          ご連絡いただきありがとうございます。内容を確認のうえ、必要に応じてご記入いただいたメールアドレス宛にご返信いたします。
        </p>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>お問い合わせフォーム</h2>
      <p className="sub">
        いただいた内容は、お問い合わせへの回答以外の目的では利用しません。返信をご希望の場合は、メールアドレスをご記入ください。
      </p>

      <form name="contact" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <p className="honeypot-field">
          <label>
            入力しないでください
            <input name="bot-field" />
          </label>
        </p>

        <div className="form-field">
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" name="name" placeholder="山田 太郎" />
        </div>

        <div className="form-field">
          <label htmlFor="email">メールアドレス（返信をご希望の場合）</label>
          <input type="email" id="email" name="email" placeholder="example@example.com" />
        </div>

        <div className="form-field">
          <label htmlFor="message">お問い合わせ内容</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="ご質問・ご意見・不具合報告など"
          />
        </div>

        {status === "error" && (
          <p className="form-error">送信に失敗しました。時間をおいて再度お試しください。</p>
        )}

        <button type="submit" className="btn-primary" disabled={status === "submitting"}>
          {status === "submitting" ? "送信中…" : "送信する"}
        </button>
      </form>
    </div>
  );
}
