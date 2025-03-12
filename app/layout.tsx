// app/layout.tsx
"use client";

import "../styles/globals.css";
import Link from "next/link";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>Global Lotto MiniApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header style={{ padding: "10px", display: "flex", justifyContent: "flex-end" }}>
          <LanguageSwitcher />
        </header>
        <div style={{ minHeight: "100vh", paddingBottom: "70px" }}>
          {children}
        </div>
        <nav
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            width: "100%",
            height: "70px",
            backgroundColor: "#fff",
            borderTop: "1px solid #ccc",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <Link href="/"><a>홈</a></Link>
          <Link href="/ticket"><a>티켓 구매</a></Link>
          <Link href="/lotto"><a>일반 로또</a></Link>
          <Link href="/vip-lotto"><a>VIP 로또</a></Link>
          <Link href="/claim"><a>상품 청구</a></Link>
          <Link href="/faq"><a>FAQ</a></Link>
          <Link href="/quick"><a>빠른 작업</a></Link>
          <Link href="/notify"><a>알림</a></Link>
          <Link href="/friend"><a>친구 초대</a></Link>
        </nav>
      </body>
    </html>
  );
}
