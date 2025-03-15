"use client";
import { useState } from "react";

export default function ClaimPage() {
  const [claimStatus, setClaimStatus] = useState("");

  const handleClaim = () => {
    // 실제 청구 로직은 추후 백엔드/스마트 컨트랙트 연동 예정
    setClaimStatus("상품 청구 완료! 당첨금을 확인하세요.");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">상품 청구</h1>
      <p className="mb-2 text-sm text-gray-600">당첨 후 1개월 이내에 청구해야 합니다.</p>
      <button
        className="bg-green-500 text-white w-full py-2 rounded transition-transform hover:scale-105"
        onClick={handleClaim}
      >
        청구하기
      </button>
      {claimStatus && (
        <p className="mt-2 text-center text-green-600">{claimStatus}</p>
      )}
    </div>
  );
}