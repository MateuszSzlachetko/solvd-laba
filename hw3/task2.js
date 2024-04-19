// Task 2
function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  }
}

const getFullName = person => `${person.firstName} ${person.lastName}`;

console.log(getFullName(createPerson("John", "Johnson")) === "John Johnson")
console.log(getFullName(createPerson("Patricia", "Miller")) === "Patricia Miller")

const filterUniqueWords = text => text
  .toLowerCase()
  .match(/\w+/g)
  .filter((word, index, array) => array.indexOf(word) === index)
  .sort();

const text = "Foo bar baz foo"
console.log(JSON.stringify(filterUniqueWords(text)) === JSON.stringify(['bar', 'baz', 'foo']))

function createStudent(name, grades) {
  return {
    name: name,
    grades: grades,
  }
}

const students = [
  createStudent("s1", [5, 2, 3, 4, 4.5]),
  createStudent("s2", [5, 4]),
  createStudent("s3", [5, 5, 3, 5, 5.5]),
  createStudent("s4", [3, 2, 3, 4, 2])
]

const sumElements = array => array.reduce((acc, element) => acc + element, 0);
const getStudentGrades = student => student.grades
const getAverage = grades => sumElements(grades) / grades.length


const getAverageGrade = students => getAverage(students
  .map(getStudentGrades) // returns array of grades arrays
  .map(getAverage) // returns array of individual student's average grade
) // apply getAverage on average grades
console.log(getAverageGrade(students))

// or if I misunderstood the instruction
const getAllGrades = students => students.flatMap(student => student.grades);
const getAverageGrade2 = students => getAverage(getAllGrades(students))

console.log(getAverageGrade2(students))