"use client";
import { useState } from "react";

export default function LottoPage() {
  const [mode, setMode] = useState<"normal" | "vip">("normal");
  const [ticketCount, setTicketCount] = useState(1);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const toggleNumber = (num: number) => {
    if (selectedNumbers.includes(num)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== num));
    } else if (selectedNumbers.length < 6) {
      setSelectedNumbers([...selectedNumbers, num].sort((a, b) => a - b));
    }
  };

  const autoSelectNumbers = () => {
    const nums: number[] = [];
    while (nums.length < 6) {
      const r = Math.floor(Math.random() * 45) + 1;
      if (!nums.includes(r)) nums.push(r);
    }
    setSelectedNumbers(nums.sort((a, b) => a - b));
  };

  const ticketPrice = mode === "normal" ? 1 : 10;
  const maxCount = mode === "normal" ? 100 : 500;

  const handleBuy = () => {
    if (ticketCount < 1 || ticketCount > maxCount) {
      alert(`티켓은 1장 이상 ~ ${maxCount}장 이하로 구매 가능합니다.`);
      return;
    }
    alert(`티켓 구매 완료! (${ticketPrice} WLD × ${ticketCount}장)`);
  };

  const handleDraw = () => {
    if (selectedNumbers.length !== 6) {
      alert("번호를 6개 모두 선택해주세요!");
      return;
    }
    const draw: number[] = [];
    while (draw.length < 6) {
      const r = Math.floor(Math.random() * 45) + 1;
      if (!draw.includes(r)) draw.push(r);
    }
    draw.sort((a, b) => a - b);

    const matchCount = selectedNumbers.filter(n => draw.includes(n)).length;
    const info = (mode === "normal")
      ? "일반 로또: 잭팟의 25% 이월 + 75% 배분"
      : "VIP 로또: 잭팟의 50% 이월 + 50% 배분 (1등 없으면 하위 재분배)";

    alert(
      `당신의 번호: [${selectedNumbers.join(", ")}]\n` +
      `추첨 번호: [${draw.join(", ")}]\n` +
      `일치 개수: ${matchCount}개\n\n${info}`
    );
  };

  return (
    <div className="
      max-w-md mx-auto bg-white p-4 rounded shadow space-y-4 
      animate-fadeIn 
      pb-24            /* 하단 탭과 겹치지 않도록 충분한 패딩 */
      min-h-screen     /* 화면 전체 높이 확보 */
      overflow-y-auto  /* 스크롤 가능 */
    ">
      <h1 className="text-2xl font-bold">로또 구매</h1>

      {/* 일반 / VIP 전환 */}
      <div className="flex space-x-2">
        <button
          className={`px-3 py-1 rounded transition-transform ${mode === "normal" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => {
            setMode("normal");
            setTicketCount(1);
            setSelectedNumbers([]);
          }}
        >
          일반 로또
        </button>
        <button
          className={`px-3 py-1 rounded transition-transform ${mode === "vip" ? "bg-purple-500 text-white" : "bg-gray-200"}`}
          onClick={() => {
            setMode("vip");
            setTicketCount(1);
            setSelectedNumbers([]);
          }}
        >
          VIP 로또
        </button>
      </div>

      {/* 티켓 구매 섹션 */}
      <div className="border p-3 rounded">
        <h2 className="font-semibold mb-2">티켓 구매</h2>
        <p>티켓 가격: {ticketPrice} WLD</p>
        <div className="flex items-center space-x-4 mt-2">
          <button
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={() => setTicketCount(Math.max(1, ticketCount - 1))}
          >-</button>
          <span className="text-xl font-bold">{ticketCount}</span>
          <button
            className="bg-gray-300 px-3 py-1 rounded"
            onClick={() => setTicketCount(Math.min(maxCount, ticketCount + 1))}
          >+</button>
        </div>
        <button
          className="w-full bg-green-500 text-white mt-3 py-2 rounded transition-transform hover:scale-105"
          onClick={handleBuy}
        >
          구매하기
        </button>
      </div>

      {/* 번호 선택 & 추첨 섹션 */}
      <div className="border p-3 rounded">
        <h2 className="font-semibold mb-2">번호 선택 (1~45 중 6개)</h2>
        <div className="flex space-x-2 mb-2">
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded transition-transform hover:scale-105"
            onClick={autoSelectNumbers}
          >
            자동 선택
          </button>
          <button
            className="bg-gray-500 text-white px-3 py-1 rounded transition-transform hover:scale-105"
            onClick={() => setSelectedNumbers([])}
          >
            초기화
          </button>
        </div>
        <div className="grid grid-cols-9 gap-1">
          {Array.from({ length: 45 }, (_, i) => i + 1).map(num => {
            const selected = selectedNumbers.includes(num);
            return (
              <button
                key={num}
                className={`w-8 h-8 rounded-full text-sm transition-colors ${
                  selected ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => toggleNumber(num)}
              >
                {num}
              </button>
            );
          })}
        </div>
        <button
          className="w-full bg-red-500 text-white mt-3 py-2 rounded transition-transform hover:scale-105"
          onClick={handleDraw}
        >
          추첨하기
        </button>
      </div>
    </div>
  );
}
