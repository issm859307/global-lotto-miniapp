// app/api/verify-lotto/route.ts
import { NextRequest, NextResponse } from "next/server";
import { verifyCloudProof, ISuccessResult } from "@worldcoin/minikit-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const payload: ISuccessResult = body.payload;

    // World ID 증명 검증
    const verifyResponse = await verifyCloudProof(
      body.action,
      body.signal,
      payload.proof,
      payload.merkle_root,
      payload.nullifier_hash,
    );

    if (verifyResponse.success) {
      // 검증 성공 시 DB 업데이트 등
      return NextResponse.json({ success: true, message: "검증 완료" });
    } else {
      return NextResponse.json({ success: false, message: "검증 실패" });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "서버 오류 발생" });
  }
}
