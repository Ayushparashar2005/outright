const fs = require('fs');

const content = fs.readFileSync('src/data/products.ts', 'utf-8');
const regex = /"id":\s*"(\d+)",[\s\S]*?"model":\s*"([^"]+)"/g;
let match;
let models = [];

while ((match = regex.exec(content)) !== null) {
  models.push({ id: match[1], model: match[2] });
}

fs.writeFileSync('scratch/models.json', JSON.stringify(models, null, 2));
console.log(`Extracted ${models.length} models.`);
