// Asynchronous Callback functions
function outputA()
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("A is executed");
    }, randomTime)
}

function outputB()
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("B is executed");
    }, randomTime)
}

function outputC()
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("C is executed");
    }, randomTime)
}

outputA();
outputB();
outputC();
