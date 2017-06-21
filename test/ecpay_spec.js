var expect = require("chai").expect;
var Ecpay = require("../index");
var ecpay;

describe("Ecpay", function() {
  it("should return correct production host", function() {
    ecpay = new Ecpay({
      merchantID: "2000214",
      hashKey: "5294y06JbISpM5x9",
      hashIV: "v77hoKGq4kWxNNIS",
      mode: "production"
    });
    expect(ecpay.getConfig().host).to.equal("payment.ecpay.com.tw");
  });

  it("should return correct test host", function() {
    ecpay = new Ecpay({
      merchantID: "2000214",
      hashKey: "5294y06JbISpM5x9",
      hashIV: "v77hoKGq4kWxNNIS",
      mode: "test"
    });
    expect(ecpay.getConfig().host).to.equal("payment-stage.ecpay.com.tw");
  });
});