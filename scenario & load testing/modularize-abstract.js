//! 1. init code
// import http from "k6/http";
import smoke_test from "./config/smoke_test.js";
import thresholds from "./config/thresholds.js";
import getAuthToken from "./utils/getAuthToken.js";
import withLogin from "./groups/withLogin.js";
import withoutLogin from "./groups/withoutLogin.js";
import addData from "./groups/addData.js";

const listScenario = {
  smoke_test,
};

//! run in command with "k6 run -e scenario=smoke_test .\modularize-abstract.js"

export const options = {
  thresholds,
  scenarios: {
    smoke_test_scenario: listScenario[__ENV.scenario],
  },
};

//! 2. setup code
export function setup() {
  return getAuthToken();
}

//! 3. VU code
export default function (data) {
  // withLogin(data);
  // withoutLogin();
  addData();
}
