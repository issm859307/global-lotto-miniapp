// app/vip-lotto/page.tsx
"use client";

import { useState, useEffect } from "react";

// CountdownTimer 컴포넌트 (일반 로또와 동일)
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    //@ts-ignore
    if (!timeLeft[interval]) return;
    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return <div>{timerComponents.length ? timerComponents : <span>추첨 진행 중...</span>}</div>;
}

// 랜덤 번호 생성 함수 (일반 로또와 동일)
function getRandomNumbers(count: number) {
  const numbers: number[] = [];
  while (numbers.length < count) {
    const rand = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(rand)) {
      numbers.push(rand);
    }
  }
  return numbers.sort((a, b) => a - b);
}

export default function VipLottoPage() {
  const [ticketCount, setTicketCount] = useState(1); // VIP 티켓 구매 수량
  const [userNumbers, setUserNumbers] = useState<number[]>([]);
  const [drawNumbers, setDrawNumbers] = useState<number[]>([]);
  const [resultMessage, setResultMessage] = useState("");

  // VIP 로또 추첨일: 현재 시각 + 14일
  const targetDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);

  const handleSelectNumber = (num: number) => {
    if (userNumbers.includes(num)) {
      setUserNumbers(userNumbers.filter((n) => n !== num));
    } else {
      if (userNumbers.length < 6) {
        setUserNumbers([...userNumbers, num].sort((a, b) => a - b));
      } else {
        alert("번호는 최대 6개까지만 선택할 수 있어요! 🚫");
      }
    }
  };

  const handleAutoPick = () => {
    const autoNums = getRandomNumbers(6);
    setUserNumbers(autoNums);
  };

  const handleDraw = () => {
    if (userNumbers.length !== 6) {
      alert("6개의 번호를 모두 선택해 주세요! ⚠️");
      return;
    }
    const newDraw = getRandomNumbers(6);
    setDrawNumbers(newDraw);

    let matchCount = 0;
    for (let num of userNumbers) {
      if (newDraw.includes(num)) {
        matchCount++;
      }
    }
    const bonusMessage = matchCount === 6 ? " (보너스 상금 추가!)" : "";
    setResultMessage(`VIP - 당신의 번호: [${userNumbers.join(", ")}]
🎟 추첨 번호: [${newDraw.join(", ")}]
🎉 일치 개수: ${matchCount}개${bonusMessage}`);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>🌟 VIP Lotto - 번호 선택 🌟</h1>
      <p>VIP 티켓은 1티켓당 10 WLD이며, 1~500장까지 구매할 수 있습니다.</p>
      {/* VIP 로또 누적 잭팟 (추후 백엔드 연동 예정 - 예시값) */}
      <section style={{ marginTop: "20px", padding: "10px", backgroundColor: "#fff3e0", borderRadius: "8px" }}>
        <h2>현재 VIP 잭팟</h2>
        <p style={{ fontSize: "18px", fontWeight: "bold" }}>[VIP 잭팟: X WLD]</p>
      </section>
      <div style={{ marginBottom: 16 }}>
        <CountdownTimer targetDate={targetDate} />
      </div>
      <div style={{ marginBottom: 16 }}>
        <button onClick={handleAutoPick}>🤖 자동 번호 받기</button>
        <button onClick={() => setUserNumbers([])} style={{ marginLeft: 8 }}>
          🔄 선택 초기화
        </button>
      </div>
      <p>
        선택한 번호:{" "}
        {userNumbers.length > 0
          ? userNumbers.join(", ")
          : "아직 선택된 번호가 없습니다"}
      </p>
      <div
        style={{
          margin: "16px 0",
          display: "flex",
          flexWrap: "wrap",
          maxWidth: 400,
        }}
      >
        {Array.from({ length: 45 }, (_, i) => i + 1).map((i) => {
          const selected = userNumbers.includes(i);
          return (
            <button
              key={i}
              onClick={() => handleSelectNumber(i)}
              style={{
                width: 40,
                height: 40,
                margin: 4,
                backgroundColor: selected ? "#ff9800" : "#ccc",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              {i}
            </button>
          );
        })}
      </div>
      <button onClick={handleDraw} style={{ marginTop: 16 }}>
        📢 추첨하기
      </button>
      {drawNumbers.length > 0 && (
        <div style={{ marginTop: 16 }}>
          <h2>결과</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{resultMessage}</p>
        </div>
      )}
    </div>
  );
}
