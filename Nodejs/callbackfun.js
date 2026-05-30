function display(result){
    console.log("Result is "+result);
}
function add(a,b,callback){
    var sum=a+b;
    callback(sum);
}
add(10,20,display);
