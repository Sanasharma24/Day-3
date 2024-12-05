function categorizeStudent(score) {
    let grade;

    if (score >= 90) {
        grade = "A+";
    } else if (score >= 80) {
        grade = "A";
    } else if (score >= 70) {
        grade = "B+";
    } else if (score >= 60) {
        grade = "B";
    } else if (score >= 50) {
        grade = "C+";
    } else {
        grade = "C";
    }

    return grade;
}

let students = [
    { name: "Alice", score: 92 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 78 },
    { name: "Daisy", score: 66 },
    { name: "Ethan", score: 54 },
    { name: "Fiona", score: 42 }
];

students.forEach(student => {
    console.log(`${student.name}: ${categorizeStudent(student.score)}`);
});
