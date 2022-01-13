export const KEYCLOAK_CONFIG = {
  realm: process.env.NEXT_PUBLIC_KEYCLOAK_REALM,
  clientId: process.env.NEXT_PUBLIC_KEYCLOAK_CLIENT_ID,
  url: process.env.NEXT_PUBLIC_KEYCLOAK_URL,
}

export function isTokenExpired(token: string) {
  const payload = getPayload(token);

  const clockTimestamp = Math.floor(Date.now() / 1000);

  return clockTimestamp > payload.exp;
}

export function getPayload(token: string) {
  return JSON.parse(
    Buffer.from(token.split(".")[1], "base64").toString("utf8")
  );
}

//header.payload.signature {}
