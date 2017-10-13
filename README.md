# ecpay-node

[![NPM](https://nodei.co/npm/ecpay.png)](https://nodei.co/npm/ecpay/)

[![Build Status](https://travis-ci.org/sc0Vu/ecpay-node.svg?branch=master)](https://travis-ci.org/sc0Vu/ecpay-node)
[![Dependency Status](https://www.versioneye.com/user/projects/59e0284e15f0d723e3121ae0/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/59e0284e15f0d723e3121ae0)

A wrapper for ecpay in nodejs.

Depend on [allpay](https://www.npmjs.com/package/allpay) package library.

# Usage

```
npm install ecpay --save

const Ecpay = require('ecpay')

const PaymentService = new Ecpay({
  merchantID: "2000214",
  hashKey: "5294y06JbISpM5x9",
  hashIV: "v77hoKGq4kWxNNIS",
  mode: "production"
})
```

# Example

Transaction

```
PaymentService.aioCheckOut({
  MerchantTradeNo: "EC20171001000001",
  MerchantTradeDate: "2017/10/01 00:00:00",
  TotalAmount: 199,
  TradeDesc: "HelloWorld",
  Items: [{
    name: "Cake",
    price: 199,
    currency: "NTD",
    quantity: 1
  }],
  ReturnURL: "http://localhost/res",
  ChoosePayment: "ALL"
}, function(err, result) {
  // Do something here...
});
```

# Development

```
clone && npm install
```

# Test

```
npm test
```

# License

MIT
