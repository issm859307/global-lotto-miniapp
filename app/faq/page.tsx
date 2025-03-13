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
            <strong>A:</strong> 1 WLD당 1장의 티켓을 구매할 수 있으며, 1~100장까지 구매 가능합니다.
          </li>
          <li>
            <strong>Q:</strong> 추첨 주기는 어떻게 되나요?<br />
            <strong>A:</strong> 일반 로또는 매 7일마다 자동 추첨되며, 당첨금은 등수별로 배분됩니다.
          </li>
          <li>
            <strong>Q:</strong> 당첨금 분배는 어떻게 처리되나요?<br />
            <strong>A:</strong> 티켓 구매 시 결제 금액에서 5% 수수료 차감 후, 남은 금액을 배분합니다.
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
            <strong>A:</strong> VIP 로또는 14일마다 추첨되며, 전체 잭팟 금액의 50%만 배분되고 나머지는 이월됩니다.
          </li>
        </ul>
      </section>
      
      <section>
        <h2>기타 FAQ</h2>
        <ul>
          <li>
            <strong>Q:</strong> 티켓 구매 시 왜 5% 수수료가 발생하나요?<br />
            <strong>A:</strong> 결제 금액에서 자동으로 5%가 차감되어 개발자에게 귀속됩니다.
          </li>
          <li>
            <strong>Q:</strong> 친구 초대 보상은 어떻게 되나요?<br />
            <strong>A:</strong> 친구 초대 시, 각 회차 추첨 시 전체 금액의 2%가 보상으로 배분됩니다.
          </li>
        </ul>
      </section>
    </div>
  );
}
