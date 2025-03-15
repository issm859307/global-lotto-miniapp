"use client";
import { useState } from "react";

export default function ResultsPage() {
  const [tab, setTab] = useState<"round" | "winners">("round");

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">결과</h1>
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-3 py-1 rounded transition-transform ${tab === "round" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("round")}
        >
          회차별
        </button>
        <button
          className={`px-3 py-1 rounded transition-transform ${tab === "winners" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setTab("winners")}
        >
          당첨자
        </button>
      </div>
      {tab === "round" && (
        <ul className="list-disc list-inside text-sm">
          <li>#20 진행중 - 855.6 WLD</li>
          <li>#19 완료 - 700 WLD</li>
          <li>#18 완료 - 1200 WLD</li>
          {/* 실제 데이터는 백엔드 연동 */}
        </ul>
      )}
      {tab === "winners" && (
        <ul className="list-disc list-inside text-sm">
          <li>#19: @user1 - 45 WLD</li>
          <li>#18: @user2 - 30 WLD</li>
          {/* 실제 데이터는 백엔드 연동 */}
        </ul>
      )}
    </div>
  );
}