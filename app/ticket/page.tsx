// app/ticket/page.tsx
"use client";

import { useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import LoadingSpinner from "../components/LoadingSpinner";

export default function TicketPage() {
  const [ticketCount, setTicketCount] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false); // ✅ 오타 수정

  // ✅ 티켓 결제 함수
  const handlePayment = async (amount: number) => {
    setIsLoading(true);
    try {
      const result = await MiniKit.commands.pay({
        app_id: "api_a2V5XzZjNjg2YzVlMGI4ZmQ0ZWVlYjEyMDdmYzM4OTgwNzE5OnNrXzI0OGY5NjYyOTM2ZDI5Mjc3NThjNmI4Njk3NThmY2VlYWU3ZjIyMWM0YzVlOWNhMg",
        amount: amount.toString(),
        currency: "WLD",
        description: `티켓 ${amount}장 구매 (수수료 5% 차감)`,
      });

      if (result && result.status === "success") { // ✅ 결제 성공 여부 체크 추가
        alert("✅ 결제 성공! 🎟️ 티켓이 정상적으로 구매되었습니다.");
      } else {
        throw new Error("결제가 정상적으로 완료되지 않았습니다.");
      }
    } catch (error: any) {
      console.error("❌ 결제 오류:", error);
      handleErrorCode(error?.error_code || "unknown_error"); // ✅ 기본 오류 코드 설정
    } finally {
      setIsLoading(false);
    }
  };

  // ✅ 오류 메시지 처리 함수
  const handleErrorCode = (code: string) => {
    console.error("⛔ 오류 코드:", code);

    switch (code) {
      case "payment_rejected":
        setErrorMsg("결제가 취소되었습니다. 😢");
        break;
      case "insufficient_balance":
        setErrorMsg("잔액이 부족합니다. 지갑 잔액을 확인해주세요!");
        break;
      case "invalid_receiver":
        setErrorMsg("수신 주소가 잘못되었습니다. 관리자에게 문의하세요!");
        break;
      case "transaction_failed":
        setErrorMsg("거래가 실패했습니다. 잠시 후 다시 시도해주세요!");
        break;
      default:
        setErrorMsg("❌ 예상치 못한 오류가 발생했습니다. 다시 시도해 주세요.");
        break;
    }
  };

  // ✅ 유효성 검사 및 결제 실행
  const handleBuyTickets = () => {
    if (isNaN(ticketCount) || ticketCount < 1 || ticketCount > 100) { // ✅ 숫자 검증 추가
      alert("⚠️ 티켓 수량은 1장 이상 100장 이하로 입력해야 합니다.");
      return;
    }
    handlePayment(ticketCount);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🎟️ 티켓 구매</h1>
      <div>
        <label>
          티켓 수량:
          <input
            type="number"
            value={ticketCount}
            onChange={(e) => setTicketCount(parseInt(e.target.value, 10) || 1)}
            min="1"
            max="100"
            style={{ width: 60, marginLeft: 8 }}
          />
        </label>
      </div>
      <button onClick={handleBuyTickets} style={{ marginTop: 12 }} disabled={isLoading}>
        {isLoading ? <LoadingSpinner /> : "구매하기"}
      </button>
      {errorMsg && (
        <div style={{ marginTop: 16, color: "red" }}>
          <strong>오류:</strong> {errorMsg}
        </div>
      )}
    </div>
  );
}
