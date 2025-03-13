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
          <Link href="/">홈</Link>
          <Link href="/ticket">티켓 구매</Link>
          <Link href="/lotto">일반 로또</Link>
          <Link href="/vip-lotto">VIP 로또</Link>
          <Link href="/claim">상품 청구</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/quick">빠른 작업</Link>
          <Link href="/notify">알림</Link>
          <Link href="/share" className="text-blue-500 font-bold">📢 공유</Link>
        </nav>
      </body>
    </html>
  );
}
