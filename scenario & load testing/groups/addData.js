import http from "k6/http";

export default function () {
  http.post(
    "https://dummyjson.com/products/add",
    JSON.stringify({
      title: "BMW Pencil",
    }),
    { headers: { "Content-Type": "application/json" } }
  );
}
