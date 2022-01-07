const fs = require('fs')
// Add Student
const addStudents = (id,name,grades) => {
    const students = loadStudents()    
    const duplicateId = students.filter((note)=>{
        return note.id === id
    })
    var total_grades = 0
    if(duplicateId.length == 0){
        students.forEach((grade)=>{
            grade.grades.forEach((deg)=>
             total_grades += deg)
            console.log(total_grades)
        })
        students.push({  
            id,
            name,
            grades,
            total_grades,
           
        })
        saveStudent(students)
        console.log('Student saved successfuly')
    }
    else{
        console.log('Error Duplicate Student ID')
    }
}

/////////////////////////////////////////////////////////////////////////////////
// Delete Student 

const deleteStudent = (id)=>{
    const student = loadStudents()
    const studentsToKeep = student.filter((student_id)=>{
        return student_id.id !== id
    })
//     console.log(student.length)  
//    console.log(studentsToKeep.length)  
       if(student.length !== studentsToKeep.length){
            saveNotes(studentsToKeep)
        console.log('Student is removed')  
       }
       else {
           console.log('No id is found. Please try again')
       }

}

/////////////////////////////////////////////////////////////////////////////////
// read 

const readStudent = (id) =>{
    const students = loadStudents()
    const student = students.find((student_id)=>{
        return student_id.id === id
    })
console.log(student)
    if(student){
        console.log(student.id,student.name,student.gardes)
    }
    else{
        console.log('No id is found')
    }
}

/////////////////////////////////////////////////////////////////////////////////
// List Students

const listStudent = () =>{
    const students = loadStudents()
    notes.forEach((student)=>{
        console.log(student.id)
    })
}


const loadStudents = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString()
        return JSON.parse(dataBuffer) 
    }
    catch(e){
        return []
    }

}

const saveStudent = (students) =>{
    const saveData = JSON.stringify(students)
    fs.writeFileSync('student.json',saveData)
}

module.exports = {
    addStudents,
    deleteStudent,
    readStudent,
    listStudent
}
