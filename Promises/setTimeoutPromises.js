
let myPromiseObj = new Promise(function (myResolve,myReject) {

    setTimeout(() => {

        // calls to the consumer code
        myResolve('I promise to return');

    }, 3000)

})

// must wait untill a promise is returned - consuming code 
myPromiseObj.then(
    function (value){
    // what to do once promise is fullfilled - success goes here
    timeOutDisplay(value);
    },
    function(err){
        console.log(err);
    }

)


function timeOutDisplay() {
    document.getElementById('setTimeoutValue').innerHTML = 'From Display'
}
// timeOutDisplay();