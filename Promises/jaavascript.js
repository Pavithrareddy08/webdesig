
// promisifing

    let promiseObj = new Promise((resolve,reject) =>{
        // production code - takes some time... 10sec..

        // consumers called..
        resolve('Sending Food'); //fullfilled promise state

        // rejected..
        reject('err');
    

})

promiseObj.then(
    // succes call
    value => {
      console.log('success response:', value)
      dispalyMessage(value);
    } 
    ,
    //  Erroe
    value => console.log(error)


)

function dispalyMessage() {
    console.log('Arrange the party:',value)

}