let fs, { writeFileSync } = require("fs")
const { exit } = require("process")
const readline = require("readline")
class Grades {
    constructor(name, assignment, grade) {
        this.name = name
        this.assignment = assignment
        this.grade = grade
    }

    displayStudent() {
        return `Student - ${this.name} - Assignment ${this.assignment} - Grade ${this.displayGrades(this.grade)} `
    }

    displayGrades(grade) {
        console.log(grade)

        if (grade >= 90 && grade <= 100) {
            return "A"
        }
        if (grade >= 80 && grade <= 89.9) {
            return "B"
        }
        if (grade >= 70 && grade <= 79.9) {
            return "C"
        }
        if (grade >= 60 && grade <= 69.9) {
            return "D"
        }
        if (grade < 59) {
            return "F"
        }
        if (grade > 101) {
            return " A +"

        }
        else {
            return "invalid entry"
        }
    }

}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("What is your Name? ", (name) => {
    rl.question("What is your assignment? ", (assignment) => {
        rl.question("What is your grade? ", (grade) => {

            const student = new Grades(name, assignment, parseFloat(grade))
            writeFileSync(
                'grades.txt',
                `\n Node student - ${student.displayStudent()}`,
                { flag: 'a' }
            )
            exit()
        })
    })
})
