//built in node import reader (npm-install unnecessary)
const fs = require('fs');

//add comments in terminal to append to log.txt
fs.appendFile('log.txt', `${process.argv[2]}\n`,  (err) => 
    err? console.error(err) :  console.log('Commented!')
);
