export const poolData = {
  UserPoolId: "sa-east-1_U2bzOuTfY",
  ClientId: "171ncgj91t8mbqtuk4n143qhdd",
};

export const POST_URL =
  "https://qsz374wb45.execute-api.sa-east-1.amazonaws.com/dev/compare-yourself";

export const DELETE_URL =
  "https://qsz374wb45.execute-api.sa-east-1.amazonaws.com/dev/compare-yourself";

export const GET_URL = (type: string) => {
  return `https://qsz374wb45.execute-api.sa-east-1.amazonaws.com/dev/compare-yourself/${type}`;
};

export async function doFetch(
  url: string,
  method: "GET" | "POST" | "DELETE",
  authorization: string,
  body?: any
) {
  return await fetch(url, {
    method: method,
    body: method === "POST" ? JSON.stringify(body) : undefined,
    headers: {
      "Content-Type": "application/json",
      Authorization: authorization,
    },
  });
}
