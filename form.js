container = document.querySelector(".container");

var studentdata = JSON.parse(localStorage.getItem("student") || "[]");
if (!Array.isArray(studentdata)) {
    studentdata = [];
}

function editStudent(index) {
    var student = studentdata[index];
    var newName = prompt("Enter new name:", student.name);
    if (newName === null) return;
    
    var newEmail = prompt("Enter new email:", student.email);
    if (newEmail === null) return;
    
    var newContact = prompt("Enter new contact:", student.contact);
    if (newContact === null) return;
    
    studentdata[index].name = newName;
    studentdata[index].email = newEmail;
    studentdata[index].contact = newContact;
    localStorage.setItem("student", JSON.stringify(studentdata));
    location.reload();
}

function deleteStudent(index) {
    if (confirm("Are you sure you want to delete this student?")) {
        var deletedName = studentdata[index].name;
        studentdata.splice(index, 1);
        localStorage.setItem("student", JSON.stringify(studentdata));
        alert("Student '" + deletedName + "' deleted successfully!");
        location.reload();
    }
}

studentdata.forEach(function(student, index) {
    container.innerHTML += `
        <div class="student-card">
            <h3>${index + 1} - ${student.name}</h3>
            <p><strong>Email:</strong> ${student.email}</p>
            <p><strong>Contact:</strong> ${student.contact}</p>
           <div>
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})">Delete</button>
           </div>

        </div>
        `;
});


