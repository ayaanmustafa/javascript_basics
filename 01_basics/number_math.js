let con =4000000
console.log(con.toPrecision(5))
console.log(con.toFixed(5))
console.log(con.toLocaleString("en-IN"))
console.log(con.toLocaleString())

let e = Number.EPSILON
console.log(e.toPrecision(4))

/////////   MATHS   ////////

console.log(Math.random())
console.log(Math.round(4.5))

const min = 1
const max = 6

console.log(Math.floor((Math.random())*(max-min+1)+min))

//max-min range of value
//max-min+1 avoids zero case