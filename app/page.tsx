"use client";

import { useEffect, useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
import useTranslation from "next-translate/useTranslation";

export default function Home() {
  const { t } = useTranslation("common");
  const [walletAddress, setWalletAddress] = useState("");
  const [username, setUsername] = useState("");
  const [jackpot, setJackpot] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      MiniKit.install();
      // 잭팟 정보는 추후 백엔드 연동 예정, 현재 예시 값 사용
      // fetch("/api/jackpot").then(res => res.json()).then(data => setJackpot(data.jackpot));
    }
  }, []);

  const connectWallet = async () => {
    try {
      const authResult = await MiniKit.commands.walletAuth({
        app_id: "api_a2V5XzZjNjg2YzVlMGI4ZmQ0ZWVlYjEyMDdmYzM4OTgwNzE5OnNrXzI0OGY5NjYyOTM2ZDI5Mjc3NThjNmI4Njk3NThmY2VlYWU3ZjIyMWM0YzVlOWNhMg",
        action: "login",
      });
      setWalletAddress(authResult.walletAddress);
      setUsername(authResult.user.username);
      alert("지갑 연결 및 인증 완료 🎉");
    } catch (error) {
      console.error("지갑 연결 오류:", error);
      alert("지갑 연결 중 오류가 발생했습니다. 😢");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>{t("welcome") || "Global Lotto MiniApp에 오신 것을 환영합니다!"}</h1>
      <p>{t("introText") || "투명하고 공정한 로또 시스템을 제공합니다."}</p>
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
