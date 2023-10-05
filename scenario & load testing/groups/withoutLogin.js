import { group } from "k6";
import http from "k6/http";

export default function (data) {
  group("without login", () => {
    http.get("https://dummyjson.com/products");
  });
}
