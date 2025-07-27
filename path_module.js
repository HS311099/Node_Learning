const path = require("path");
// This code imports the path module and uses it to work with file and directory paths.

console.log(__dirname);
// This code logs the directory name of the current module, which is the directory where the script is located.
console.log(__filename);
// This code logs the full path of the current module, which includes the directory and the file name.

const filePath = path.join("folder", "students", "data.txt");
// This code uses the path module to create a file path by joining directory names and a file name.
console.log(filePath);
// This code logs the constructed file path to the console.

const parseData = path.parse(filePath);
// This code uses the path module to parse the file path into an object containing its components.
const resolvedPath = path.resolve(filePath);
// This code uses the path module to resolve the file path to an absolute path.
const extName = path.extname(filePath);
// This code uses the path module to get the extension name of the file from the file path
const baseName = path.basename(filePath);
// This code uses the path module to get the base name of the file from the file path
const dirName = path.dirname(filePath);
// This code uses the path module to get the directory name from the file path  
const separator = path.sep;
// This code uses the path module to get the platform-specific path separator.

console.log({parseData, resolvedPath, extName, baseName, dirName, separator});
// This code logs the parsed data, resolved path, extension name, base name, and directory name to the console.
// This code imports the math module and uses its functions and constant to perform operations and log results