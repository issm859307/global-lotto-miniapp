// app/friend/page.tsx
"use client";

import { useState } from "react";

export default function FriendPage() {
  const [inviteCode, setInviteCode] = useState("");
  const [message, setMessage] = useState("");

  const handleInvite = () => {
    // 친구 초대 시, 각 회차 추첨 시 총 금액의 2%를 보상으로 배분하는 로직은
    // 백엔드와 스마트 컨트랙트에서 처리되어야 합니다.
    // 여기서는 초대 성공 메시지 예시만 표시합니다.
    setMessage(
      "친구 초대에 성공했습니다! 초대 보상으로, 각 회차 추첨 시 총 금액의 2%가 보상으로 배분됩니다."
    );
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>친구 초대</h1>
      <p>초대 코드를 입력하거나, 초대 링크를 복사하여 친구에게 공유하세요.</p>
      <input
        type="text"
        placeholder="초대 코드 입력"
        value={inviteCode}
        onChange={(e) => setInviteCode(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />
      <button onClick={handleInvite}>친구 초대하기</button>
      {message && (
        <div style={{ marginTop: 16, color: "green" }}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
}
