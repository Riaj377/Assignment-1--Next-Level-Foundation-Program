function studentIntroduction(student) {
    // Write your code here
  if( typeof student !== "object" || !("name" in student) || !("age" in student) || !("course" in student) || student === null ){
    return "Invalid"
  }
    return `My name is ${student.name}. I am ${student.age} years old. I am learning ${student.course}.`
}

console.log(studentIntroduction({"name":"Rafi","age":18,"course":"JavaScript"}))