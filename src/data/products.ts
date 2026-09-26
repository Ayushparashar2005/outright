export interface Product {
  id: string;
  name: string;
  model: string;
  price: number;
  currency: string;
  color: string;
  colorHex: string;
  material: string;
  origin: string;
  release: string;
  category: 'RUNNING' | 'LIFESTYLE' | 'APPAREL' | 'ACCESSORIES';
  sizes: number[];
  status: 'AVAILABLE' | 'OUT OF STOCK' | 'LIMITED';
  image: string;
  model3d?: string;
  position: [number, number, number];
  rotation: [number, number, number];
  sku: string;
  productUrl: string;
  rarity?: number;
  culturalTags?: string[];
  lore?: string;
  timeline?: { year: string; event: string; }[];
  relatedObjects?: string[];
}

export const products: Product[] = [
  {
    "id": "000",
    "name": "Nike",
    "model": "Nike Dunk Low 'Black White'",
    "price": 69,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#434344",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-000.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0000",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-black-white-dd1391-100"
  },
  {
    "id": "001",
    "name": "Nike",
    "model": "Travis Scott x Playstation x Nike Dunk Low",
    "price": 0,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#5b5451",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "OUT OF STOCK",
    "image": "/assets/shoes/shoe-001.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0001",
    "productUrl": "https://www.goat.com/sneakers/travis-scott-x-playstation-x-dunk-low-travis-ps-dunk"
  },
  {
    "id": "002",
    "name": "Nike",
    "model": "The Powerpuff Girls x Nike Dunk Low Pro SB QS PS 'Bubbles'",
    "price": 179,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#d3b61b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-002.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0002",
    "productUrl": "https://www.goat.com/sneakers/the-powerpuff-girls-x-dunk-low-pro-sb-qs-ps-bubbles-fz8833-400"
  },
  {
    "id": "003",
    "name": "Nike",
    "model": "Concepts x Nike Dunk Low SB 'Orange Lobster'",
    "price": 307,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#ec6f3f",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-003.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0003",
    "productUrl": "https://www.goat.com/sneakers/concepts-x-dunk-low-sb-orange-lobster-bv1310-orange"
  },
  {
    "id": "004",
    "name": "Nike",
    "model": "Undefeated x Nike Dunk Low 'Dunk vs AF1'",
    "price": 199,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#2f3c5e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-004.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0004",
    "productUrl": "https://www.goat.com/sneakers/undefeated-x-dunk-low-dunk-vs-af1-do9329-001"
  },
  {
    "id": "005",
    "name": "Nike",
    "model": "Nike Dunk Low 'Grey Fog'",
    "price": 99,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bcbcbc",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-005.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0005",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-grey-fog-dd1391-103"
  },
  {
    "id": "006",
    "name": "Nike",
    "model": "Nike Dunk Low LTD 'Wizard'",
    "price": 82,
    "currency": "USD",
    "color": "PURPLE",
    "colorHex": "#372946",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-006.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0006",
    "productUrl": "https://www.goat.com/sneakers/nike-dunk-low-ltd-wizard-ib2267-001"
  },
  {
    "id": "007",
    "name": "Nike",
    "model": "Stranger Things x Nike Dunk Low 'Phantom'",
    "price": 243,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#c4a484",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-007.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0007",
    "productUrl": "https://www.goat.com/sneakers/stranger-things-x-dunk-low-phantom-ih6766-001"
  },
  {
    "id": "008",
    "name": "Nike",
    "model": "Nike Dunk Low SE 'Triple Black'",
    "price": 116,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#707579",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-008.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0008",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-se-triple-black-ib6651-001"
  },
  {
    "id": "009",
    "name": "Nike",
    "model": "Ben & Jerry's x Nike Dunk Low SB 'Chunky Dunky'",
    "price": 1188,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#fbb807",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-009.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0009",
    "productUrl": "https://www.goat.com/sneakers/ben-jerry-s-x-dunk-low-sb-chunky-dunky-cu3244-100"
  },
  {
    "id": "010",
    "name": "Nike",
    "model": "Cactus Plant Flea Market x Nike Dunk Low 'Swamp Sponge Pack - Psychic Purple'",
    "price": 227,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#f4a105",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-010.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0010",
    "productUrl": "https://www.goat.com/sneakers/cactus-plant-flea-market-x-dunk-low-swamp-sponge-pack-psychic-purple-ih5094-500"
  },
  {
    "id": "011",
    "name": "Nike",
    "model": "Nike Dunk Low 'Frankenstein'",
    "price": 109,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#5b4f30",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-011.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0011",
    "productUrl": "https://www.goat.com/sneakers/nike-dunk-low-frankenstein-hv4452-300"
  },
  {
    "id": "012",
    "name": "Nike",
    "model": "Nike Dunk Low Pro SB 'Freddy Krueger'",
    "price": 25059,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#dcccae",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-012.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0012",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-pro-sb-freddy-krueger-313170-202"
  },
  {
    "id": "013",
    "name": "Nike",
    "model": "League of Legends x Nike Dunk Low",
    "price": 159,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#acb8af",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-013.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0013",
    "productUrl": "https://www.goat.com/sneakers/league-of-legends-x-dunk-low-black-do2327-011"
  },
  {
    "id": "014",
    "name": "Nike",
    "model": "Nike Dunk Low Premium 'Setsubun'",
    "price": 98,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#9c8566",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-014.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0014",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-premium-setsubun-dq5009-268"
  },
  {
    "id": "015",
    "name": "Nike",
    "model": "Futura Laboratories x Nike Dunk Low SB 'Bleached Aqua'",
    "price": 269,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bcbcc3",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-015.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0015",
    "productUrl": "https://www.goat.com/sneakers/futura-laboratories-x-dunk-low-sb-bleached-aqua-hf6061-400"
  },
  {
    "id": "016",
    "name": "Nike",
    "model": "Nike Dunk Low 'Athletic Department - Deep Jungle'",
    "price": 66,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#384243",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-016.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0016",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-athletic-department-deep-jungle-fq8080-133"
  },
  {
    "id": "017",
    "name": "Nike",
    "model": "Nike Dunk Low 'Midnight Navy Smoke Grey'",
    "price": 103,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#31405e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-017.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0017",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-midnight-navy-smoke-grey-fd9749-400"
  },
  {
    "id": "018",
    "name": "Nike",
    "model": "Nike Dunk Low GS 'Year of the Dragon'",
    "price": 99,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#c93d3b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-018.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0018",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-gs-year-of-the-dragon-fz5528-101"
  },
  {
    "id": "019",
    "name": "Nike",
    "model": "Nike Dunk Low 'Silver Surfer' 2024",
    "price": 39,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#808388",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-019.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0019",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-silver-surfer-2024-hf0391-001"
  },
  {
    "id": "020",
    "name": "Nike",
    "model": "Nike Dunk Low 'Year of the Snake'",
    "price": 143,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#797d6e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-020.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0020",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-year-of-the-snake-hv5980-231"
  },
  {
    "id": "021",
    "name": "Nike",
    "model": "Nike Dunk Low 'Reverse Panda'",
    "price": 109,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#8a8888",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-021.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0021",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-reverse-panda-dj6188-101"
  },
  {
    "id": "022",
    "name": "Nike",
    "model": "Off-White x Nike Rubber Dunk TD 'Green Strike'",
    "price": 145,
    "currency": "USD",
    "color": "GREEN",
    "colorHex": "#7ae27e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-022.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0022",
    "productUrl": "https://www.goat.com/sneakers/off-white-x-rubber-dunk-td-green-strike-ow-dunk-td-grn"
  },
  {
    "id": "023",
    "name": "Nike",
    "model": "Nike Dunk Low Next Nature 'Baroque Brown'",
    "price": 138,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#d4ccbb",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-023.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0023",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-next-nature-cacao-wow-hf4292-200"
  },
  {
    "id": "024",
    "name": "Nike",
    "model": "The Powerpuff Girls x Nike Dunk Low Pro SB QS 'Buttercup'",
    "price": 274,
    "currency": "USD",
    "color": "GREEN",
    "colorHex": "#6fa94b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-024.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0024",
    "productUrl": "https://www.goat.com/sneakers/the-powerpuff-girls-x-dunk-low-pro-sb-qs-buttercup-fz8319-300"
  },
  {
    "id": "025",
    "name": "Nike",
    "model": "Nike Dunk Low ‘What the Duck - University of Oregon Alternate’ PE",
    "price": 300,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#3a3c42",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-025.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0025",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-what-the-phk-university-of-oregon-pe-hv1470-001"
  },
  {
    "id": "026",
    "name": "Nike",
    "model": "Cactus Plant Flea Market x Nike Dunk Low 'Swamp Sponge Pack - Photo Blue'",
    "price": 249,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#0472be",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-026.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0026",
    "productUrl": "https://www.goat.com/sneakers/cactus-plant-flea-market-x-dunk-low-swamp-sponge-pack-photo-blue-ih5094-400"
  },
  {
    "id": "027",
    "name": "Nike",
    "model": "Verdy x Nike Dunk Low SB 'Visty'",
    "price": 239,
    "currency": "USD",
    "color": "GREEN",
    "colorHex": "#bad1c5",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-027.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0027",
    "productUrl": "https://www.goat.com/sneakers/verdy-x-dunk-low-sb-visty-fn6040-400"
  },
  {
    "id": "028",
    "name": "Nike",
    "model": "Nike Dunk Low 'Kentucky' 2025",
    "price": 105,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#043182",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-028.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0028",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-kentucky-2025-hf5441-112"
  },
  {
    "id": "029",
    "name": "Nike",
    "model": "Union LA x Nike Dunk Low 'Passport Pack - Argon'",
    "price": 165,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#6e829a",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-029.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0029",
    "productUrl": "https://www.goat.com/sneakers/union-la-x-dunk-low-dj9649-400"
  },
  {
    "id": "030",
    "name": "Nike",
    "model": "Nike Dunk Low 'Valerian Blue'",
    "price": 79,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#2c3d4c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-030.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0030",
    "productUrl": "https://www.goat.com/sneakers/dunk-low-usa-dd1391-400"
  },
  {
    "id": "031",
    "name": "Nike",
    "model": "Nike Wmns Dunk Low 'Cacao Wow'",
    "price": 86,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#d4d4bc",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-031.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0031",
    "productUrl": "https://www.goat.com/sneakers/wmns-dunk-low-cacao-wow-dd1503-124"
  },
  {
    "id": "032",
    "name": "Nike",
    "model": "Limosine Skateboards x Nike Dunk Low SB 'Football'",
    "price": 87,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#371718",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-032.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0032",
    "productUrl": "https://www.goat.com/sneakers/limosine-skateboards-x-dunk-low-sb-basketball-leather-hj4131-200"
  },
  {
    "id": "033",
    "name": "Nike",
    "model": "Supreme x Nike Dunk Low SB 'Ocean Fog'",
    "price": 316,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#3c4c58",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-033.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0033",
    "productUrl": "https://www.goat.com/sneakers/supreme-x-dunk-low-sb-ocean-fog-hq8487-400"
  },
  {
    "id": "034",
    "name": "Nike",
    "model": "Nike Dunk Low SB 'Sandy Bodecker'",
    "price": 142,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#e6b211",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-034.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0034",
    "productUrl": "https://www.goat.com/sneakers/ebay-x-dunk-low-sb-sandy-bodecker-fd8777-100"
  },
  {
    "id": "035",
    "name": "Nike",
    "model": "Jarritos x Nike Dunk Low SB",
    "price": 404,
    "currency": "USD",
    "color": "TEAL",
    "colorHex": "#1f735d",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-035.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0035",
    "productUrl": "https://www.goat.com/sneakers/jarritos-x-dunk-low-sb-fd0860-001"
  },
  {
    "id": "036",
    "name": "Nike",
    "model": "Undefeated x Air Jordan 4 Retro 2025",
    "price": 262,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#838367",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-036.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0036",
    "productUrl": "https://www.goat.com/sneakers/undefeated-x-air-jordan-4-retro-ib1519-200"
  },
  {
    "id": "037",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Rare Air - White Lettering'",
    "price": 193,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#19346f",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-037.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0037",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-rare-air-fv5029-003"
  },
  {
    "id": "038",
    "name": "Nike",
    "model": "Wmns Air Jordan 4 Retro TEX 'Worn Blue Denim'",
    "price": 153,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#315472",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-038.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0038",
    "productUrl": "https://www.goat.com/sneakers/wmns-air-jordan-4-retro-tex-worn-blue-denim-ib6716-100"
  },
  {
    "id": "039",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Black Cat' 2025",
    "price": 277,
    "currency": "USD",
    "color": "BLACK",
    "colorHex": "#0c040b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-039.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0039",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-black-cat-2025-fv5029-010"
  },
  {
    "id": "040",
    "name": "Nike",
    "model": "Air Jordan 4 Retro OG 'White Cement' 2025",
    "price": 232,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#8a898b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-040.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0040",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-og-white-cement-2025-fv5029-100"
  },
  {
    "id": "041",
    "name": "Nike",
    "model": "Nike SB x Air Jordan 4 Retro SP 'Navy'",
    "price": 166,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#e3a97b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-041.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0041",
    "productUrl": "https://www.goat.com/sneakers/nike-sb-x-air-jordan-4-retro-sp-navy-dr5415-100"
  },
  {
    "id": "042",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Cave Stone'",
    "price": 179,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#4c443f",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-042.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0042",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-cave-stone-fq8138-200"
  },
  {
    "id": "043",
    "name": "Nike",
    "model": "Nigel Sylvester x Air Jordan 4 Retro OG SP 'Brick By Brick'",
    "price": 304,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#c53f3b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-043.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0043",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-og-sp-firewood-orange-hf4340-800"
  },
  {
    "id": "044",
    "name": "Nike",
    "model": "Jan 17",
    "price": 243,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#858483",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-044.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0044",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-flight-club-im4002-100"
  },
  {
    "id": "045",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'White Thunder'",
    "price": 294,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#414143",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-045.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0045",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-white-thunder-fq8138-001"
  },
  {
    "id": "046",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Bred Reimagined'",
    "price": 244,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#b4b3bb",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-046.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0046",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-bred-reimagined-fv5029-006"
  },
  {
    "id": "047",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Military Blue' 2024",
    "price": 214,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bcbebf",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-047.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0047",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-military-blue-2024-fv5029-141"
  },
  {
    "id": "048",
    "name": "Nike",
    "model": "Air Jordan 4 Retro GS 'Black Cat' 2025",
    "price": 158,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#444c4d",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-048.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0048",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-jordan-4-retro-gs-black-cat-2025-ib4171-010"
  },
  {
    "id": "049",
    "name": "Nike",
    "model": "A Ma Maniére x Air Jordan 4 Retro 'Dark Mocha'",
    "price": 269,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#4c392f",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-049.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0049",
    "productUrl": "https://www.goat.com/sneakers/a-ma-maniere-x-air-jordan-4-retro-dark-mocha-if3102-200"
  },
  {
    "id": "050",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Red Thunder'",
    "price": 401,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#e2262a",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-050.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0050",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-red-thunder-ct8527-016"
  },
  {
    "id": "051",
    "name": "Nike",
    "model": "Nike SB x Air Jordan 4 Retro SP 'Pine Green'",
    "price": 319,
    "currency": "USD",
    "color": "TEAL",
    "colorHex": "#07845c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-051.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0051",
    "productUrl": "https://www.goat.com/sneakers/nike-sb-x-air-jordan-4-retro-pine-green-dr5415-103"
  },
  {
    "id": "052",
    "name": "Nike",
    "model": "Air Jordan 4 Retro SE 'Wet Cement'",
    "price": 298,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#b2b3b7",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-052.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0052",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-se-smoke-grey-fq7928-001"
  },
  {
    "id": "053",
    "name": "Nike",
    "model": "Air Jordan 4 Retro OG 'Bred' 2019",
    "price": 389,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#a95c60",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-053.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0053",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-bred-2019-308497-060"
  },
  {
    "id": "054",
    "name": "Nike",
    "model": "A Ma Maniére x Wmns Air Jordan 4 Retro 'While You Were Sleeping'",
    "price": 155,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#cdb9ac",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-054.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0054",
    "productUrl": "https://www.goat.com/sneakers/a-ma-maniere-x-wmns-air-jordan-4-retro-fossil-stone-fz4810-200"
  },
  {
    "id": "055",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Fear' 2024",
    "price": 226,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#7b7a7a",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-055.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0055",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-fear-2024-fq8138-002"
  },
  {
    "id": "056",
    "name": "Nike",
    "model": "Air Jordan 4 Retro OG 'Fire Red' 2020",
    "price": 311,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#b91817",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-056.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0056",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-og-fire-red-2020-dc7770-160"
  },
  {
    "id": "057",
    "name": "Nike",
    "model": "Wmns Air Jordan 4 Retro 'Orchid'",
    "price": 307,
    "currency": "USD",
    "color": "PINK",
    "colorHex": "#cca5bc",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-057.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0057",
    "productUrl": "https://www.goat.com/sneakers/wmns-air-jordan-4-retro-orchid-aq9129-501"
  },
  {
    "id": "058",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Thunder' 2023",
    "price": 291,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#494233",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-058.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0058",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-thunder-2023-dh6927-017"
  },
  {
    "id": "059",
    "name": "Nike",
    "model": "Air Jordan 4 Retro SE 'Black Canvas'",
    "price": 333,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bdc1c4",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-059.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0059",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-black-canvas-dh7138-006"
  },
  {
    "id": "060",
    "name": "Nike",
    "model": "Off-White x Wmns Air Jordan 4 Retro SP 'Sail'",
    "price": 743,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#ccc4b4",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-060.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0060",
    "productUrl": "https://www.goat.com/sneakers/off-white-x-wmns-air-jordan-4-sp-sail-cv9388-100"
  },
  {
    "id": "061",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Toro Bravo' 2026",
    "price": 0,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#a41d2b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "OUT OF STOCK",
    "image": "/assets/shoes/shoe-061.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0061",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-toro-bravo-2026-fq8138-600"
  },
  {
    "id": "062",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'University Blue'",
    "price": 390,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#557fa9",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-062.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0062",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-university-blue-ct8527-400"
  },
  {
    "id": "063",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Military Black'",
    "price": 335,
    "currency": "USD",
    "color": "BLACK",
    "colorHex": "#2e2c2c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-063.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0063",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-military-black-dh6927-111"
  },
  {
    "id": "064",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Lightning' 2021",
    "price": 250,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#e0b92e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-064.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0064",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-lightning-2021-ct8527-700"
  },
  {
    "id": "065",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Red Cement'",
    "price": 218,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#af2530",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-065.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0065",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-red-cement-dh6927-161"
  },
  {
    "id": "066",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Midnight Navy'",
    "price": 281,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#2e354c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-066.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0066",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-midnight-navy-dh6927-140"
  },
  {
    "id": "067",
    "name": "Nike",
    "model": "Air Jordan 4 Retro '25th Silver Anniversary'",
    "price": 135,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#c5c2ca",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-067.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0067",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-silver-anniversary-408202-101"
  },
  {
    "id": "068",
    "name": "Nike",
    "model": "A Ma Maniére x Air Jordan 4 Retro 'Violet Ore'",
    "price": 198,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#dbd1b3",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-068.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0068",
    "productUrl": "https://www.goat.com/sneakers/a-ma-maniere-x-air-jordan-4-retro-violet-ore-dv6773-220"
  },
  {
    "id": "069",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'White Oreo'",
    "price": 382,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#494948",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-069.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0069",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-oreo-ct8527-100"
  },
  {
    "id": "070",
    "name": "Nike",
    "model": "Air Jordan 4 Retro 'Taupe Haze'",
    "price": 352,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#83776e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-070.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0070",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-taupe-haze-db0732-200"
  },
  {
    "id": "071",
    "name": "Nike",
    "model": "Air Jordan 4 Retro OG GS 'White Cement' 2025",
    "price": 149,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#c8cccc",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-071.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0071",
    "productUrl": "https://www.goat.com/sneakers/air-jordan-4-retro-og-gs-white-cement-2025-ib4171-100"
  },
  {
    "id": "072",
    "name": "New Balance",
    "model": "New Balance 2002R 'Protection Pack - Rain Cloud'",
    "price": 118,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#c7baa4",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-072.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0072",
    "productUrl": "https://www.goat.com/sneakers/2002r-protection-pack-rain-cloud-m2002rda"
  },
  {
    "id": "073",
    "name": "New Balance",
    "model": "New Balance 2002R 'Protection Pack - Phantom'",
    "price": 138,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#434648",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-073.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0073",
    "productUrl": "https://www.goat.com/sneakers/2002r-protection-pack-phantom-m2002rdb"
  },
  {
    "id": "074",
    "name": "New Balance",
    "model": "New Balance 9060 'Black Cat'",
    "price": 165,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#343c44",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-074.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0074",
    "productUrl": "https://www.goat.com/sneakers/9060-black-grey-u9060zge"
  },
  {
    "id": "075",
    "name": "New Balance",
    "model": "New Balance 1906R 'Silver Metallic Black'",
    "price": 105,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#7b7978",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-075.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0075",
    "productUrl": "https://www.goat.com/sneakers/1906r-silver-metallic-black-m1906rer"
  },
  {
    "id": "076",
    "name": "New Balance",
    "model": "New Balance 740v2 'Black Silver Metallic'",
    "price": 99,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#3b3c44",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-076.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0076",
    "productUrl": "https://www.goat.com/sneakers/740-black-silver-u740bm2"
  },
  {
    "id": "077",
    "name": "New Balance",
    "model": "New Balance 9060 'Suede Pack - Sea Salt'",
    "price": 145,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#82807b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-077.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0077",
    "productUrl": "https://www.goat.com/sneakers/9060-white-grey-u9060hsc"
  },
  {
    "id": "078",
    "name": "New Balance",
    "model": "New Balance 1906R 'Silver Metallic Cream'",
    "price": 75,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#8a8983",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-078.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0078",
    "productUrl": "https://www.goat.com/sneakers/1906r-silver-metallic-cream-m1906ree"
  },
  {
    "id": "079",
    "name": "New Balance",
    "model": "New Balance 1906A 'Black'",
    "price": 184,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#424243",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-079.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0079",
    "productUrl": "https://www.goat.com/sneakers/1906-black-dark-silver-metallic-m1906af"
  },
  {
    "id": "080",
    "name": "New Balance",
    "model": "New Balance 850 'Grey'",
    "price": 99,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bdbaba",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-080.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0080",
    "productUrl": "https://www.goat.com/sneakers/850-grey-ml850cf"
  },
  {
    "id": "081",
    "name": "New Balance",
    "model": "New Balance 9060 'Triple Black Suede'",
    "price": 125,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#3e3f3f",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-081.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0081",
    "productUrl": "https://www.goat.com/sneakers/9060-triple-black-u9060bpm"
  },
  {
    "id": "082",
    "name": "New Balance",
    "model": "New Balance 530 'White Natural Indigo'",
    "price": 84,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#403e41",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-082.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0082",
    "productUrl": "https://www.goat.com/sneakers/mr530sg-white-mr530sg"
  },
  {
    "id": "083",
    "name": "New Balance",
    "model": "New Balance 1906R 'Metallic Silver Metallic Gold'",
    "price": 79,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bcbcbe",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-083.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0083",
    "productUrl": "https://www.goat.com/sneakers/1906r-white-gold-m1906ra"
  },
  {
    "id": "084",
    "name": "New Balance",
    "model": "New Balance 2002R 'Protection Pack - Sea Salt'",
    "price": 125,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#c2baa7",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-084.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0084",
    "productUrl": "https://www.goat.com/sneakers/2002r-protection-pack-sea-salt-m2002rdc"
  },
  {
    "id": "085",
    "name": "New Balance",
    "model": "New Balance 1906R 'Pink Taffy'",
    "price": 79,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#925e6a",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-085.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0085",
    "productUrl": "https://www.goat.com/sneakers/1906r-pink-taffy-u1906rcu"
  },
  {
    "id": "086",
    "name": "New Balance",
    "model": "New Balance 9060 'Black Castlerock'",
    "price": 118,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#434444",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-086.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0086",
    "productUrl": "https://www.goat.com/sneakers/9060-black-castlerock-u9060blk"
  },
  {
    "id": "087",
    "name": "New Balance",
    "model": "New Balance 1000 'Black Cat'",
    "price": 133,
    "currency": "USD",
    "color": "BLACK",
    "colorHex": "#04040c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-087.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0087",
    "productUrl": "https://www.goat.com/sneakers/1000-triple-black-m1000la"
  },
  {
    "id": "088",
    "name": "New Balance",
    "model": "New Balance 9060 'Arctic Grey'",
    "price": 157,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#747e91",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-088.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0088",
    "productUrl": "https://www.goat.com/sneakers/9060-washed-blue-u9060ib"
  },
  {
    "id": "089",
    "name": "New Balance",
    "model": "New Balance 1906R 'Silver Metallic Deep Ocean'",
    "price": 59,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#c1c7c8",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-089.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0089",
    "productUrl": "https://www.goat.com/sneakers/1906r-silver-metallic-deep-ocean-u1906rce"
  },
  {
    "id": "090",
    "name": "New Balance",
    "model": "New Balance BAPE x 2002R 'Apes Together Strong - Black Camo'",
    "price": 431,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#7d7c74",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-090.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0090",
    "productUrl": "https://www.goat.com/sneakers/bape-x-2002r-apes-together-strong-camo-m2002r-bape-camo"
  },
  {
    "id": "091",
    "name": "New Balance",
    "model": "New Balance 2002R 'Black Cat'",
    "price": 134,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#414141",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-091.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0091",
    "productUrl": "https://www.goat.com/sneakers/2002r-triple-black-suede-u2002rbl"
  },
  {
    "id": "092",
    "name": "New Balance",
    "model": "New Balance 1906L 'Silver Shadow Grey'",
    "price": 136,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#868280",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-092.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0092",
    "productUrl": "https://www.goat.com/sneakers/1906l-silver-shadow-grey-u1906lae"
  },
  {
    "id": "093",
    "name": "New Balance",
    "model": "New Balance 1906D 'Protection Pack - Triple Black'",
    "price": 119,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#3c3c3c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-093.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0093",
    "productUrl": "https://www.goat.com/sneakers/1906d-protection-pack-triple-black-m1906df"
  },
  {
    "id": "094",
    "name": "New Balance",
    "model": "New Balance 1000 'Mallard Green Sea Salt'",
    "price": 133,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#7c8e7c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-094.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0094",
    "productUrl": "https://www.goat.com/sneakers/1000-green-grey-m1000ma"
  },
  {
    "id": "095",
    "name": "New Balance",
    "model": "New Balance 550 'White Timberwolf'",
    "price": 73,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#ccbda2",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-095.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0095",
    "productUrl": "https://www.goat.com/sneakers/550-white-timberwolf-bb550pwg"
  },
  {
    "id": "096",
    "name": "New Balance",
    "model": "New Balance 2002R 'Protection Pack - Lunar New Year'",
    "price": 176,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#888382",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-096.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0096",
    "productUrl": "https://www.goat.com/sneakers/2002r-protection-pack-lunar-new-year-m2002rdy"
  },
  {
    "id": "097",
    "name": "New Balance",
    "model": "New Balance 2002R 'Black Gunmetal'",
    "price": 109,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#434040",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-097.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0097",
    "productUrl": "https://www.goat.com/sneakers/2002r-black-gunmetal-m2002rbk"
  },
  {
    "id": "098",
    "name": "New Balance",
    "model": "New Balance 530 'Raincloud'",
    "price": 95,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bbbcba",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-098.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0098",
    "productUrl": "https://www.goat.com/sneakers/530-raincloud-mr530ck"
  },
  {
    "id": "099",
    "name": "New Balance",
    "model": "New Balance 1906A 'Black Dragon Berry'",
    "price": 133,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#493c43",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-099.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0099",
    "productUrl": "https://www.goat.com/sneakers/1906a-black-pink-u1906ad"
  },
  {
    "id": "100",
    "name": "New Balance",
    "model": "New Balance 2002R 'Protection Pack - Eclipse'",
    "price": 99,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#8f8c84",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-100.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0100",
    "productUrl": "https://www.goat.com/sneakers/2002r-protection-pack-eclipse-m2002rdo"
  },
  {
    "id": "101",
    "name": "New Balance",
    "model": "New Balance 1906A 'Silver Gold Metallic'",
    "price": 149,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#cdc2b1",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-101.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0101",
    "productUrl": "https://www.goat.com/sneakers/1906-silver-gold-metallic-m1906ad"
  },
  {
    "id": "102",
    "name": "New Balance",
    "model": "New Balance 1906D 'Protection Pack - White Turtledove'",
    "price": 183,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#c7c4b4",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-102.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0102",
    "productUrl": "https://www.goat.com/sneakers/1906d-protection-pack-triple-white-m1906de"
  },
  {
    "id": "103",
    "name": "New Balance",
    "model": "New Balance 2002R 'Protection Pack - Brown' size? Exclusive",
    "price": 207,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#957b6a",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-103.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0103",
    "productUrl": "https://www.goat.com/sneakers/2002r-protection-pack-brown-size-exclusive-m2002rd6"
  },
  {
    "id": "104",
    "name": "New Balance",
    "model": "New Balance 9060 'Quartz Grey'",
    "price": 139,
    "currency": "USD",
    "color": "YELLOW",
    "colorHex": "#dcd7c6",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-104.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0104",
    "productUrl": "https://www.goat.com/sneakers/9060-quartz-grey-u9060hsa"
  },
  {
    "id": "105",
    "name": "New Balance",
    "model": "New Balance 1906R 'Black Silver'",
    "price": 173,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#3c4142",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-105.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0105",
    "productUrl": "https://www.goat.com/sneakers/1906r-primaloft-black-silver-u1906ros"
  },
  {
    "id": "106",
    "name": "New Balance",
    "model": "New Balance 740v2 'White Navy Shadow Grey'",
    "price": 102,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#c1c1c1",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-106.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0106",
    "productUrl": "https://www.goat.com/sneakers/740v2-navy-white-shadow-grey-u740wn2"
  },
  {
    "id": "107",
    "name": "New Balance",
    "model": "New Balance 9060 'Pink Overdye' ASOS Exclusive",
    "price": 197,
    "currency": "USD",
    "color": "PINK",
    "colorHex": "#d19eb3",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-107.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0107",
    "productUrl": "https://www.goat.com/sneakers/9060-pink-overdye-asos-exclusive-u9060app"
  },
  {
    "id": "108",
    "name": "New Balance",
    "model": "New Balance 990v4 Made in USA 'Grey Silver'",
    "price": 123,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#807f80",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-108.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0108",
    "productUrl": "https://www.goat.com/sneakers/990v4-made-in-usa-grey-silver-u990gr4"
  },
  {
    "id": "109",
    "name": "New Balance",
    "model": "New Balance 990v6 Made in USA 'Castlerock'",
    "price": 137,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#bcbcbd",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-109.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0109",
    "productUrl": "https://www.goat.com/sneakers/990v6-made-in-usa-castlerock-m990gl6"
  },
  {
    "id": "110",
    "name": "New Balance",
    "model": "New Balance 990v3 Made in USA 'Grey'",
    "price": 208,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#828485",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-110.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0110",
    "productUrl": "https://www.goat.com/sneakers/990v3-made-in-usa-grey-m990gy3"
  },
  {
    "id": "111",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v4 Made in USA 'Arctic Grey Black'",
    "price": 179,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#738290",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-111.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0111",
    "productUrl": "https://www.goat.com/sneakers/990v4-made-in-usa-arctic-grey-black-u990bb4"
  },
  {
    "id": "112",
    "name": "New Balance",
    "model": "New Balance 990v3 Made In USA 'Black'",
    "price": 159,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#444343",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-112.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0112",
    "productUrl": "https://www.goat.com/sneakers/990v3-made-in-usa-black-m990bs3"
  },
  {
    "id": "113",
    "name": "New Balance",
    "model": "Bodega x New Balance 990v3 Made In USA 'Anniversary'",
    "price": 175,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#cbc5bd",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-113.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0113",
    "productUrl": "https://www.goat.com/sneakers/bodega-x-990v3-made-in-usa-15th-anniversary-bodega-990v3"
  },
  {
    "id": "114",
    "name": "New Balance",
    "model": "Action Bronson x New Balance 990v6 Made in USA 'Amazõnia'",
    "price": 175,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#bcb4a5",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-114.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0114",
    "productUrl": "https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-amazonia-00011-10000abx9mi"
  },
  {
    "id": "115",
    "name": "New Balance",
    "model": "Action Bronson x New Balance 990v6 Made in USA 'Lapis Lazuli'",
    "price": 173,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#687eb2",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-115.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0115",
    "productUrl": "https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-lapis-lazuli-m990ac6"
  },
  {
    "id": "116",
    "name": "New Balance",
    "model": "New Balance 990v4 Made In USA 'Red Label - Grey'",
    "price": 268,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#b6b8bc",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-116.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0116",
    "productUrl": "https://www.goat.com/sneakers/990v4-made-in-usa-red-label-grey-m990vs4"
  },
  {
    "id": "117",
    "name": "New Balance",
    "model": "New Balance 990v4 Made in USA 'Black Silver' 2023",
    "price": 154,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#474646",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-117.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0117",
    "productUrl": "https://www.goat.com/sneakers/990v4-made-in-usa-black-silver-2023-u990bl4"
  },
  {
    "id": "118",
    "name": "New Balance",
    "model": "Action Bronson x New Balance 990v6 Made in USA 'Untitled'",
    "price": 229,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#d4c49e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-118.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0118",
    "productUrl": "https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-multi-color-u990at6"
  },
  {
    "id": "119",
    "name": "New Balance",
    "model": "New Balance Teddy Santis x 990v4 Made in USA 'Grey Black'",
    "price": 132,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#7f7c7a",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-119.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0119",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v4-made-in-usa-grey-cream-u990tg4"
  },
  {
    "id": "120",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v3 Made in USA 'Tan Orange'",
    "price": 166,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#9f855e",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-120.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0120",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v3-made-in-usa-khaki-orange-m990bt3"
  },
  {
    "id": "121",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v4 Made in USA 'Plum Purple'",
    "price": 147,
    "currency": "USD",
    "color": "PURPLE",
    "colorHex": "#3c2c5c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-121.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0121",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v4-made-in-usa-purple-suede-u990tb4"
  },
  {
    "id": "122",
    "name": "New Balance",
    "model": "New Balance 990v6 Made in USA 'Workwear'",
    "price": 69,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#b98651",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-122.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0122",
    "productUrl": "https://www.goat.com/sneakers/990v6-made-in-usa-workwear-grey-u990tn6"
  },
  {
    "id": "123",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v3 Made in USA 'Green Gold'",
    "price": 183,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#cfc4a4",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-123.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0123",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v3-made-in-usa-green-yellow-m990gg3"
  },
  {
    "id": "124",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v6 Made in USA 'Reflection Marblehead'",
    "price": 149,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#787573",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-124.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0124",
    "productUrl": "https://www.goat.com/sneakers/990v6-made-in-usa-reflection-marblehead-u990nc6"
  },
  {
    "id": "125",
    "name": "New Balance",
    "model": "Action Bronson x New Balance 990v6 Made in USA 'Baklava'",
    "price": 215,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#d0b587",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-125.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0125",
    "productUrl": "https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-baklava-m990ab6"
  },
  {
    "id": "126",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v6 Made in USA 'Paris'",
    "price": 723,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#544639",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-126.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0126",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v6-made-in-usa-paris-u990pa6"
  },
  {
    "id": "127",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v6 Made in USA 'Community Pack - Red'",
    "price": 98,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#dd817f",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-127.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0127",
    "productUrl": "https://www.goat.com/sneakers/action-bronson-x-990v6-made-in-usa-community-red-u990rt6"
  },
  {
    "id": "128",
    "name": "New Balance",
    "model": "JJJJound x New Balance 990v3 Made in USA 'Olive'",
    "price": 308,
    "currency": "USD",
    "color": "GREEN",
    "colorHex": "#8c9370",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-128.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0128",
    "productUrl": "https://www.goat.com/sneakers/jjjjound-x-990v3-made-in-usa-olive-m990jd3"
  },
  {
    "id": "129",
    "name": "New Balance",
    "model": "New Balance 990v6 Made in USA 'Triple Black'",
    "price": 149,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#34343c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-129.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0129",
    "productUrl": "https://www.goat.com/sneakers/990v6-made-in-usa-triple-black-u990bb6"
  },
  {
    "id": "130",
    "name": "New Balance",
    "model": "JJJJound x New Balance 990v3 Made in USA 'Brown'",
    "price": 284,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#544430",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-130.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0130",
    "productUrl": "https://www.goat.com/sneakers/jjjjound-x-990v3-made-in-usa-brown-m990jj3"
  },
  {
    "id": "131",
    "name": "New Balance",
    "model": "New Balance 990v6 Made in USA 'Salmon'",
    "price": 77,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#f88984",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-131.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0131",
    "productUrl": "https://www.goat.com/sneakers/990v6-made-in-usa-salmon-u990sr6"
  },
  {
    "id": "132",
    "name": "New Balance",
    "model": "New Balance 990v3 Made In USA 'Navy'",
    "price": 139,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#767a79",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-132.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0132",
    "productUrl": "https://www.goat.com/sneakers/990-made-in-usa-navy-denim-m990nb3"
  },
  {
    "id": "133",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v6 Made in USA 'Light Mushroom Moonrock'",
    "price": 154,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#99826b",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-133.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0133",
    "productUrl": "https://www.goat.com/sneakers/990v6-made-in-usa-light-mushroom-moonrock-u990mm6"
  },
  {
    "id": "134",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v6 Made in USA 'Community Pack - Navy'",
    "price": 174,
    "currency": "USD",
    "color": "BLUE",
    "colorHex": "#5c6f88",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-134.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0134",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v6-made-in-usa-community-pack-vintage-indigo-u990lt6"
  },
  {
    "id": "135",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v3 Made in USA 'Raw Amethyst'",
    "price": 275,
    "currency": "USD",
    "color": "PURPLE",
    "colorHex": "#bcacc4",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-135.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0135",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v3-made-in-usa-raw-amethyst-m990td3"
  },
  {
    "id": "136",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v3 Made in USA 'Green Purple'",
    "price": 156,
    "currency": "USD",
    "color": "RED",
    "colorHex": "#5e4a44",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-136.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0136",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v3-made-in-usa-olive-burgundy-m990gp3"
  },
  {
    "id": "137",
    "name": "New Balance",
    "model": "New Balance Teddy Santis x 990v3 Made in USA 'Scarlet Marblehead'",
    "price": 234,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#7c7978",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-137.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0137",
    "productUrl": "https://www.goat.com/sneakers/990v3-made-in-usa-scarlet-marblehead-m990tf3"
  },
  {
    "id": "138",
    "name": "New Balance",
    "model": "New Balance 990v5 Made in USA 'Castlerock'",
    "price": 192,
    "currency": "USD",
    "color": "LIGHT GRAY",
    "colorHex": "#c0bfbe",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-138.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0138",
    "productUrl": "https://www.goat.com/sneakers/990v5-grey-m990gl5"
  },
  {
    "id": "139",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v3 Made in USA 'Black Tan'",
    "price": 135,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#524c3c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-139.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0139",
    "productUrl": "https://www.goat.com/sneakers/990v3-made-in-usa-black-tan-m990bb3"
  },
  {
    "id": "140",
    "name": "New Balance",
    "model": "Kith x New Balance 990v3 Made in USA 'Steel Blue'",
    "price": 239,
    "currency": "USD",
    "color": "DARK GRAY",
    "colorHex": "#443c3c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-140.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0140",
    "productUrl": "https://www.goat.com/sneakers/kith-x-990v3-made-in-usa-steel-blue-m990ks3"
  },
  {
    "id": "141",
    "name": "New Balance",
    "model": "New Balance 990v4 Made in USA 'Castlerock'",
    "price": 223,
    "currency": "USD",
    "color": "GRAY",
    "colorHex": "#808081",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-141.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0141",
    "productUrl": "https://www.goat.com/sneakers/990v4-made-in-usa-castlerock-m990gl4"
  },
  {
    "id": "142",
    "name": "New Balance",
    "model": "New Balance Aimé Leon Dore x 990v4 Made in USA 'True Camo'",
    "price": 233,
    "currency": "USD",
    "color": "ORANGE",
    "colorHex": "#50452c",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-142.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0142",
    "productUrl": "https://www.goat.com/sneakers/aime-leon-dore-x-990v4-made-in-usa-true-camo-u990ct4"
  },
  {
    "id": "143",
    "name": "New Balance",
    "model": "Teddy Santis x New Balance 990v6 Made in USA 'Community Pack - Mint'",
    "price": 118,
    "currency": "USD",
    "color": "TEAL",
    "colorHex": "#245254",
    "material": "LEATHER / MESH",
    "origin": "MADE IN USA",
    "release": "2026",
    "category": "LIFESTYLE",
    "sizes": [
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "status": "AVAILABLE",
    "image": "/assets/shoes/shoe-143.png",
    "position": [
      0,
      0,
      0
    ],
    "rotation": [
      0,
      0,
      0
    ],
    "sku": "SKU-0143",
    "productUrl": "https://www.goat.com/sneakers/teddy-santis-x-990v6-made-in-usa-clay-ash-u990gt6"
  }
];
