let promise = new Promise(function(resolve, reject){
    resolve("process is Successful");
    reject("Project Failure")
});

const getData = async() => {
    try {
        const data = await promise;
        console.log(data);
    }catch(err){
        console.log(err);
    }
}

getData();

//async.promise = await.Promise;

/*promise.then((value) => {
    console.log(value);
}).catch((err)=>{
    console.log(err);
})*/