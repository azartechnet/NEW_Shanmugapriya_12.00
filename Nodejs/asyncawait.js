function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve('Data received successfully!');
            } else {
                reject('Failed to receive data.');
            }
        }, 2000);
    }
    );
}

async function getDataAsync() {
    try {
        let data = await getData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
getDataAsync();