import Mock from "mockjs";
import map from "@/public/echartsMap";
let url =
  process.env.VUE_APP_CURRENTMODE === "dev-remote"
    ? "/api"
    : "http://localhost:8080/";
Mock.mock(url + "api/map", "get", () => {
  return map;
});
