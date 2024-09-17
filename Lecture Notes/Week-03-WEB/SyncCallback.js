// Synchronous Callback function 

function outputA(firstCallback, secondCallback)
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("A is executed");
        firstCallback(secondCallback);
    }, randomTime)
}

function outputB(lastCallback)
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("B is executed");
        lastCallback();
    }, randomTime)
}

function outputC()
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("C is executed");
    }, randomTime)
}
outputA(outputB, outputC);