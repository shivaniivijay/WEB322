let localmsg="";

module.exports.writeMessage= (msg)=>{
    localmsg=msg;
}

module.exports.readMessage=() =>{
    console.log(`${localmsg} from ${__filename}`)  // Use backticks for string interpolation
}
