// var table = Number(prompt("Enter the number to print its multiplication table:"));
// var start= Number(prompt("Enter starting point:"));
// var end= Number(prompt("Enter ending point:"));

// for (var i = start; i <= end; i++) {
//     var result = table * i;
//    document.write(
//   "<h4 style='text-align:center;'>" +
//   table + " x " + i + " = " + result +
//   "</h4><br>"
// );



//    console.log(table + " x " + i + " = " + result);
// }






//   disible btane wala function

//  function myfunction() {
    

// let num = +prompt("enter a num") ;
//  let num2 = +prompt("enter a num") ;

//  let result;

//  if (num % num2 === 0) {
//     console.log(num, "is divisible by " , num2)
//  }

//  else{

    
//    console.log(num,"is not divisible by", num2)
//  }
// }

// myfunction()



//                L--o--c--a--l           S--t--o--r--a--g--e 
  

function studentdata(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const fatherName = document.getElementById("fatherName").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    
    const students = JSON.parse(localStorage.getItem("student")) || [];
    studentform = {
        "name": name,
        "fatherName": fatherName,
        "email": email,
        "contact": contact
    };
    students.push(studentform);
    localStorage.setItem("student", JSON.stringify(students));
}