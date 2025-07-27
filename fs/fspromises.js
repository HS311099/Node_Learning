// If require only fs then need to write fs.promises before each method
// If require fs/promises then can use methods directly without fs.promises prefix
// const fs = require("fs");
const fs = require("fs/promises");
const path = require("path");

const filename = "fsPromises.txt";
const filePath = path.join(__dirname, filename);

// const file = __dirname;
// fs.promises
//   .readdir(file)
//   .then((data) => console.log("Directory contents:", data))
//   .catch((err) => console.error("Error reading directory:", err));

// writeFile is used to write data to a file asynchronously using promises
// If the file does not exist, it will be created; if it exists, it will be overwritten.
// When didn't use fs.promises, need to use fs.writeFile
// If using fs.promises, can use fs.writeFile directly without fs.promises prefix
// fs.promises
//   .writeFile(filePath, "This is the initial Data!", "utf-8")
//   .then(() => console.log("File created successfully!"))
//   .catch((err) => console.error("Error writing file:", err));

// fs
//   .writeFile(filePath, "This is the initial Data!", "utf-8")
//   .then(() => console.log("File created successfully!"))
//   .catch((err) => console.error("Error writing file:", err));

// readFile is used to read data from a file asynchronously using promises
// If the file does not exist, it will throw an error.
// fs.promises
//   .readFile(filePath, "utf-8")
//   .then((data) => console.log("File content:", data))
//   .catch((err) => console.error("Error reading file:", err));

// appendFile is used to append data to a file asynchronously using promises
// If the file does not exist, it will be created; if it exists, the data will be appended.
// fs.promises
//   .appendFile(filePath, "\nThis is the updated Data!", "utf-8")
//   .then(() => console.log("File updated successfully!"))
//   .catch((err) => console.error("Error appending file:", err));

// unlink is used to delete a file asynchronously using promises
// If the file does not exist, it will throw an error.
// fs.promises
//   .unlink(filePath)
//   .then(() => console.log("File deleted successfully!"))
//   .catch((err) => console.error("Error deleting file:", err));