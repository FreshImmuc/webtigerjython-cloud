const copy = require('copy');
const fs = require('fs');
const path = require('path');

console.log('');
console.log('---------------------------------------');
console.log('copy the files to the correct directory');
console.log('---------------------------------------');

if (fs.existsSync('web/assets/')) {
    fs.rmSync('web/assets/', {
        recursive: true
    });
}
fs.mkdirSync('web/assets');

copy('resources/wtj/**', 'web/assets/wtj', function(err, file) {
    // exposes the vinyl `file` created when the file is copied
    if(err) {
        console.log(err);
    }
});

copy('resources/images/*', 'web/assets/images', function(err, file) {
    // exposes the vinyl `file` created when the file is copied
    if(err) {
        console.log(err);
    }
});

fs.mkdirSync('web/assets/js');
fs.copyFileSync('resources/js/diff-match-patch.js', 'web/assets/js/diff-match-patch.js');

if (fs.existsSync('resources/js/tomorrow-night-eighties.js')) {
    fs.mkdirSync('web/assets/wtj/javascripts/ace', { recursive: true });
    fs.copyFileSync('resources/js/tomorrow-night-eighties.js', 'web/assets/wtj/javascripts/ace/theme-tomorrow_night_eighties.js');
} else {
    console.error('Source file does not exist: resources/js/tomorrow-night-eighties.js');
}