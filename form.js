const container = document.getElementById("container");

const data = JSON.parse(localStorage.getItem("student")) || [];


    data.forEach(function(student) {
       container.innerHTML  += `
        <div class="field"><strong>Name:</strong><span>${student.name || ''}</span></div>
        <div class="field"><strong>Father Name:</strong><span>${student.fatherName || ''}</span></div>
        <div class="field"><strong>Email:</strong><span>${student.email || ''}</span></div>
        <div class="field"><strong>Contact:</strong><span>${student.contact || ''}</span></div>`;
    });
    
