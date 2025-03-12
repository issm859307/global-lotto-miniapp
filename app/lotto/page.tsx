// app/lotto/page.tsx
"use client";

import { useState, useEffect } from "react";

// CountdownTimer 컴포넌트: 추첨일까지 남은 시간을 표시
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

// 1부터 45까지 중복 없이 랜덤 번호 생성 함수
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

export default function LottoPage() {
  const [userNumbers, setUserNumbers] = useState<number[]>([]);
  const [drawNumbers, setDrawNumbers] = useState<number[]>([]);
  const [resultMessage, setResultMessage] = useState("");

  // 일반 로또 추첨일: 현재 시각 + 7일 (7일 주기)
  const targetDate = new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);

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
    setResultMessage(`당신의 번호: [${userNumbers.join(", ")}]
🎟 추첨 번호: [${newDraw.join(", ")}]
🎉 일치 개수: ${matchCount}개`);
  };

  const numberButtons = [];
  for (let i = 1; i <= 45; i++) {
    const selected = userNumbers.includes(i);
    numberButtons.push(
      <button
        key={i}
        onClick={() => handleSelectNumber(i)}
        style={{
          width: 40,
          height: 40,
          margin: 4,
          backgroundColor: selected ? "#4caf50" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>🎟 Global Lotto - 번호 선택 🎟</h1>
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
        {numberButtons}
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
