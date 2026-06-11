const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://admin:admin@cluster0.feuonss.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);
async function run() {
    try{
        const db=client.db('dharanidb');
        const collection=db.collection('dharanicoll');
        // const result=await collection.insertOne({name:'dharani',age:22});
        const result=await collection.insertMany([{name:'dharani',age:22},{name:'dharani1',age:23}]);
        console.log(result);
    }catch(err){
        console.log(err);
    }finally{
        await client.close();

    }
}run();