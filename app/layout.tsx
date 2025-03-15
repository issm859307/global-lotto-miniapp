"use client";
import "../styles/globals.css";
import Link from "next/link";
import LanguageDropdown from "./components/LanguageDropdown";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <title>Global Lotto MiniApp</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-100">
        {/* 상단 헤더 */}
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold animate-fadeIn">Global Lotto</h1>
          <LanguageDropdown />
        </header>

        {/* 메인 컨텐츠 */}
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>

        {/* 하단 내비게이션 (원형 플로팅 메뉴 효과를 고려한 간단한 탭) */}
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow flex justify-around items-center h-16 animate-slideInUp">
          <Link href="/results" className="flex flex-col items-center text-gray-700 text-sm">
            <span>📊</span>
            <span>결과</span>
          </Link>
          <Link href="/" className="flex flex-col items-center text-gray-700 text-sm">
            <span>🏠</span>
            <span>홈</span>
          </Link>
          <Link href="/lotto" className="flex flex-col items-center text-gray-700 text-sm">
            <span>🎟</span>
            <span>로또</span>
          </Link>
          <Link href="/receipt" className="flex flex-col items-center text-gray-700 text-sm">
            <span>🧾</span>
            <span>영수증</span>
          </Link>
        </nav>
      </body>
    </html>
  );
}