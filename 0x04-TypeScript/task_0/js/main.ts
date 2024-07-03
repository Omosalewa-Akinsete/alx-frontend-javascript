interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Omosalewa",
  lastName: "Akinsete",
  age: 15,
  location: "Ikeja"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentList: Student[] = [student1, student2];

function renderTable(students: Student[]) {
  const table = document.createElement("table");

  students.forEach((student) => {
    const row = document.createElement("table");
    const firstNameCell = document.createElement("td");
    const localCell = document.createElement("td");

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);

    table.appendChild(row);
  });

  document.body.appendChild(table);
}

renderTable(studentsList);
