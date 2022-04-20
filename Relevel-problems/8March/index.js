console.log("console");

const input = document.querySelector("input");
const pTag = document.querySelector("p");


let arr = [
  { name: "alex", designation: "Developer" },
  { name: "John", designation: "Artist" },
  { name: "Strek", designation: "Singer" },
  { name: "Smith", designation: "Actor" },
];


input.addEventListener('change', updateValue);

function updateValue(e) {
  let res = arr.find((item) => item.name.toLowerCase() === e.target.value);
  console.log(res);
  if(res) {
      pTag.innerHTML = res.designation;
  } 
}
