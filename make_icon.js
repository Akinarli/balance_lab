const fs = require('fs');
// Very simple 1x1 base64 transparent PNG, will serve as a placeholder to avoid 404s until the user provides a real icon.
const base64Data = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
fs.writeFileSync('icon.png', Buffer.from(base64Data, 'base64'));
console.log('Dummy icon created.');
