const fs=require('fs');

fs.readFile('colors.csv', function(err, fileData){
    if(err)
    {
        console.log(err);
    }
    else {
        myArray=fileData.toString().split(',');
        console.log(myArray);

    }
})
/* const fs=require('fs');

fs.readdir('html', function(err, fileData){
    if(err)
    {
        console.log(err);
    }
    else {
        //myArray=fileData.toString().split(',');
        console.log(fileData);

    }
})
This is for reading files inside a folder
*/

/* Similarly, if we had a directory of images, ie: "img", we could list the files using:

const fs = require('fs');

fs.readdir('img', function (err, filesArray) {
  if (err) console.log(err);
  else {
    console.log(filesArray);
  }
}); */
