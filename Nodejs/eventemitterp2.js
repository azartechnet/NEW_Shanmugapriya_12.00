//Student Result Event
const EventEmitter=require('events');
const student=new EventEmitter();
student.on('result',(name,marks)=>{
    console.log(`Student Name: ${name}, Marks: ${marks}`);
    if(marks>=50){
        console.log('Result: Pass');
    }
    else{
        console.log('Result: Fail');
    }
});
student.emit('result','John Doe', 75);
student.emit('result','Jane Smith', 45);

