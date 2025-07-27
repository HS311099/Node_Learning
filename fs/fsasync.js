const fs = require("fs");
const path = require("path");

const filename = "fsAsync.txt";
const filePath = path.join(__dirname, filename);
// This code imports the fs and path modules and uses them to create a file path for writing

// writeFile is used to write data to a file asynchronously
// If the file does not exist, it will be created; if it exists, it will
// fs.writeFile(filePath, "This is the inital Data!", "utf-8", (err) => {
//   if (err) console.error("Error writing file:", err);
//   else console.log("File created successfully!");
// });

// readFile is used to read data from a file asynchronously
// If the file does not exist, it will throw an error.
// fs.readFile(
//     filePath, 
//     "utf-8", 
//     (err, data) => {
//         if (err) console.error("Error reading file:", err);
//         else console.log("File content:", data);}
// );

// appendFile is used to append data to a file asynchronously
// If the file does not exist, it will be created; if it exists, the data
// fs.appendFile(
//   filePath,
//   "\nThis is the updated Data!",
//   "utf-8",
//     (err) => {
//         if (err) console.error("Error appending file:", err);
//         else console.log("File updated successfully!");
//     }
// );

// unlink is used to delete a file asynchronously
// If the file does not exist, it will throw an error.
// fs.unlink(filePath, (err) => {
//   if (err) console.error("Error deleting file:", err);
//   else console.log("File deleted successfully!");
// });

// rename is used to rename a file asynchronously
// If the file does not exist, it will throw an error.
// const newUpdatedFileName = "updatedfsAsync.txt";
// const newFilePath = path.join(__dirname, newUpdatedFileName);
// fs.rename(
//     filePath, 
//     newFilePath, 
//     (err) => {
//         if (err) console.error("Error renaming file:", err)
//         else console.log("File renamed successfully!")
//     }
// );

// This code imports the fs module and uses it to perform various file operations asynchronously, such as writing, reading, appending, deleting, and renaming files.
// The operations are performed using callbacks to handle errors and results.