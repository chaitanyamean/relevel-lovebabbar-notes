/*
Requirements: "1. Write a function astroguru that:
A. Takes four arguments: number of children, spouses name, location and job
B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’.”
*/

function astroguru(children, spouseName, location, job) {

    return `You will be a ${job} in ${location} and married to ${spouseName} with ${children} kids`
}


console.log(astroguru(2, 'Rinu Bansal', 'Mumbai', 'Software Engineer'))



/*
2. Write a function that compares two numbers and returns the larger of the two.
Bonus: Output appropriate message if numbers cant be compared or are equal"
*/


function compareTwoNumbers(one, two) {
    if(one == two) {
        return 'Both numbers are Equal'
    }

    if(one > two) {
        return `Number ${one} is greater then ${two}`
    }

    return `Number ${two} is greater then ${one}`

}

console.log(compareTwoNumbers(10, 100))