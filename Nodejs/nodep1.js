const h1=require('http')
const s1=h1.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write('<h1>Welcome to NodeJS</h1>')
    res.end()
}).listen(3000)
console.log('Server is running on port 3000')
// s1.listen(3000,()=>{
//     console.log('Server is running on port 3000')
// })
