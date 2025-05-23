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


/////////////operations///////////
console.log(1+"2")
console.log("1"+2+2)
console.log(1+1+1+"3")

//once string comes, everything which follows is also string

console.log(+"") // 0 (as in true)

let counter1 = 100
counter1 = ++counter1 // assigns the value after the + thingy (prefix)
console.log(counter1)

let counter2 = 100
counter2 = counter2++ // assigns value before + thingy (postfix)
console.log(counter2)