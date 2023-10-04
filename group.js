import { check, group } from "k6";
import http from "k6/http";

export default function () {
  // k6 run --out json=resultsgroup.json .\group.js
  http.get("https://test.k6.io");
  group("test-api", () => {
    for (let i = 1; i < 5; i++) {
      const res = http.get(`https://test-api.k6.io/public/crocodiles/${i}/`, {
        tags: { judul: "test-api" },
      });
      check(res, { "apakah status 200 ?": (r) => r.status === 200 });
    }
  });
}
