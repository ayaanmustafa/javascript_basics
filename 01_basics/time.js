let date_object = new Date()
console.log(date_object.toDateString())
console.log(date_object.toJSON())
console.log(date_object.toLocaleDateString())
console.log(date_object.toLocaleString())
console.log(date_object.toTimeString())
console.log(date_object.getMonth())

console.log(date_object.toLocaleString('default',{weekday:"short",era:"long"}))