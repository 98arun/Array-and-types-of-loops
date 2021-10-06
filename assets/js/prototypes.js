console.log("hey proto");

function education(name, course, section, university) {
  this.name = name;
  this.course = course;
  this.section = section;
  this.university = university;
}
let student = new education(
  "arun",
  { primary: "software development", secondary: "aws" },
  1,
  true
);
console.log(student);

// lets create a new prototype

education.prototype.slogan = function () {
  return "bharat mata ki jai";
};
console.log(education.prototype.slogan());
