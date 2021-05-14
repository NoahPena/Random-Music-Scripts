

const { readdirSync, rename } = require('fs');
const { resolve } = require('path');

/* Change this to the top level directory you want to remove characters from */
var path_to_work_in = './';

const imageDirPath = resolve(__dirname, path_to_work_in);

console.log(imageDirPath);

const files = readdirSync(imageDirPath);

console.log(files.length);

for (i = 0; i < files.length; i++)
{
    if (files[i].includes(''))
    {
        console.log(files[i]);
        rename(imageDirPath + '\\' + files[i], imageDirPath + '\\' + files[i].replace(//g, ""), err => console.log(err)); 
    }

    if (files[i].includes('•'))
    {
        console.log(files[i]);
        rename(imageDirPath + '\\' + files[i], imageDirPath + '\\' + files[i].replace(/•/g, ""), err => console.log(err));
    }
}