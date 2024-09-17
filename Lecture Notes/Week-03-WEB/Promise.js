function outputA() {
    let randomTime=Math.floor(Math.random()* 2000)+1;


    return new Promise((resolve, reject)=>{
        setTimeout(()=>{

            console.log("A is executed");
            resolve('OutputA has finished execution')
        }, randomTime)
    })
}


outputA().then((data)=>{
    console.log(data)
});