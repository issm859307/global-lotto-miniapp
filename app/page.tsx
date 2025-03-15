"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function HomePage() {
  // 예시 잭팟 금액
  const [normalJackpot, setNormalJackpot] = useState(855.6);
  const [vipJackpot, setVipJackpot] = useState(3056.4);

  // 7일, 14일 후 추첨 시간
  const normalTarget = new Date().getTime() + 7 * 24 * 60 * 60 * 1000;
  const vipTarget = new Date().getTime() + 14 * 24 * 60 * 60 * 1000;

  // 초 단위 카운트다운
  const [normalTimeLeft, setNormalTimeLeft] = useState("");
  const [vipTimeLeft, setVipTimeLeft] = useState("");

  useEffect(() => {
    // 1초 간격으로 남은 시간 갱신
    const timer = setInterval(() => {
      const now = Date.now();

      // 일반 로또
      const diffNormal = normalTarget - now;
      if (diffNormal <= 0) {
        setNormalTimeLeft("추첨 진행 중");
      } else {
        const d = Math.floor(diffNormal / (1000 * 60 * 60 * 24));
        const h = Math.floor((diffNormal / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diffNormal / (1000 * 60)) % 60);
        const s = Math.floor((diffNormal / 1000) % 60);
        setNormalTimeLeft(`D-${d} | ${h}시간 ${m}분 ${s}초`);
      }

      // VIP 로또
      const diffVip = vipTarget - now;
      if (diffVip <= 0) {
        setVipTimeLeft("추첨 진행 중");
      } else {
        const d2 = Math.floor(diffVip / (1000 * 60 * 60 * 24));
        const h2 = Math.floor((diffVip / (1000 * 60 * 60)) % 24);
        const m2 = Math.floor((diffVip / (1000 * 60)) % 60);
        const s2 = Math.floor((diffVip / 1000) % 60);
        setVipTimeLeft(`D-${d2} | ${h2}시간 ${m2}분 ${s2}초`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="
      flex flex-col items-center space-y-6 
      animate-fadeIn 
      pb-16                 /* 하단 여백 늘림 */
      min-h-screen     /* 화면 전체 높이 확보 */
      overflow-y-auto  /* 필요 시 스크롤 가능 */
    ">
      <h1 className="text-3xl font-bold">Global Lotto MiniApp</h1>
      <p className="text-gray-600">환영합니다! 투명한 로또 시스템을 즐기세요.</p>
      
      {/* 잭팟 카드 */}
      <div className="w-full max-w-md grid grid-cols-1 gap-4">
        {/* 일반 로또 */}
        <div className="bg-yellow-100 p-4 rounded-lg shadow text-center">
          <h2 className="text-lg font-bold mb-1">일반 로또 잭팟</h2>
          <p className="text-3xl font-bold mb-2">{normalJackpot} WLD</p>
          <p className="text-red-500 text-sm">{normalTimeLeft}</p>
        </div>
        
        {/* VIP 로또 */}
        <div className="bg-purple-100 p-4 rounded-lg shadow text-center">
          <h2 className="text-lg font-bold mb-1">VIP 로또 잭팟</h2>
          <p className="text-3xl font-bold mb-2">{vipJackpot} WLD</p>
          <p className="text-red-500 text-sm">{vipTimeLeft}</p>
        </div>
      </div>
      
      {/* 주요 기능 버튼 */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        <Link href="/lotto" className="bg-blue-500 text-white py-3 rounded text-center transition-transform hover:scale-105">
          티켓 구매
        </Link>
        <Link href="/claim" className="bg-green-500 text-white py-3 rounded text-center transition-transform hover:scale-105">
          상품 청구
        </Link>
        <Link href="/rules" className="bg-gray-500 text-white py-3 rounded text-center transition-transform hover:scale-105">
          규칙 안내
        </Link>
        <Link href="/faq" className="bg-indigo-500 text-white py-3 rounded text-center transition-transform hover:scale-105">
          FAQ
        </Link>
      </div>
    </div>
  );
}
