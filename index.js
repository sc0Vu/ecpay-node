/**
 * HOST
 * Ecpay host.
 *
 * @type {Object}
 */
var HOST = {
  production: "payment.ecpay.com.tw",
  test: "payment-stage.ecpay.com.tw"
}

var Allpay = require("allpay");

module.exports = function (options) {
  try {
    var allpay = new Allpay(options);
    var host = (options.mode && options.mode === "production") ? HOST.production : HOST.test;

    allpay.setHost({
      host: host,
      port: 443,
      useSSL: true
    });

    return allpay;
  } catch (e) {
    return {};
  }
};