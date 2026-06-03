const e1=require('events');
const d1=new e1.EventEmitter();
d1.on('message',(data)=>{
    console.log('Message received: '+data);
}
);
d1.emit('message','Hello, this is an event!');
