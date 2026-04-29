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



//                L------O--------O---------P
  





var formdata = (e) => {
    e.preventDefault();
    console.log("ayan")
    var showFatherName = document.getElementById("formfathername").value;
    var showFullName = document.getElementById("formname").value;
    var showRollno = document.getElementById("formrollno").value;
    var showSchoolName = document.getElementById("formschool").value;
    var showClass = document.getElementById("formclass").value;
    var showAge = document.getElementById("formage").value;
    var showEmail = document.getElementById("formemail").value;
    var showContact = document.getElementById("formcontact").value;

    
    console.log("Full Name: " + showFullName);
    console.log("Father Name: " + showFatherName);
    console.log("Roll No: " + showRollno);
    console.log("School Name: " + showSchoolName);
    console.log("Class: " + showClass);
    console.log("Age: " + showAge);
    console.log("Email: " + showEmail);
    console.log("Contact: " + showContact);
    
    


    localStorage.setItem("name",showFullName)
    localStorage.setItem("fatherName",showFatherName)
    localStorage.setItem("rollNo",showRollno)
    localStorage.setItem("schoolName",showSchoolName)
    localStorage.setItem("class",showClass)
    localStorage.setItem("age",showAge)
    localStorage.setItem("email",showEmail)
    localStorage.setItem("contact",showContact)


    
document.getElementById("formname").value = "";
document.getElementById("formfathername").value = "";
document.getElementById("formrollno").value = "";
document.getElementById("formschool").value = "";
document.getElementById("formclass").value = "";
document.getElementById("formage").value = "";
document.getElementById("formemail").value = "";
document.getElementById("formcontact").value = "";

    window.location.href = "formdata.html";

}
 
