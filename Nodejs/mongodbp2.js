const {MongoClient} = require('mongodb');
const url = 'mongodb+srv://admin:admin@cluster0.feuonss.mongodb.net/?appName=Cluster0';
const client = new MongoClient(url);
async function run() {
    try{
        const db=client.db('dharanidb');
        const collection=db.collection('dharanicoll');
       //display all documents in the collection
        const result=await collection.find({}).toArray();
        //display documents with age greater than 22
        //const result=await collection.find({age:{$gt:22}}).toArray();
        
        console.log(result);
    }catch(err){
        console.log(err);
    }finally{
        await client.close();

    }
}run();