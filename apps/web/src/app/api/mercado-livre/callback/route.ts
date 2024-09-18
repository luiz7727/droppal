import transferCodeToAccessToken from "@/utils/mercado-livre/transfer-code-to-access-token";
import addStore from "@/utils/store/add-store";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code') ?? '';

  const { access_token, refresh_token, user_id } = await transferCodeToAccessToken(code);

  cookies().set('ml_access_token',access_token);
  cookies().set('ml_refresh_token',refresh_token);
  cookies().set('ml_user_id',user_id.toString());

  await addStore("Mercado Livre");
  const redirectUrl = request.nextUrl.clone();
  redirectUrl.pathname = '/dashboard/stores';

  return NextResponse.redirect(redirectUrl);
} 