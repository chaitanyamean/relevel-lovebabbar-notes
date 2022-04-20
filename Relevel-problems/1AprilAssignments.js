/*
Write code for creating a new sorted array from two sorted arrays in O(n+m) 
time complexity where n,m are
the size of the unsorted arrays
*/


function mergeTwoSortedArrays(arr1,  arr2 , n1 , n2,  arr3) {
    var i = 0, j = 0, k = 0;
 
    // Traverse both array
    while (i < n1 && j < n2) {
       
        if (arr1[i] < arr2[j])
            arr3[k++] = arr1[i++];
        else
            arr3[k++] = arr2[j++];
    }

    while (i < n1) {

        arr3[k++] = arr1[i++];
    }

    while (j < n2) {

        arr3[k++] = arr2[j++];
    }

    console.log(arr3)
}

var arr1 = [ 1, 3, 5, 7 ];
var n1 = arr1.length;

var arr2 = [ 2, 4, 6, 8 ];
var n2 = arr2.length;

var arr3 = Array(n1 + n2).fill(0);

mergeTwoSortedArrays(arr1, arr2, n1, n2, arr3);




/*
Problem Statement-2:
Write code for finding the smallest element in an array."
*/

function findSmallestElement(A) {
    let minNumber = A[0]
    for(let i =1; i<A.length; i++) {
        minNumber = Math.min(minNumber, A[i])
    }
    console.log(minNumber);
}


findSmallestElement([1,2,3,4,5,6,0])