// To handle synchronous calls

function outputA() {
    let randomTime=Math.floor(Math.random()* 3000)+1;


    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        {
            randomTime % 2 ? resolve("A") : reject("Error with outputA");
        }, randomTime)
    })
}
// Each function simply does its job, 
// then reports back with the data ("resolves") if it was successful or sends the error ("rejects") it failed.
function outputB() {
    let randomTime=Math.floor(Math.random()* 3000)+1;


    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        {
            randomTime % 2 ? resolve("B") : reject("Error with outputB");
        }, randomTime)
    })
}
// ie: if their logic is asynchronous, functions provided by the module will return Promise objects.


function outputC() {
    let randomTime=Math.floor(Math.random()* 3000)+1;


    return new Promise((resolve, reject)=>{
        setTimeout(()=>
        {
            randomTime % 2 ? resolve("C") : reject("Error with outputC");
        }, randomTime)
    })
}
// If we wish to chain promises (in the case above) We must ensure that for every "then()" callback function 
// returns the correct follow up function and it can be difficult to visually walk through the code.

outputA().then((data)=>{
    console.log(data)
    return outputB();
})
.then((data)=>{
    console.log(data);
    return outputC();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err)
})

// Write a function which will take one value, if the value is less than 10, then the promise will be fullfilled, then consider promise as fulfilled otherwise reject it. 

function checkValue(value) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            value < 10 ? resolve("Promise fulfilled") : reject("Promise rejected");
        }, 1000);
    });
}

checkValue(5)
.then((message)=> {
    console.log(message);
})
.catch((err) => {
    console.log(err);
});

checkValue(15)
.then((message) => {
    console.log(message);
})
.catch((err)=> {
    console.log(err);
});