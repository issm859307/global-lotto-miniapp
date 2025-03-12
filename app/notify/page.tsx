// app/notify/page.tsx
"use client";

import { useState } from "react";
import { MiniKit } from "@worldcoin/minikit-js";
console.log("MiniKit Commands:", MiniKit.commands);

export default function NotifyPage() {
  const [notificationStatus, setNotificationStatus] = useState("");
  const [contacts, setContacts] = useState<
    Array<{ username: string; walletAddress: string }>
  >([]);

  const sendTestNotification = async () => {
    try {
      const payload = {
        wallet_addresses: ["0x1234567890abcdef1234567890abcdef12345678"], // 예시 주소
        title: "로또 알림 🎟",
        message: "다음 로또 추첨까지 24시간 남았습니다! ⏰",
        mini_app_path: "worldapp://mini-app?app_id=global_lotto_mini_app&path=/lotto",
        app_id: "api_a2V5XzZjNjg2YzVlMGI4ZmQ0ZWVlYjEyMDdmYzM4OTgwNzE5OnNrXzI0OGY5NjYyOTM2ZDI5Mjc3NThjNmI4Njk3NThmY2VlYWU3ZjIyMWM0YzVlOWNhMg", // 실제 app_id로 교체 필요
      };

      const result = await MiniKit.commands.sendNotifications(payload);
      console.log("알림 전송 결과:", result);
      setNotificationStatus("알림 전송 성공! 🎉");
    } catch (error) {
      console.error("알림 전송 오류:", error);
      setNotificationStatus("알림 전송 실패! 😢");
    }
  };

  const shareContacts = async () => {
    try {
      const payload = {
        isMultiSelectEnabled: true,
        inviteMessage: "Global Lotto 미니앱에 참여해보세요! 🚀",
      };

      const result = await MiniKit.commands.shareContacts(payload);
      console.log("연락처 공유 결과:", result);
      setContacts(result.contacts || []);
    } catch (error) {
      console.error("연락처 공유 오류:", error);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🔔 알림 및 연락처 공유</h1>
      <div style={{ marginBottom: 16 }}>
        <button onClick={sendTestNotification}>테스트 알림 전송</button>
        <p>{notificationStatus}</p>
      </div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={shareContacts}>연락처 공유</button>
      </div>
      {contacts.length > 0 && (
        <div>
          <h2>공유된 연락처:</h2>
          <ul>
            {contacts.map((contact, index) => (
              <li key={index}>
                사용자명: {contact.username}, 지갑주소: {contact.walletAddress}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
