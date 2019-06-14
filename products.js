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

let addTax = _.map(extract_unique, (e)=>{
  return {name: e.name,
          price: e.price + (e.price *.10)}
})

console.log("addTax",addTax)

let sum = _.sumBy(addTax, 'price');
console.log("sum",sum)
