// let a=true
// console.log(typeof a)
// let b=Number(a)
// console.log(b)
//"33"-> number
//"33bac"-> number
//if we convert it to number then it will be NaN
//null-> convert it-> 0
//true->convert it->1
// let c="hjkl"
// console.log(typeof c)
// let d=Boolean(c)
// console.log(typeof d)
// console.log(d)
//1->true
//"hj"->true
//""->false
// let a=33
// let string=String(a)
// console.log(typeof string)
// console.log(string+3)
// let a=1
// let b="2"
// console.log(a+b)
// console.log(a+b+2)
// console.log(a+2+b)
// console.log(typeof(a+"b"))
// console.log(3+4*5%3)
// console.log((3+4)*5%3)
// let a=10
// //++a
// a++
// console.log(a)
// // primitive-> String,Number,Boolean,null,undefined,Symbol
// //non-primitiv-> referenve type->array,objects,functions
// const f=Symbol('123')
// const g=Symbol('123')
// console.log(f===g)
// this makes new object thats why its not same
const arr=["ar","jk"];
console.log(arr)
let ob={
     name:"ar",
     age:25
}
console.log(ob)
const nl=null
console.log(typeof nl)
//type of null is object
console.log(typeof arr)// object
// primitive-> stack, this stores copy of it, it doesnt change its original value
//ex->
let user1="arnav"
let user2=user1
user2="singh"
console.log(user1);

console.log(user2)
//so user1 still has arnav
//non-primitive datatypes are stored in heap, in which we access these by reference meaning, original value will get changed
//ex->
let userone={
     email:"arnav@google"
}
let usertwo=userone
usertwo.email="singh@google"
console.log(userone);
console.log(usertwo);


