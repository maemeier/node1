const _ = require('./lodash.js')

let products = [
  {
    name: "ipad",
    price: 200,
    iSBN: "1"
  },
  {
    name: "macbook",
    price: 1200,
    iSBN: "2"
  },
  {
    name: "iphone",
    price: 780,
    iSBN: "1"
  },
  {
    name: "watch",
    price: 540,
    iSBN: "1"
  }
]
//
let order_price = _.orderBy(products, "price")
console.log("orderByPrice", order_price)

let extract_unique = _.uniqBy(products,'iSBN')
console.log("extract_unique", extract_unique)

let sum = _.sumBy(products, 'price');
console.log("sum", sum)
