// app/claim/page.tsx
"use client";

import { useState } from "react";

export default function ClaimPage() {
  // 예시 영수증 데이터 (실제 데이터는 백엔드 연동 필요)
  const [receipt, setReceipt] = useState({
    gameId: "LOTTO20230301",
    claimDeadline: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000), // 현재부터 30일 후
    amount: "100 WLD",
    claimed: false,
  });
  const [claimStatus, setClaimStatus] = useState("");

  const handleClaim = () => {
    const now = new Date();
    if (now > receipt.claimDeadline) {
      setClaimStatus("청구 기한이 만료되었습니다. 고객센터에 문의해주세요.");
    } else {
      setClaimStatus("상품 청구 성공! 당첨금이 지급됩니다. 🎉");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>상품 청구</h1>
      <p>당첨 영수증</p>
      <ul>
        <li>게임 ID: {receipt.gameId}</li>
        <li>당첨금: {receipt.amount}</li>
        <li>
          청구 기한: {receipt.claimDeadline.toLocaleDateString()}{" "}
          <span style={{ fontSize: "12px", color: "#777" }}>
            (청구 기간 내에 반드시 청구해 주세요.)
          </span>
        </li>
      </ul>
      <button onClick={handleClaim}>상품 청구하기</button>
      {claimStatus && (
        <div style={{ marginTop: 16, color: claimStatus.includes("성공") ? "green" : "red" }}>
          {claimStatus}
        </div>
      )}
    </div>
  );
}
