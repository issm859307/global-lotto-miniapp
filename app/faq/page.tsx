// app/faq/page.tsx
"use client";

export default function FaqPage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>FAQ - 자주 묻는 질문</h1>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>일반 로또 FAQ</h2>
        <ul>
          <li>
            <strong>Q:</strong> 티켓은 어떻게 구매하나요?<br />
            <strong>A:</strong> 1 WLD당 1장의 티켓을 구매할 수 있으며, 1~100장까지 구매 가능합니다. 결제 시 5% 수수료는 자동으로 차감되어 개발자에게 귀속됩니다.
          </li>
          <li>
            <strong>Q:</strong> 추첨 주기는 어떻게 되나요?<br />
            <strong>A:</strong> 일반 로또는 매 7일마다 자동 추첨되며, 당첨금 배분은 1등 50%, 2등 20%, 3등 15%, 4등 10%, 5등 5%로 이루어집니다. 당첨자가 없으면 전체 잭팟이 다음 회차로 이월됩니다.
          </li>
          <li>
            <strong>Q:</strong> 당첨금 분배는 어떻게 처리되나요?<br />
            <strong>A:</strong> 당첨금은 티켓 구매 시 결제 금액에서 5% 수수료를 차감한 잔액을 기준으로, 등수별로 당첨자 수에 따라 나누어 지급됩니다.
          </li>
        </ul>
      </section>
      
      <section style={{ marginBottom: "20px" }}>
        <h2>VIP 로또 FAQ</h2>
        <ul>
          <li>
            <strong>Q:</strong> VIP 티켓의 가격과 구매 한도는?<br />
            <strong>A:</strong> VIP 티켓은 10 WLD이며, 1~500장까지 구매할 수 있습니다.
          </li>
          <li>
            <strong>Q:</strong> VIP 로또의 추첨 주기 및 당첨금 배분은 어떻게 되나요?<br />
            <strong>A:</strong> VIP 로또는 14일마다 추첨되며, 전체 VIP 잭팟 금액의 50%가 배분 대상입니다. 배분 비율은 1등 60%, 2등 20%, 3등 10%, 4등 5%, 5등 5%로 적용되며, 1등 당첨자가 없으면 해당 배분금은 지급되지 않습니다.
          </li>
          <li>
            <strong>Q:</strong> 일반 로또와 VIP 로또의 차이점은 무엇인가요?<br />
            <strong>A:</strong> 일반 로또는 소액 투자자용으로 7일 주기로 진행되며, VIP 로또는 고액 베팅 전용으로 14일 주기와 특별한 배분 방식, 보너스 혜택(친구 초대 시 보상 포함) 등이 적용됩니다.
          </li>
        </ul>
      </section>
      
      <section>
        <h2>기타 FAQ</h2>
        <ul>
          <li>
            <strong>Q:</strong> 티켓 구매 시 왜 5% 수수료가 발생하나요?<br />
            <strong>A:</strong> 5% 수수료는 티켓 구매 시 결제 금액에서 자동으로 차감되어 개발자에게 귀속되며, 사용자에게는 정상 티켓 가격이 표시됩니다.
          </li>
          <li>
            <strong>Q:</strong> 친구 초대 보상은 어떻게 되나요?<br />
            <strong>A:</strong> 친구 초대 시, 각 회차 추첨 시 전체 금액의 2%가 친구 초대 보상으로 배분됩니다. (자세한 내용은 친구 초대 페이지에서 확인하세요.)
          </li>
        </ul>
      </section>
    </div>
  );
}
