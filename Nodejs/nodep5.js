var f1=require('fs')
f1.readFile('newfile.txt',function(err,data){
    if(err) throw err;
    console.log(data.toString());
}
)
