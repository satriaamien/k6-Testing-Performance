import { group, sleep } from "k6";
import http from "k6/http";

// 1. init code
export const options = {
  thresholds: {
    http_req_duration: ["avg<300", "p(90)<250"],
    http_req_failed: ["rate<0.5"],
    iterations: ["count>400"],
  },
  scenarios: {
    smoke_test: {
      executor: "constant-vus",
      vus: 10,
      duration: "30s",
    },
    // average_load_test: {
    //   executor: "ramping-vus",
    //   stages: [
    //     { duration: "5m", target: 100 },
    //     { duration: "30m", target: 100 },
    //     { duration: "5m", target: 0 },
    //   ],
    // },
  },
};

export function setup() {
  // 2. setup code

  const resSetup = http.post(
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
  return resSetup.json().token;
}

export default function (data) {
  // group("with login", () => {
  //   http.get("https://dummyjson.com/auth/products", {
  //     headers: { Authorization: "bearer " + data },
  //   });
  // });
  group("without login", () => {
    http.get("https://dummyjson.com/products");
  });
  // 3. VU code
}
