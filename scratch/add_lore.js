const fs = require('fs');
const path = require('path');

const filePath = 'd:\\outright\\src\\data\\products.ts';
let content = fs.readFileSync(filePath, 'utf8');

// We will use a regex to match each product object in the array
// They start with { and have "id": "something"
// Let's just do a naive approach: find all occurrences of "productUrl": "..."
// and insert a lore property right after it, if the object doesn't already have lore or timeline.

const objectData = {
  "000": true,
  "003": true,
  "009": true,
  "012": true
};

let modified = content;
const regex = /"id":\s*"(\d+)",[\s\S]*?"productUrl":\s*"([^"]+)"\s*\n\s*\}/g;

modified = modified.replace(regex, (match, id, url) => {
  if (objectData[id]) {
    return match; // Already has lore in objectData.ts
  }
  
  if (match.includes('"lore":') || match.includes('"timeline":')) {
    return match;
  }

  // Insert lore right before the closing brace
  const defaultLore = `"An archival classic that remains essential to sneaker culture, representing the ongoing evolution of sportswear design and lifestyle aesthetic."`;
  
  return match.replace(/\n\s*\}$/, `,\n    "lore": ${defaultLore}\n  }`);
});

fs.writeFileSync(filePath, modified, 'utf8');
console.log('Done modifying products.ts');
