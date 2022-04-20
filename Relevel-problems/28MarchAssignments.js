// Example for Destructuring of nested Objects
// Program to demonstrate Object destructuring in nested objects

function objDes() {}

let obj = {
  id: '4e908',
  workExperience: [
    { company: "Thrymr", years: 3 },
    { company: "Kofax", years: 1 },
  ],
  details: {
      name: {
          fName: 'krishna',
          lName: 'Chaitanya'
      }
  }
};

// console.log(obj)

const {name, details: {name : { fName, lName }}, workExperience: [{company}]} = obj;

// console.log(fName); // krishna
// console.log(lName); // Chaitanya

let innerData = JSON.parse(JSON.stringify([...obj.workExperience], ['company', 'years']))
// console.log(innerData); //  company: 'Thrymr', years: 3 }, { company: 'Kofax', years: 1 }

/*
Program to clone the object and change the property and then iterate the array of objects using inbuilt
functions and to console the object property and frame a meaning full sentence."
*/

let obj2 = {
    id: '9e0@e',
    details: {
            fName: 'krishna',
            lName: 'Chaitanya',
            email: 'krisha@gmail.com',
            number: 964266687,
            country: 'India'
        }
  };

let obj1 = {...obj2}

obj1.id = 'abc';
// console.log(obj1, obj2)


for(let [key, value] of Object.entries(obj2.details)) {
    // console.log(`${key} - ${value}`)
}


// varhoi = 'relevel';
// console.log(['varhoi']+['dsa']);
// var varhoi;
// callFun();
// function callFun() {
//     let javas = 'Javascript'
//     console.log(javas)
// }







var inputArr = [9,3,4,8,62,3,2,109,62];
const SortAndDuplicate = (arr) => {
    const newArr = [];
	arr.sort((a,b) => a-b);
    console.log(arr)
	// 1 2 2 8 5 2 6
	let i = 0
		while(i<arr.length) {
			if(arr[i] != arr[i+1]) {
				newArr.push(arr[i])
			}
				i++
	// newArr 1 2 5 6 
		}
		
    return newArr;
}

let data = SortAndDuplicate(inputArr);
console.log(data.join(' '));




var inputArr1 = [1, 2, 3, 5, 12, 15, 19];

const ConvertSingle = (arr) => {
    for(let i =0; i< arr.length; i++) {
        if(arr[i] > 9) {
            arr[i] = add(arr[i])
        }
    }
    return arr;
}

const add = (num) => {
    // convert to string split it iterate it and add and return as number
    let strNum = String(num).split('');
    let sumNum = 0
    for(let i=0; i<strNum.length; i++) {
        sumNum += Number(strNum[i]) 
    }
    if(sumNum > 9) {
        let strNum = String(sumNum).split('');
        let s = 0
        for(let i=0; i<strNum.length; i++) {
            s += Number(strNum[i]) 
        }
        sumNum = s;
    } 
        return sumNum

}

// ConvertSingle(inputArr1)

/*
3. Ram is an student and his teacher has assigned problem to sort the number 
in ascending order and actual integer order is 0123456789 but here is the twist 
that teacher has changed the integer order (example - 2356481790 ) and ask ram 
to sort based on the custom order
Sample Input:
2356481790
83971563890
Sample Output:
3 3 5 6 8 8 1 7 9 9 0
*/

function problemTree(format, input) {

}

let format = 2356481790;
let input = 83971563890
problemTree(format, input)

