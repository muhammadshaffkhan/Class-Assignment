const fs = require('fs');
fs.writeFile('sample.txt', 'Hello, World!', (err) => {
  if (err) throw err;
  console.log('File created successfully.');
});
