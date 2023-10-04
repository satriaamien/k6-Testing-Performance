import http from "k6/http";
import { check, sleep } from "k6";

//! # TUGAS
// - cari satu website atau api untuk ditest
// - test performance api/web tersebut menggunakan semua topik yang sudah dipelajari
// - terserah mau buat di satu file atau lebih
// - kumpulkan ke github
// - max pengumpulan besok siang

//! k6 basic http get performance
// export default function () {
//   const res = http.get("https://youtube.com");
//   console.log(res.status);
// }

//! k6 check
// menampilkan checklist jika sesuai kondisi
// export default function () {
//   const res = http.get("http://youtube.com");
//   check(res, { "apakah statusnya 200": (r) => r.status === 200 });
// }

//! k6 set option
// export const options = {
//   // Virtual User
//   vus: 2,
//   // max durasi
//   duration: "10s",
//   // max iterasi
//   iterations: 10,
// };
// export default function () {
//   http.get("http://youtube.com");
// }

//! k6 option ramping
// export const options = {
//   stages: [
//     { duration: "2s", target: 10 },
//     { duration: "2s", target: 5 },
//     { duration: "3s", target: 10 },
//   ],
// };

// export default function () {
//   http.get("https://youtube.com");
// }

//! k6 threesholds
// export const options = {
//   thresholds: {
//     http_req_duration: ["avg<300", "p(90)<250"],
//     http_req_failed: ["rate<0.5"],
//     iterations: ["count>400"],
//   },
// };

// export default function () {
//   const res = http.get("https://youtube.com");
// }

//! k6 threesholds & check
// export const options = {
//   stages: [
//     { duration: "5s", target: 60 },
//     { duration: "10s", target: 60 },
//     { duration: "5s", target: 0 },
//   ],
//   thresholds: {
//     http_req_duration: ["avg<300", "p(90)<450"],
//     http_req_failed: ["rate<0.5"],
//   },
// };

// export default function () {
//   const res = http.get("https://test.k6.io");
//   check(res, { "apakah statusnya 200": (r) => r.status === 200 });
// }

//! k6 with results2.json
// k6 run --out json=results2s.json  .\basicPerformance.js

// export const options = {
//   vus: 10,
//   duration: "2s",
// };

// export default function () {
//   http.get("https://test.k6.io", { tags: { judul: "test.k6.io" } });
//   http.get("https://test-api.k6.io/public/crocodiles/1/", {
//     tags: { judul: "test-api" },
//   });
//    check(res, { "apakah statusnya 200": (r) => r.status === 200 });
// }
//! k6 with output.json
// run with this "k6 run --out json=output.json basicPerformance.js"
// export const options = {
//   iterations: 2,
// };

// export default function () {
//   http.get("https://test.k6.io", { tags: { judul: "test.k6.io" } });
//   http.get("https://test-api.k6.io/public/crocodiles/1/", {
//     tags: { judul: "test-api" },
//   });
// }

//run system visual in cloud
//**  k6 run --out cloud .\basicPerformance.js
// run in cloud
//**  k6 run cloud .\basicPerformance.js
