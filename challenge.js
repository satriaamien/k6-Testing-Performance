import http from "k6/http";
import {
  describe,
  expect,
} from "https://jslib.k6.io/k6chaijs/4.3.4.3/index.js";
import { Rate } from "k6/metrics";

const completedRateAge = new Rate("test_api_completed_rate_age");
const completedRatestatus = new Rate("test_api_completed_rate_status");
const completedRatestatus_yt = new Rate("test_api_completed_rate_status_yt");

export default function () {
  describe("check test api", () => {
    for (let i = 1; i < 5; i++) {
      const res = http.get(`https://test-api.k6.io/public/crocodiles/${i}/`, {
        tags: { judul: "test-api-crocodile" },
      });
      completedRateAge.add(res.json().age >= 20);
      completedRatestatus.add(res.status === 200);
      expect(res.status, "status 200? ").equal(200);
    }
  });
  describe("check test api", () => {
    const res = http.get(`https://youtube.com`, {
      tags: { judul: "test-api-crocodile" },
    });
    completedRatestatus_yt.add(res.status === 200);
    expect(res.status, "status 200? ").equal(200);
  });
}
