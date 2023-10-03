import http from "k6/http";
import { check } from "k6";

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
export const options = {
  thresholds: {
    http_req_duration: ["avg<300", "p(90)<250"],
    http_req_failed: ["rate<0.5"],
    iterations: ["count>400"],
  },
};

export default function () {
  const res = http.get("https://youtube.com");
  check(res, { "apakah statusnya 200": (r) => r.status === 200 });
}
