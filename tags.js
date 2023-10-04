import http from "k6/http";
// k6 run --out json=output.json tags.js

export const options = {
  stages: [
    { duration: "5s", target: 60 },
    { duration: "10s", target: 60 },
    { duration: "5s", target: 0 },
  ],
  thresholds: {
    http_req_duration: ["avg<300", "p(90)<450"],
    http_req_failed: ["rate<0.5"],
  },
};

export default function () {
  http.get("https://test.k6.io", { tags: { judul: "test.k6.io" } });
  http.get("https://test-api.k6.io/public/crocodiles/1/", {
    tags: { judul: "test-api" },
  });
}
