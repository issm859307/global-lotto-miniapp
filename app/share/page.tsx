"use client";

import { useRouter } from "next/navigation";
import { Share2, Copy } from "lucide-react"; // 아이콘 추가

export default function SNSShare() {
  const router = useRouter();
  const shareUrl = "https://yourapp.com"; // ✅ 실제 미니앱 URL로 변경 필요

  const shareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Global Lotto 미니앱",
          text: "투명하고 공정한 로또 시스템, Global Lotto 미니앱에 참여해보세요!",
          url: shareUrl,
        });
        alert("✅ 공유가 완료되었습니다!");
      } catch (error) {
        alert("⚠️ 공유 중 오류가 발생했습니다.");
        console.error("공유 실패:", error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        alert("📋 공유 링크가 복사되었습니다! SNS에 붙여넣어 공유하세요!");
      } catch (error) {
        alert("❌ 링크 복사 실패");
        console.error("링크 복사 실패:", error);
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">📢 Global Lotto 공유</h1>
      
      <button
        onClick={shareApp}
        className="flex items-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg text-lg hover:bg-blue-600 transition"
      >
        <Share2 className="mr-2" size={20} /> 공유하기
      </button>

      <button
        onClick={() => router.push("/")}
        className="mt-4 flex items-center px-4 py-2 bg-gray-300 rounded-lg text-gray-800 hover:bg-gray-400 transition"
      >
        <Copy className="mr-2" size={18} /> 홈으로 가기
      </button>
    </div>
  );
}
