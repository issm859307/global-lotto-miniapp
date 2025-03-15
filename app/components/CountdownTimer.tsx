"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer({ targetTime }: { targetTime: number }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetTime - now;
      if (diff <= 0) {
        setTimeLeft("추첨 진행 중");
        clearInterval(timer);
      } else {
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        setTimeLeft(`D-${d} | ${h}시간 ${m}분`);
      }
    }, 1000 * 60); // 1분마다 업데이트
    return () => clearInterval(timer);
  }, [targetTime]);

  return <span className="text-red-500">{timeLeft}</span>;
}