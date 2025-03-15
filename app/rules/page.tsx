"use client";

export default function RulesPage() {
  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow animate-fadeIn">
      <h1 className="text-2xl font-bold mb-4">규칙 안내</h1>
      <ul className="list-disc list-inside text-sm space-y-1">
        <li>일반 로또: 티켓 1 WLD, 7일 주기, 잭팟의 25% 이월 + 75% 배분 (1등 50%, 2등 20%, 3등 15%, 4등 10%, 5등 5%)</li>
        <li>VIP 로또: 티켓 10 WLD, 14일 주기, 잭팟의 50% 이월 + 50% 배분 (1등 미당첨 시 1등 몫 전액 재분배)</li>
        <li>모든 티켓 구매 시 5% 수수료는 운영비용으로 차감됩니다.</li>
        <li>당첨금은 추첨 후 1개월간 보관되며, 이 기간 내에 청구하지 않으면 자동으로 다음 회차 상금 풀에 추가되거나, 플랫폼 운영 및 보상 프로그램에 활용됩니다. 이렇게 하면 당첨금이 소멸되지 않고, 더 많은 사용자에게 혜택이 돌아갑니다.</li>
      </ul>
    </div>
  );
}