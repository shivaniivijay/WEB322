function connect()
{
    let randomTime=Math.floor(Math.random()* 2000)+1;
    setTimeout(()=>{

        console.log("Connection has been established");
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
query();
