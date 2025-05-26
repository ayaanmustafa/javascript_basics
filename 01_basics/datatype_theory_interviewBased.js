//TYPES: Primitive and Non-Primitive

//Primitive: (call by value) when called, a copy is made not the original
/*
These use stack memory - a copy
7 categories:
1. string
2. Number
3. boolean
4. null - typeof => object
5. undefined
6. symbol - value ko unique banane ke liye
7. Bigint - greater than 2^53

*/


//Non-Primitive (reference type), the original memory can be given
/*

They use heap memory - original values are changed
1. Array
2. Function
3. Objects

*/

// JS is a dynamic language as we don't need to specially define the type of variable

const str = "hello"
const score = 100
const temp = null
let hell;
let array = [9,5,6]
let Name = Symbol("ayaan")
let id = Symbol("ayaan")
const myfunction =  function () {
    console.log("hello world")

}

const my_object = {"name":"avi", "age":45 }

console.log(id == Name)
console.table([typeof str, typeof array, typeof score, typeof temp, typeof hell, typeof array, typeof my_object, typeof myfunction])

//////////////////////////////////////////////////

let user_name = "ayaan"
another_user_name = user_name
another_user_name = "gyaan"
console.log(another_user_name)

let user_detail = {"email":"ayaanmustafa@gmail.com", 
                    "age":18}

another_user_detail = user_detail
another_user_detail.email = "gyaan@gmail.com"

console.log(another_user_detail)
console.log(user_detail)