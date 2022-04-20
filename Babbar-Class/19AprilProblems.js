/*
  Print patterns 
*
**
***
****
*****

*/

function patternOne(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    for (let col = 1; col <= row; col++) {
      str += "*";
    }

    str += "\n";
  }
  console.log(str);
}

// patternOne(5);

/*

*****
****
***
**
*

*/
function patternTwo(n) {
  let str = "";
  for (let row = 0; row <= n; row++) {
    let res = n - row;
    for (let col = 1; col <= res; col++) {
      str += "*";
    }

    str += "\n";
  }
  console.log(str);
}

// patternTwo(5);

/*
Pattern Three (spaces and stars)
   *
  **
 ***
****


*/

function patternThree(n) {
  let str = "";
  for (let row = 1; row <= n; row++) {
    let res = n - row;
    for (let col = 1; col <= res; col++) {
      str += " ";
    }
    for (let col = 1; col <= row; col++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

// patternThree(5);


/*

Pattern Four

*****
 ****
  ***
   **
    *
    
*/

function patternFour(n) {
    let str = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row-1; col++) {
          str += " ";
        }
      let res = n - row + 1;
      for (let col = 1; col <= n - row + 1; col++) {
        str += "*";
      }
      str += "\n";
    }
    console.log(str);
  }
  
//   patternFour(5);





  function patternFive(n) {
    let str = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= n - row; col++) {
          str += " ";
        }
      for (let col = 1; col <= row; col++) {
        str += "* ";
      }
      str += "\n";
    }
    console.log(str);
  }
  
//   patternFive(10);


  function patternSix(n) {
    let str = "";
    for (let row = 1; row <= n; row++) {
        for (let col = 1; col <= row - 1; col++) {
          str += " ";
        }
      for (let col = 1; col <= n - row + 1; col++) {
        str += "* ";
      }
      str += "\n";
    }
    console.log(str);
  }
  
//   patternSix(10);


  function patternSeven(n) {
    let str = "";
    for (let row = 1; row <= n; row++) {
            // for first and last
        if(row == 1 || row == n) {
            for(let col = 1; col <= n - row + 1; col++) {
                str += "*"
            }
        } else {
            str += "*"

            for(let col = 1; col <= n - row - 1; col++) {
                str += " "
            }

            str += "*"
        }
      str += "\n";
    }
    console.log(str);
  }
  
  patternSeven(16);

//   -------------------------------------------------------------------------

/*
Number patterns
*/