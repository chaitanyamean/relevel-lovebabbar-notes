/*
Write a method that accepts an array of integers and updates 
every element with multiplication of previous
and next elements.
*/
function multipleArrays(arr) {
    if(arr.length == 1 || arr.length == 0) {
        return arr
    }
    let prev = arr[0]
     arr[0] = arr[0] * arr[1]
    
        for(let i=1; i<arr.length-1; i++) {
            let curr = arr[i];
            arr[i] = prev * arr[i+1]
            prev = curr
            console.log(arr[i], arr[i-1], arr[i+1])
        }
        arr[arr.length-1] = prev * arr[arr.length-1]
        return arr;
}

// console.log(multipleArrays([2, 3, 4, 5, 6]))
// console.log(multipleArrays([1,2,3]))


/*
Move all negative numbers to the end and positive to the beginning of the array without using any
predefined sorting method"
*/

function problemTwo(arr) {
    let left = 0;
    let right = arr.length - 1

    while(left <= right) {

    if(arr[left] < 0 && arr[right] < 0) {
        left += 1
    } else if(arr[left] < 0 && arr[right] > 0) {
        right-=1
        left += 1

    } else if(arr[left] > 0 && arr[right] >0) {
        
        right-=1

    } else if(arr[left] > 0 && arr[right] < 0) {
            let temp = arr[right]
            arr[right] = arr[left]
            arr[left] = temp;
            right-=1
            left += 1
    }
}

    return arr;
}


let A = [1, 2, 3,-12, 11, -13, -5, 6]
console.log(problemTwo(A))