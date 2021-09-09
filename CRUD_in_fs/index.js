/*
Challenge:

=> Create a folder name Challenge
=> Create a file name bio.txt and fill data in it.
=> Add more data to the file with the existing data.
=> Read the data without getting the buffer data at first.
=> Rename the file name to myBio.txt
=> Now delete both the file and the folder.
*/

const fs = require('fs');

fs.mkdirSync("Challenge");

let parentPath = "Challenge/";

fs.writeFileSync(parentPath + "bio.txt", "This is my bio.txt");
fs.appendFileSync(parentPath + "bio.txt", "\nThis is what happens when we append");

let data = fs.readFileSync(parentPath + "bio.txt", "utf-8");
console.log(data);

fs.renameSync(parentPath + "bio.txt", parentPath + "mybio.txt");

fs.unlinkSync(parentPath + "mybio.txt")

fs.rmdirSync("Challenge")



