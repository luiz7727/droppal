import axios from "axios";

interface Response {
  "access_token": string,
  "token_type": string,
  "expires_in": string,
  "scope": string,
  "user_id": number,
  "refresh_token": string
}
export default async function transferCodeToAccessToken(code: string) {
  const { data: { access_token, user_id, refresh_token } } = await axios.post<Response>('https://api.mercadolibre.com/oauth/token',{
    grant_type: 'authorization_code',
    client_id: process.env.NEXT_PUBLIC_MERCAD0_LIVRE_APP_ID,
    client_secret: process.env.NEXT_PUBLIC_MERCADO_LIVRE_SECRET_KEY,
    code: code,
    redirect_uri: process.env.NEXT_PUBLIC_MERCADO_LIVRE_REDIRECT_URI,
    code_verifier: '$CODE_VERIFIER'
  });

  return {
    access_token,
    user_id,
    refresh_token
  };
}