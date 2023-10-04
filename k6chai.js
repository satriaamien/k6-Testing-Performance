import http from "k6/http";
import {
  describe,
  expect,
} from "https://jslib.k6.io/k6chaijs/4.3.4.3/index.js";

export default function () {
  describe("test-api", () => {
    const res = http.get(`https://test-api.k6.io/public/crocodiles/1/`);
    expect(res.status, "status 200? ").equal(200);
  });
}
