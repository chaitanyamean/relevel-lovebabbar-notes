// Object functions

let obj = {
    name: 'krishna'
}

Object.freeze(obj)

obj.name = 'krish'

console.log(obj)


Object.seal()
// console.log(Object.is([],[]))


// Reduce
let nums = [1,2,3,4]
let addNumbers = nums.reduce((acc, currVal) => {
        return acc + currVal
}, 10)
console.log(addNumbers);
