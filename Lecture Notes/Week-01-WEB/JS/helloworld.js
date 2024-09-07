console.log("Hello World"); // Practice
console.log(__dirname); // To view current directory
console.log(__filename); // To view current directory along with filename

// The setTimeout() function will execute a piece of code (function) after a certain delay.
setTimeout(function(){
    console.log("Displaying hello after 1 second")
}, 1000);

// The setInterval() function will execute a piece of code (function) after a certain delay and continue to call it repeatedly.
let count=1;
let maxcount=4;

let mycountInterval=setInterval(function(){
    console.log("Hello after"+count++ +"seconds");
    countmax();
},2000);

function countmax() {
    if(count>maxcount){
        clearInterval(mycountInterval);
    }
}