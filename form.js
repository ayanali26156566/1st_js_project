// Retrieve and display all stored fields
document.getElementById("name").innerText = localStorage.getItem("name") || "Not provided";
document.getElementById("fatherName").innerText = localStorage.getItem("fatherName") || "Not provided";
document.getElementById("rollNo").innerText = localStorage.getItem("rollNo") || "Not provided";
document.getElementById("schoolName").innerText = localStorage.getItem("schoolName") || "Not provided";
document.getElementById("class").innerText = localStorage.getItem("class") || "Not provided";
document.getElementById("age").innerText = localStorage.getItem("age") || "Not provided";
document.getElementById("email").innerText = localStorage.getItem("email") || "Not provided";
document.getElementById("contact").innerText = localStorage.getItem("contact") || "Not provided";