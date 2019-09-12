var student = require(`./student.js`);
var readlineSync = require('readline-sync');
var list = []
var count = 0
var studentNum = 0
var Studentid = 0


function addStudent(){    
    let student1 = new student()
    student1.setName(readlineSync.question('Name: '))
    student1.setCourse(readlineSync.question('Course: '))
    student1.setYear(readlineSync.question('Year: '))
    Studentid++
    student1.id = Studentid
    list.push(student1)
}

function viewlist(){
    for(let i =0 ; i< list.length; i++){
        console.log("student "+ (i+1) + ":" + list[i].getName())
    }
}
function deleteStudent(){
    var input1 = readlineSync.question("Enter ID to delete student \n")
    for(let i = 0 ; i < list.length+1; i++){
        if(input1 == i){
            var index = i-1      
            list.splice(index , 1)
            viewlist()
        }
    }   
}
console.log("GOOD MORNING!!")
if (!readlineSync.keyInYN('Do you want to Add your Schedule?')) {
    // Key that is not `Y` was pressed.
    process.exit();
  }
  

while(true){
    
    console.log("\n-------------------------OPTIONS-------------------------------------\n")
    var input1 = readlineSync.question("Press 'Add' to add Student\nPress 'Exit' to exit.\n")
    if(input1 == "Add"){
        console.log("\nGive your Information :\n")
        addStudent()
        while(count!= 5){
            list[studentNum].addSched(readlineSync.question('\nAdd Schedule: '))
            count++
        }
        list[studentNum].deleteSched()
    } 
    studentNum++ 
    count =0;
    if(input1 == "Exit"){
        for(let i = 0; i<list.length ; i++){
            list[i].displayinfo()
        }
        console.log("\n------------------Student's List----------------------")
        viewlist()
        deleteStudent()
        break
    }
    //console.log("\nOPTION IS NOT RECOGNIZED")
    continue
}



