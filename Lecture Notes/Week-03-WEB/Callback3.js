function connect(queryF)
{
    let randomTime=Math.floor(Math.random()* 2000)+1;

    setTimeout(()=>{

        console.log("Connection established")
        query();
    }, randomTime)
}

function query()
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("Query is executed");
    }, randomTime)
}

connect();