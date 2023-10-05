import http from "k6/http";

export default function () {
  const res = http.post(
    "https://dummyjson.com/auth/login",
    JSON.stringify({
      username: "kminchelle",
      password: "0lelplR",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res.json().token;
}
