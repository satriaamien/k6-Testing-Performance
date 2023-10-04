import http from "k6/http";
import {
  describe,
  expect,
} from "https://jslib.k6.io/k6chaijs/4.3.4.3/index.js";
import { Rate } from "k6/metrics";

const completedRate = new Rate("test_api_completed_rate");

export default function () {
  describe("check test api", () => {
    for (let i = 1; i < 5; i++) {
      const res = http.get(`https://test-api.k6.io/public/crocodiles/${i}/`, {
        tags: { judul: "test-api-crocodile" },
      });
      completedRate.add(res.json().age >= 20);
    }
  });
}
