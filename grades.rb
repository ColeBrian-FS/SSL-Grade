name = gets.chomp
assignment = gets.chomp
grade =  gets.chomp


class Grades
    def initialize(name, assignment, grade)
        @name = name
        @assignment = assignment
        @grade = grade.to_i
    end
    def displayStudent
        return "Student  - #{@name} Assignment - #{@assignment} Grade - #{self.displayGrade(@grade)}`)}" 
    end
    def displayGrade(grade)
        puts grade
       if grade >= 90 and grade <= 100
        return "A"   
       elsif grade >= 80 and grade < 89.9
        return "B"
        elsif grade >= 70 and grade < 79.9
        return "C"
        elsif grade >= 60 and grade < 69.9
        return "D"
        elsif grade > 101
            return "A+"
        elsif grade < 59
        return "F"
       end
        
    end
end
#
student = Grades.new(name,assignment,grade)
# text_file = File.readlines("grades.txt")
# text_file.each {|line| puts line}
text_file = File.write("grades.txt","\n Ruby student - #{student.displayStudent}", mode:"a")
puts student.displayStudent

