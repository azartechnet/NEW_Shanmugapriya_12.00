var f1=require('fs')
f1.open('file.txt','r',(err,fd)=>{
    if(err){
        console.error("Error opening file:", err)
        return
    }
    console.log("File opened successfully with file descriptor:", fd)
    f1.close(fd,(err)=>{
        if(err){
            console.error("Error closing file:", err)
            return
        }
        console.log("File closed successfully")
    }
    )
})