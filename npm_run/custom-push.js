const fs = require('fs');
const path = require('path');

// Source directory (current directory's parent directory)
const sourceDir = path.join(__dirname, '..');

// Destination directory
const destDir = '/home/hosted/web-php/wtj';

// read the .gitignore file and exclude the files listed in it
const gitignore = fs.readFileSync('.gitignore', 'utf8');
const gitignoreLines = gitignore.split('\n');
const excludedFiles = [];
const excludedDirectories = [];

// exclude files of .gitignore from being copied -> removed because .env needs to be copied
// only adding node_modules for now
excludedDirectories.push('node_modules');

// for (const line of gitignoreLines) {
//     if (line.trim() === '' || line.startsWith('#')) {
//         continue;
//     }

//     if (line.endsWith('/')) {
//         excludedDirectories.push(line);
//     } else {
//         excludedFiles.push(line);
//     }
// }

// Function to copy a file
const copyFile = (src, dest) => {

    return new Promise((resolve, reject) => {
        fs.copyFile(src, dest, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

// Function to ensure destination directory exists
const ensureDirectoryExists = (dir) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

// Function to copy all files from source to destination (including subdirectories)
const copyAllFiles = async (srcDir, destDir) => {
    // Ensure the destination directory exists
    await ensureDirectoryExists(destDir);

    const items = await fs.promises.readdir(srcDir, { withFileTypes: true });

    for (const item of items) {
        const srcPath = path.join(srcDir, item.name);
        const destPath = path.join(destDir, item.name);

        if (item.isDirectory()) {
            if (excludedDirectories.includes(item.name)) {
                console.log(`Skipping directory: ${srcPath}`);
                continue;
            }
            // Recursively copy contents of the directory
            await copyAllFiles(srcPath, destPath).then(() => fs.chmodSync(destPath, 0o777))
            // modify the files to be accessible by the web server

        } else if (item.isFile()) {
            if (excludedFiles.includes(item.name)) {
                console.log(`Skipping file: ${srcPath}`);
                continue;
            }
            // Copy the file
            console.log(`Copying file: ${srcPath} -> ${destPath}`);
            await copyFile(srcPath, destPath).then(() => fs.chmodSync(destPath, 0o777))
            // modify each file to be accessible by the web server

        }
    }
};




// Start copying process
copyAllFiles(sourceDir, destDir)
    .then(() => console.log('\x1b[32mAll files copied successfully.\x1b[0m'))
    .catch((err) => console.error(`Error copying files: ${err}`));