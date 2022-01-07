console.log('test')
const fs = require('fs')
const yargs = require('yargs')
const students = require('./notes')

const object = {
    id:12344,
    name:'Asmaa',
    grades:[20,10,30]
}

const jsontData = JSON.stringify(object)
const writeFile = fs.writeFileSync('json.json',jsontData)
const objectDate = JSON.parse(jsontData)
const readFile = (fs.readFileSync('json.json',objectDate)).toString()
console.log(readFile)

yargs.command({
    command:'add',
    describe:'Add notes',
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption:true,
            type: 'number'
        },
        name:{
            describe:'This is name description in add command',
            type:'string'

        },
        grades:{
            describe:'This is grades description in add command',
            type:'array'


        }
    },
    handler:(x)=>{
        students.addStudents(x.id,x.name,x.grades)
    }
})


yargs.command({
    command:'delete',
    describe:'Remove Student from object',
    builder:{
        id:{
            describe:'This is id description in remove command',
            demandOption:true,
            type: 'number'
        },
        name:{
            describe:'This is name description in remove command',
            type:'string'

        },
        grades:{
            describe:'This is grades description in remove command',
            type:'array'


        }
    },
    handler:(x)=>{
        students.deleteStudent(x.id,x.name,x.grades)
    }
})

yargs.command ({
    command: 'read',
    describe: ' read student from object ',
    builder: {
        id: {
            describe: 'this is the student id in read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (x) => {
        students.readStudent(x.id)
    }
})
yargs.command({
    command: 'list',
    describe: 'list of students',
    handler: () => {
        students.listStudent()
    }
})

yargs.parse()
