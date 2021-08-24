//카카오톡 로그인(보안)
const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";
const CLIENT_ID = "9ab9ab23d10494477465acec09169099";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;