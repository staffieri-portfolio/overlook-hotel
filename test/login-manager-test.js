import { itParam } from "mocha-param";
import { expect } from "chai";
import  login  from "../src/scripts.js";

describe("Manager login validation", function () {
  itParam(
    "this username: ${value.username} should fail to login",
    [
      { username: "77", password: "overlook2020" },
      { username: "", password: "overlook2020" },
      { username: "username", password: "overlook2020" },
      { username: "manager ", password: "overlook2020" },
      { username: "13p9sdvnlni", password: "overlook2020" },
      { username: null, password: "overlook2020" },
    ],
    function (credentials) {
      let didLogInSucceed = login(credentials);
      expect(didLogInSucceed).to.be.false;
    }
  );

  itParam(
    "this password: ${value.password} should fail to login",
    [
      { username: "manager", password: "overlook  2020" },
      { username: "manager", password: "BANANA" },
      { username: "manager", password: "" },
      { username: "manager", password: "7@#SFGDBNHSCDSVascs" },
      { username: "manager", password: null },
    ],
    function (credentials) {
      let didLogInSucceed = login(credentials);
      expect(didLogInSucceed).to.be.false;
    }
  );

  itParam(
    "These credentials ${value.username}, ${value.password} succeed to login",
    [{ username: "manager", password: "overlook2020" }],
    function (credentials) {
      let didLogInSucceed = login(credentials);
      expect(didLogInSucceed).to.be.true;
    }
  );
});