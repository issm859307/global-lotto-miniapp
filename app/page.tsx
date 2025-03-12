// app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t, lang } = useTranslation("common");
  const [walletAddress, setWalletAddress] = useState("");
  const [username, setUsername] = useState("");
  // 누적 잭팟 금액 (추후 백엔드 연동 예정 - 현재는 예시값)
  const [jackpot, setJackpot] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // MiniKit 초기화
      MiniKit.install();
      // 예시: 누적 잭팟을 백엔드에서 받아오는 코드 (추후 업데이트)
      // fetch("/api/jackpot").then(res => res.json()).then(data => setJackpot(data.jackpot));
    }
  }, []);

  const connectWallet = async () => {
    try {
      // 1) 월드앱 환경인지 체크
      if (!MiniKit.isInstalled()) {
        alert("월드앱 환경에서만 지갑 인증이 가능합니다.");
        return;
      }

      // 2) 지갑 인증 (walletAuth)
      const authResult = await MiniKit.commands.walletAuth({
        app_id: "api_a2V5XzZjNjg2YzVlMGI4ZmQ0ZWVlYjEyMDdmYzM4OTgwNzE5OnNrXzI0OGY5NjYyOTM2ZDI5Mjc3NThjNmI4Njk3NThmY2VlYWU3ZjIyMWM0YzVlOWNhMg", // 실제 app_id로 교체
        action: "login",
      });

      // 3) authResult가 null이거나, walletAddress가 없는지 체크
      if (!authResult || !authResult.walletAddress) {
        alert("인증이 취소되었거나 올바른 환경이 아닙니다.");
        return;
      }

      // 4) 인증 성공 시 상태 업데이트
      setWalletAddress(authResult.walletAddress);
      setUsername(authResult.user.username);
      alert("지갑 연결 및 인증 완료 🎉");
    } catch (error) {
      console.error("지갑 연결 오류:", error);
      alert("지갑 연결 중 오류가 발생했습니다. 😢");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{t("welcome")}</h1>
      <p>{t("introText")}</p>
      
      <button onClick={connectWallet} style={{ marginBottom: "20px" }}>
        {t("connectWallet") || "지갑 연결하기"}
      </button>

      {walletAddress && (
        <div>
          <h3>연결된 지갑 주소:</h3>
          <p>{walletAddress}</p>
          <h3>사용자명:</h3>
          <p>{username}</p>
        </div>
      )}

      {/* 누적 잭팟 표시 (추후 실시간 업데이트 예정) */}
      <section
        style={{
          marginTop: "30px",
          padding: "20px",
          backgroundColor: "#fff3e0",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <h2>현재 잭팟</h2>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>{jackpot} WLD</p>
      </section>
      
      <p style={{ marginTop: "20px", fontSize: "12px", color: "#777" }}>
        © 2023 Global Lotto MiniApp. All rights reserved.
      </p>
    </div>
  );
}
