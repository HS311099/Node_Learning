const fs = require("fs/promises");
const path = require("path");

const filename = "fsAsyncAwait.txt";
const filePath = path.join(__dirname, filename);

// Read Directory contents
// const readFolder = async () => {
//   try {
//     const data = await fs.readdir(__dirname);
//     console.log("Directory contents:", data);
//   } catch (err) {
//     console.error("Error reading directory:", err);
//   }
// };
// readFolder();

// writeFile using async/await
// If the file does not exist, it will be created; if it exists, it will be overwritten.
// When didn't use fs.promises, need to use fs.writeFile
// If using fs.promises, can use fs.writeFile directly without fs.promises prefix
// const writeFile = async () => {
//   try {
//     await fs.writeFile(filePath, "This is the initial Data!", "utf-8");
//     console.log("File created successfully!");
//   } catch (err) {
//     console.error("Error writing file:", err);
//   }
// };
// writeFile();

// readFile using async/await
// If the file does not exist, it will throw an error.
// const readFile = async () => {
//   try {
//     const data = await fs.readFile(filePath, "utf-8");
//     console.log("File content:", data);
//   } catch (err) {
//     console.error("Error reading file:", err);
//   }
// };
// readFile();

// appendFile using async/await
// If the file does not exist, it will be created; if it exists, the data will be appended.
// const appendFile = async () => {
//   try {
//     const newString = "\nThis is the updated Data!";
//     await fs.appendFile(filePath, newString, "utf-8");
//     console.log("File updated successfully!");
//   } catch (err) {
//     console.error("Error appending file:", err);
//   }
// };
// appendFile();

// deleteFile using async/await
// If the file does not exist, it will throw an error.

// const deleteFile = async () => {
//   try {
//     await fs.unlink(filePath);
//     console.log("File deleted successfully!");
//   } catch (err) {
//     console.error("Error deleting file:", err);
//   }
// };
// deleteFile();