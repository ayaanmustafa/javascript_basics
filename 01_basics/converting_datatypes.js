let id = 345
let id_string = "345"
let weird_id = "345j"
let nothing = null 
let dont_know = undefined

console.table([typeof id, typeof id_string, typeof weird_id, typeof nothing, typeof dont_know])

console.table([typeof Number(id), typeof Number(id_string), typeof Number(weird_id), 
                typeof Number(nothing), typeof Number(dont_know)])
                
console.table([Number(id), Number(id_string), Number(weird_id), 
                Number(nothing), Number(dont_know)])

/*
null is 0 (as in false)
undefined gives out NaN (not a number)
"s45" this is NaN
*/


/*
empty string "" => 0 => false
smth string "uherueh" => 1 => true
*/