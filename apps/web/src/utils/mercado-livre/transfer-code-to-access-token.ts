interface Response {
  "access_token": string,
  "user_id": number,
  "refresh_token": string
}
export default async function transferCodeToAccessToken(code: string) {
  const request = {
    grant_type: 'authorization_code',
    client_id: process.env.NEXT_PUBLIC_MERCAD0_LIVRE_APP_ID,
    client_secret: process.env.NEXT_PUBLIC_MERCADO_LIVRE_SECRET_KEY,
    code: code,
    redirect_uri: process.env.NEXT_PUBLIC_MERCADO_LIVRE_REDIRECT_URI,
    code_verifier: '$CODE_VERIFIER'
  }

  const response = await fetch('https://api.mercadolibre.com/oauth/token',{
    method: 'POST',
    body: JSON.stringify(request)
  });

  const { access_token, refresh_token, user_id } = await response.json() as Response
  return {
    access_token,
    user_id,
    refresh_token
  };
}