const https = require("https"); 

const city = process.argv[2];  

if(!city){
    console.error('Error: Please provide valid city name');
    process.exit(1);
}

const mock_apihost = 'httpbin.org';
const mock_apipath = '/json';

const options = {
    host: mock_apihost,
    path: mock_apipath,
    method: 'GET'
};

const req = https.request(options, (res)=>{

    if (res.statusCode !== 200) {
        console.error(`Server returned an error status: ${res.statusCode}`);
        res.resume(); // Consume response data to free up memory
        return;
    }
    
    let data=''

    res.on('data', (chunk) =>{
        data += chunk;
    });

    res.on('end', ()=>{
        try{
            const parsedData = JSON.parse(data);

            // creating a mock data
            const temp = 25 + (city.length % 10);
            const conditions = ['Sunny','Cloudy','Rainy','Windy'];
            const condition = conditions[city.length % conditions.length];

            // Displaying  the data
            console.log(`City: ${city}`);
            console.log(`Temperature: ${temp} C`)
            console.log(`Condition: ${condition}`);
        }
        catch(error){
            console.error('Error while parsing json data: ', error.message);
        }
    });
});

req.on('error',(error)=>{
    console.error(`HTTP Request failed: ${error.message}`)
});

req.end();
