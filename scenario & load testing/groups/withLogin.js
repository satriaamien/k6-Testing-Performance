import { group } from "k6";
import http from "k6/http";

export default function (data) {
  group("with login", () => {
    http.get("https://dummyjson.com/auth/products", {
      headers: { Authorization: "bearer " + data },
    });
  });
}
