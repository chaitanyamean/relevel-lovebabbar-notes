/*
Requirements: "1. Iterate from 1 to 100(using for loop and if else statement) 
(Submittable assignment)/
5 Print Relevel if divisible by 3/
5 Print Buzz if divisible by 5/
5 Print 6indBuzz if divisible by 15/
5 Print the number if all the above condition fails0
2. Program to check if a number is odd or even (Submittable assignment)"
*/

function problemOne() {
   for(let i =1; i<= 100; i++) {

    if(i % 3 === 0) {
        if(i % 15 == 0) {
            console.log('6indBuzz')
        } else {
        console.log('Relevel')
            
        }
    }

    else if(i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
}


problemOne()


/*
2. Program to check if a number is odd or even (Submittable assignment)"
*/

function checkNumisOddOrEven(num) {

    if(num % 2 == 0) {
        return `${num} is Even`
    }
    return `${num} is Odd`

}

console.log(checkNumisOddOrEven(10))
console.log(checkNumisOddOrEven(101))
