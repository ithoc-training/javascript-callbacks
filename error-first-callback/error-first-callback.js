const fs = require('fs');

function readFileContents(filePath, callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            // Pass the error to the callback
            callback(err, null);
            return;
        }
        // Pass the data to the callback
        callback(null, data);
    });
}

// Test the function
readFileContents(process.cwd() + '/neptune.txt', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("File content:", data);
});

// Test with an invalid file path
readFileContents(process.cwd() + '/file.txt', (err, data) => {
    if (err) {
        console.error("Error reading 'file.txt':", err);
        return;
    }
    console.log("File content:", data);
});
