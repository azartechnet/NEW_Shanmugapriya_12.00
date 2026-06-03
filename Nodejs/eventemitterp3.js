//Counter Event
const EventEmitter=require('events');
const counter=new EventEmitter();
counter.on('count',(num)=>{
    console.log(`Counter: ${num}`);
    if(num>=5){
        console.log('Counter has reached 5 or more!');
    }
});
let count=0;
let interval=setInterval(()=>{
    count++;
    counter.emit('count',count);
    if(count>=10){
        clearInterval(interval);
    }
},1000);
