/*********************************************************************************
*  WEB322 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Shivani Vijay Student ID: 148493232 Date: 20/09/2024
*
********************************************************************************/ 

// Importing required modules
const readline = require('readline');
const fs = require('fs');

// Readline Interface
const rl = readline.createInterface
({
    input: process.stdin,
    output: process.stdout
});

// Asking for user input
rl.question('Do you wish to process a File (f) or Directory (d): ', (answer) => {
    if (answer === 'f') { // Handles user input
        rl.question('File: ', (fileName) => { // Prompting for file name 
            const filePath = `${fileName}`;  // This is for making sure the file path
            console.log(`TODO: Process file ${filePath}`);
            processFile(filePath);  // This will call the function to process the file
            rl.close();
        });
        
    } else if (answer === 'd') {
        rl.question('Directory: ', (dirPath) => {
            processDirectory(dirPath);  // This will call the function to process the directory
            rl.close();
        });
        
    } else {
        console.log('Invalid Selection');
        rl.close();
    }
});

// Processing the files
const processFile = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) { // Error handling
            console.log(err.message);
            return;
        }
        
        // Analyzes the conents
        const content = data.toString().replace(/\s+/g, ' '); // converts buffer to string & replaces multiple whitespace characters with single space 
        const words = content.replace(/[^\w\s\']/g, '').split(' '); // removes punctuation, splits the contents into array of words.
        // Character & word counts are stored in charCount and wordCount.
        const charCount = content.length; 
        const wordCount = words.length;
        // Finds the longest word
        const longestWord = words.reduce((longest, current) => current.length > longest.length ? current : longest, '');
        
        // Reports the results
        console.log(`Number of Characters (including spaces): ${charCount}`);
        console.log(`Number of Words: ${wordCount}`);
        console.log(`Longest Word: ${longestWord}`);
        
        // Finds the most repeated word
        const wordFrequency = {};
        words.forEach(word => {
            wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });
        const mostRepeatedWord = Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b);
        console.log(`Most Repeated Word: ${mostRepeatedWord} - ${wordFrequency[mostRepeatedWord]} times`);
    });
};

// To process a directory
const processDirectory = (dirPath) => {
    fs.readdir(dirPath, (err, files) => {
        if (err) {
            console.log(err.message);
            return;
        }
        // sorts files
        files.sort().reverse();
        console.log(`Files (reverse alphabetical order): ${files.join(', ')}`);
        
        // Gets file sizes in bytes
        files.forEach(file => {
            fs.stat(`${dirPath}/${file}`, (err, stats) => {
                if (err) {
                    console.log(err.message);
                    return;
                }
                console.log(`${file}: ${stats.size} bytes`);
            });
        });
    });
};


