let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents(){
    let studentList = document.getElementById("studentList");
    studentList.innerHTML = "";

    students.forEach(function(student, index){
        let li = document.createElement("li");
        let grade;
        if (student.marks >= 800) {
            grade = "A";
        } else if (student.marks >= 600) {
            grade = "B";
        } else if (student.marks >= 450) {
            grade = "C";
        } else {
            grade = "D";
        }

        li.innerHTML ="ID: "+student.id+ "Name: " + student.name + " | Course: " + student.course + " | Marks: "+student.marks+" | Grede: "+grade;

        // 1. Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.style.marginLeft = "10px";

        deleteBtn.addEventListener("click", function() {
            students.splice(index, 1);
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
        });

        // 2. Edit Button - MOVED OUTSIDE delete event
        let editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.style.marginLeft = "5px";

        editBtn.addEventListener("click", function() {
            document.getElementById("name").value = student.name;
            document.getElementById("course").value = student.course;

            students.splice(index, 1); // remove old record so updated one gets added on submit
            localStorage.setItem("students", JSON.stringify(students));
            displayStudents();
        });

        // 3. Append both buttons - MOVED OUTSIDE delete event
        li.appendChild(deleteBtn);
        li.appendChild(editBtn);
        studentList.appendChild(li);
    });

    document.getElementById("count").innerText = students.length;
    if (students.length > 0) {
    let topper = students.reduce((max, student) =>
        Number(student.marks) > Number(max.marks) ? student : max
    );

    document.getElementById("topper").innerText =
        "Topper: " + topper.name + " (" + topper.marks + ")";
}
}

// FIXED: renamed 'students' to 'studentItems' to avoid shadowing
document.getElementById("search").addEventListener("keyup", function() {
    let searchText = this.value.toLowerCase();
    let studentItems = document.querySelectorAll("#studentList li");

    studentItems.forEach(function(item) {
        let text = item.textContent.toLowerCase();
        if (text.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});

document.getElementById("studentForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;
    let marks = document.getElementById("marks").value;

    students.push({
        id:Data.now(),
        name: name,
        course: course,
        marks:marks
    });
    
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
    document.getElementById("studentForm").reset();
});

displayStudents();