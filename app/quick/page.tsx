"use client";

export default function QuickActionsPage() {
  const quickActions = [
    {
      name: "UNO 스왑",
      url: "https://worldcoin.org/mini-app?app_id=app_a4f7f3e62c1de0b9490a5260cb390b56&path=%3Ftab%3Dswap",
    },
    {
      name: "Eggs Vault 알 깨기",
      url: "https://worldcoin.org/mini-app?app_id=app_ee968e983074cb090e6f12cd75b63bb3",
    },
    {
      name: "DNA 토큰 전송",
      url: "https://worldcoin.org/mini-app?app_id=app_8e407cfbae7ae51c19b07faff837aeeb&path=%2Fwallet%3Ftab%3Dsend",
    },
    {
      name: "World Chat",
      url: "https://worldcoin.org/mini-app?app_id=app_e293fcd0565f45ca296aa317212d8741&path=%2Fjohndoe%2Fdraft",
    },
  ];

  return (
    <div style={{ padding: 20 }}>
      <h1>🚀 Quick Actions</h1>
      <p>아래 버튼을 클릭하면 해당 기능으로 빠르게 이동합니다.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {quickActions.map((action) => (
          <a
            key={action.name}
            href={action.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px",
              backgroundColor: "#0070f3",
              color: "#fff",
              textDecoration: "none",
              textAlign: "center",
              borderRadius: "6px",
            }}
          >
            {action.name}
          </a>
        ))}
      </div>
    </div>
  );
}
