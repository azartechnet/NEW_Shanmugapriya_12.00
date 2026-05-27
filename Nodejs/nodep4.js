var f1=require('fs')
f1.rename('file.txt','newfile.txt',(err)=>{
    if(err){
        console.error("Error renaming file:", err)
        return
    }
    console.log("File renamed successfully")
    f1.readFile('newfile.txt','utf8',(err,data)=>{
        if(err){
            console.error("Error reading file:", err)
            return
        }   
        console.log("File contents:", data)
    })
}
)
