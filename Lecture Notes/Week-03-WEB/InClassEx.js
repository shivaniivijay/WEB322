// Write a function which will take one parameter, if the value is less 
// than 10, then consider promise as fulfilled
// otherwise reject it

function checkValue(value) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            value < 10 ? resolve("Promise fulfilled") : reject("Promise rejected");
        }, 1000);
    });
}

checkValue(5) // Logs: "Promise fulfilled"
.then((message)=> {
    console.log(message);
})
.catch((err) => {
    console.log(err);
});

checkValue(15) // Logs: "Promise rejected"
.then((message) => {
    console.log(message);
})
.catch((err)=> {
    console.log(err);
});