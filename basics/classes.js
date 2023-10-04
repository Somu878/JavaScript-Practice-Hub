function student(name, age, rno) {
    this.name = name;
    this.age = age;
    this.rno = rno;
}

student.prototype.showage = function() {
    console.log(this.age);
};

function teacher(name, age, eno) {
    this.name = name;
    this.age = age;
    this.eno = eno;
}

const student1 = new student('Student1', 18, 'S123');
const teacher1 = new teacher('Teacher1', 30, 'T5362');

student1.showage(); // Output: 18
student.prototype.showage.call(teacher1); // Output: 30
