//setTimeout using files
var f1=require('fs');
f1.writeFile("sample.txt","hello world",function(err){
    if(err) throw err;
    console.log("file created");
});
setTimeout(function(){
    f1.readFile("sample.txt",function(err,data){
        if(err) throw err;
        console.log(data.toString());
    }); 
},2000);
