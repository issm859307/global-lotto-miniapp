"use client";
import { useState } from "react";

export default function ReceiptPage() {
  const [tab, setTab] = useState<"receipt" | "address">("receipt");
  const [walletAddr, setWalletAddr] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">영수증</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-3 py-1 rounded transition-transform ${tab === "receipt" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("receipt")}
        >
          영수증
        </button>
        <button
          className={`px-3 py-1 rounded transition-transform ${tab === "address" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("address")}
        >
          주소조회
        </button>
      </div>
      {tab === "receipt" && (
        <ul className="list-disc list-inside text-sm">
          <li>#21 일반 로또 티켓 2장 - 2 WLD</li>
          <li>#20 VIP 로또 티켓 5장 - 50 WLD</li>
          {/* 실제 데이터는 백엔드 연동 */}
        </ul>
      )}
      {tab === "address" && (
        <div>
          <input
            type="text"
            placeholder="지갑 주소 (0x...)"
            value={walletAddr}
            onChange={(e) => setWalletAddr(e.target.value)}
            className="border p-2 w-full mb-2 rounded"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded transition-transform hover:scale-105"
            onClick={() => alert(`월드스캔에서 ${walletAddr} 영수증 조회 (예시)`)}
          >
            조회
          </button>
        </div>
      )}
    </div>
  );
}