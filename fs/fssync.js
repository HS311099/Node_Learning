const fs = require("fs");
const path = require("path");

const filename = "test.txt";
const filePath = path.join(__dirname, filename);
// This code imports the fs and path modules and uses them to create a file path for writing

// writeFileSync is used to write data to a file synchronously
// If the file does not exist, it will be created; if it exists, it will be overwritten.

// const writeFile = fs.writeFileSync(
//   filePath,
//   "This is the initally Data!",
//   "utf-8"
// );

// console.log("File created successfully!", writeFile);


// readFileSync is used to read data from a file synchronously
// If the file does not exist, it will throw an error.
// const readFile = fs.readFileSync(filePath, "utf-8");

// console.log("File content:", readFile.toString());
// console.log("File content:", readFile);

// appendFileSync is used to append data to a file synchronously
// If the file does not exist, it will be created; if it exists, the data will be added at the end.
// const appendFile = fs.appendFileSync(
//   filePath,
//   "\nThis is the updated Data!",
//   "utf-8"
// );
// console.log("File updated successfully!", appendFile);

// unlinkSync is used to delete a file synchronously
// If the file does not exist, it will throw an error.
// const fileDelete = fs.unlinkSync(filePath);
// console.log("File deleted successfully!", fileDelete);

// renameSync is used to rename a file synchronously
// If the file does not exist, it will throw an error.

// const newUpdatedFileName = "updatedTest.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);
// const renameFile = fs.renameSync(filePath, newFilePath);
// console.log("File renamed successfully!", renameFile);