var tape = require('tape')
var Ecpay = require("../index")
var ecpay

tape("Test ecpay spec", (t) => {
  t.test("should return correct production host", (st) => {
    ecpay = new Ecpay({
      merchantID: "2000214",
      hashKey: "5294y06JbISpM5x9",
      hashIV: "v77hoKGq4kWxNNIS",
      mode: "production"
    })
    st.equals(ecpay.getConfig().host, "payment.ecpay.com.tw")
    st.end()
  })

  t.test("should return correct test host", (st) => {
    ecpay = new Ecpay({
      merchantID: "2000214",
      hashKey: "5294y06JbISpM5x9",
      hashIV: "v77hoKGq4kWxNNIS",
      mode: "test"
    })
    st.equals(ecpay.getConfig().host, "payment-stage.ecpay.com.tw")
    st.end()
  })
})