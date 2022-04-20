/*
1. Write a program to multiply 
the value in the given array and return a result 
(use array functions) Array = [2,3,4,5,6,7,8]
*/
let Arr = [2,3,4,5,6,7,8]

function multiplyArr(A) {

   let B = A.reduce((acc, curr) => {
       console.log(curr)
       return acc * curr
   }, 1)

   return B;

}

// multiplyArr(Arr)

/*
2. Write a JavaScript program to sort by id an array of JavaScript objects.
*/

let obj =[ {
    Id: 45,
    Name: "ram"
    },{
    Id: 4,
    Name: "raju"
    },{
    Id: 90,
    Name: "kumar"
    }]

function sortById(A) {
    A.sort((a,b) => a.Id - b.Id)
    console.log(A);
}


// sortById(obj)

/*
3. Ram is an student and his teacher has assigned problem to sort the number 
in ascending order and actual integer order is 0123456789 but here is the twist 
that teacher has changed the integer order (example - 2356481790 ) and ask ram to 
sort based on the custom order
Sample Input:
2356481790
83971563890
Sample Output:
3 3 5 6 8 8 1 7 9 9 0
*/





/*
 4. Ram got an assignment from his math teacher that he needs to get the number of 1’s 
 from 0 to a given binary number. But it is very hard to find so write a program which 
 helps Ram to find it very quickly.
Input Format
The input should be only a binary number
Output Format
It should return number as output
Sample Input 1 :
100
*/


function getOnes(A) {
    let str = String(A)
    let count =0
    for(let i=0; i<str.length; i++) {
        str[i]
        if(str[i] == '1') {
            count++
        }
    }
    return count;
}


let ans = getOnes(10101000100010010101)
// console.log(ans);

/*
5. Write a function that converts an array of values from miles to kilometres using the map method. In the end, add 
the kilometres up in a new variable called ""totalDistanceInKilometers"" and return this variable"
*/

function converMilesToKiloMiles(A) {
    let mileToKm = 1.609344

    return A.map((val) => val * mileToKm)
}


console.log(converMilesToKiloMiles([2,3,4,5,6]))




const customSort = (order, inp) => {
    const numberObj = {};
    const resArr = [];
    const arr = inp.split('').map(item => parseInt(item))
    order.split('').map((item, index) => {
        numberObj[item] = {
            value: [],
            order: index
        };
    })
    arr.map(item => {
        numberObj[item].value.push(item);
    });
    const sortedObj = Object.values(numberObj).sort((a, b) => (a.order > b.order) ? 1 : -1);
    Object.values(sortedObj).map(item => {
        resArr.push(...item.value)
    });
    return resArr.join(' ');
}

const order = '2356481790';

const arr = "83971563890";
console.log(customSort(order, arr));