import sys
name = input('What is your name? ')
assignment = input('What is your assignemnt? ')
grades = float(input('What is your grade? '))


class Grades:
    def __init__(self, name, assignment, grades):
        self.name = name
        self.assignment = assignment
        self.grades = grades

    def display_student(self):

        return f" Student: {self.name} - Assignment: {self.assignment} - Grade: {self.display_grades(self.grades)}"

    def display_grades(self, grade):
        print(grade)
        if grade >= 90 and grade <= 100:
            return "A"
        elif grade >= 80 and grade <= 89.9:
            return "B"
        elif grade >= 70 and grade < 79.9:
            return "C"
        elif grade >= 60 and grade < 69.9:
            return "D"
        elif grade > 101:
            return " A +"
        elif grade < 59:
            return "F"


student = Grades(name, assignment, grades)

print(student.display_student())
# appending to the
text_file = open("grades.txt", "a")

text_file.write("{}\n".format(f"Python student - {student.display_student()}"))
text_file.close()
