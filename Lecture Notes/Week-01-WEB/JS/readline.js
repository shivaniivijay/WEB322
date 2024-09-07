// The 'readline' module provides a way to read data from a "Readable stream" (such as process.stdin) one line at a time. 
//For example, we can use this to prompt the user to enter data in the console using the following code:
const readline=require('readline');

const rl=readline.createInterface(process.stdin, process.stdout)

rl.question('name: ', function(name){
    rl.question('age: ', function(age){
        console.log("Name & Age: "+name+" "+age);
        rl.close();
    })
})