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
  

function formdata(e) {
    e.preventDefault();

    const name = document.getElementById("formname").value;
    const fatherName = document.getElementById("formfathername").value;
    const email = document.getElementById("formemail").value;
    const contact = document.getElementById("formcontact").value;
    
    const students = JSON.parse(localStorage.getItem("student")) || [];
    const studentform = {
        "name": name,
        "fatherName": fatherName,
        "email": email,
        "contact": contact
    };
    students.push(studentform);
    localStorage.setItem("student", JSON.stringify(students));

    // Clear form
    document.getElementById("formname").value = "";
    document.getElementById("formfathername").value = "";
    document.getElementById("formemail").value = "";
    document.getElementById("formcontact").value = "";

    // Redirect
    window.location.href = "formdata.html";
}

    window.location.href = "formdata.html";


    console.log("Data stored in localStorage and redirected to formdata.html");

}
 
>>>>>>> 424d35e8f2f0587e594c7c3d57401f0c7f0567d1
