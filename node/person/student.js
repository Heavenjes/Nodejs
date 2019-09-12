 var readlineSync = require('readline-sync');

class Student{
    constructor(name, course, year){
        this.name = name;
        this.course = course;
        this.year = year
        this.schedule = [];
        this.id = this.id;
    }

    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }

    setYear(year){
        this.Year = year;
    }
    getYear(){
        return this.Year;
    }

    setCourse(course){
        this.course = course;
    }
    getCourse(){
        return this.course;
    }

    addSched(sched){
        this.schedule.push(sched)
    }
    deleteSched(){
        console.log("DELETE SCHEDULE")
        for(let i =0; i< this.schedule.length; i++){
            console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
        }
        var input = readlineSync.question("Choose sched to delete(1-5)\nPress (0) not to delete\n")
        for(let i = 0 ; i < this.schedule.length+1; i++){
            if(input == i){
                var index = i-1      
                this.schedule.splice(index , 1)
                console.log("-----Your New Schedule-----")
                for(let i =0; i< this.schedule.length; i++){
                    console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
                }
            }
            if(input == 0){
                break
            }
        }
    }
    displayinfo(){
        console.log(`\n  STUDENTS INFO`)
        console.log("------------------------")
        console.log(` Name: ${this.name} \n Course: ${this.course} \n Year: ${this.year}\n Student ID: ${this.id}`)
        for(let i =0; i< this.schedule.length; i++){
            console.log("Schedule "+ (i+1) +": "+ this.schedule[i])
        }
        console.log("--------------------------------")
    }
}
module.exports = Student;



    




