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
  ,
    "lore": "Created for the launch of the PS5, this ultra-rare promotional Dunk features Travis Scott's signature reverse Swoosh and PlayStation branding. Only five pairs were given away to the public via a raffle.",
    "culturalTags": ["GAMING","COLLABORATION","TRAVIS SCOTT","PROMO SAMPLE","ULTRA RARE"]
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
  ,
    "lore": "Celebrating the beloved Cartoon Network series, this Bubbles-themed SB Dunk features a textured yellow upper, blue accents, and lenticular eyes on the heel tab.",
    "culturalTags": ["SKATEBOARDING","CARTOON NETWORK","POP CULTURE","COLLABORATION","NIKE SB"]
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
  ,
    "lore": "Part of the 'Dunk vs AF1' pack, this collaboration with UNDEFEATED flips classic Air Force 1 colorways onto the Dunk silhouette, utilizing premium materials and faux snakeskin.",
    "culturalTags": ["LIFESTYLE","UNDEFEATED","COLLABORATION","HYBRID DESIGN"]
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
  ,
    "lore": "A clean and essential two-tone colorway. The 'Grey Fog' offers a more subtle, muted alternative to the ubiquitous Panda Dunk, becoming a massive staple in streetwear.",
    "culturalTags": ["LIFESTYLE","EVERYDAY STAPLE","MINIMALIST","GR"]
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
  ,
    "lore": "A nod to the Japanese exclusive Co.Jp releases, this 'Wizard' colorway brings back a retro aesthetic with rich textures and striking purple hues.",
    "culturalTags": ["LIFESTYLE","CO.JP INFLUENCE","RETRO","LIMITED"]
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
  ,
    "lore": "A spooky, retro-themed Dunk inspired by the Upside Down of Stranger Things. Features distressed materials and hidden details beneath the upper.",
    "culturalTags": ["LIFESTYLE","STRANGER THINGS","POP CULTURE","TV SHOW","DISTRESSED"]
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
  ,
    "lore": "A stealthy, all-black iteration of the classic Dunk Low. Constructed with mixed materials for durability and a monochromatic aesthetic.",
    "culturalTags": ["LIFESTYLE","TRIPLE BLACK","WORKWEAR","UTILITY"]
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
  ,
    "lore": "A bizarre, textured creation from Cynthia Lu's CPFM, featuring a Grinch-like shaggy upper and mismatched sole units.",
    "culturalTags": ["LIFESTYLE","CPFM","AVANT-GARDE","COLLABORATION"]
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
  ,
    "lore": "Released as part of a Halloween collection, this shoe features monster-inspired green hues, metallic silver Swooshes resembling neck bolts, and stitch details.",
    "culturalTags": ["LIFESTYLE","HALLOWEEN","HOLIDAY","THEMED"]
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
  ,
    "lore": "A gamer-focused release celebrating the League of Legends World Championship, featuring iridescent details and LPL branding.",
    "culturalTags": ["LIFESTYLE","ESPORTS","LEAGUE OF LEGENDS","GAMING","COLLABORATION"]
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
  ,
    "lore": "Inspired by the Japanese festival of Setsubun (bean-throwing festival), featuring cracked leather, demon motifs on the heel, and roasted bean colors.",
    "culturalTags": ["LIFESTYLE","JAPANESE CULTURE","FESTIVAL","PREMIUM"]
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
  ,
    "lore": "Legendary graffiti artist Futura brings his signature abstract art style to the SB Dunk, featuring custom artwork panels and translucent soles.",
    "culturalTags": ["SKATEBOARDING","FUTURA","STREET ART","GRAFFITI","COLLABORATION"]
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
  ,
    "lore": "Part of the vintage-inspired Athletic Department collection, featuring aged midsoles and collegiate deep green accents.",
    "culturalTags": ["LIFESTYLE","ATHLETIC DEPARTMENT","VINTAGE AESTHETIC","COLLEGIATE"]
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
  ,
    "lore": "A versatile lifestyle colorway blending dark navy overlays with smoke grey bases, perfect for everyday rotation.",
    "culturalTags": ["LIFESTYLE","EVERYDAY STAPLE","GR"]
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
  ,
    "lore": "A Lunar New Year special edition featuring dragon-scale textures and festive red accents to celebrate the zodiac year.",
    "culturalTags": ["LIFESTYLE","LUNAR NEW YEAR","ZODIAC","HOLIDAY"]
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
  ,
    "lore": "A retro of the classic 2004 release, bringing back the metallic silver mesh and blue Swoosh that made the original a cult classic.",
    "culturalTags": ["LIFESTYLE","2000s ARCHIVE","METALLIC","RETRO"]
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
  ,
    "lore": "Commemorating the Year of the Snake with faux snakeskin panels and premium earth-toned leather overlays.",
    "culturalTags": ["LIFESTYLE","LUNAR NEW YEAR","SNAKESKIN","PREMIUM"]
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
  ,
    "lore": "A flipped version of the ultra-popular Panda Dunk, using white on the overlays and black on the underlays for a fresh twist.",
    "culturalTags": ["LIFESTYLE","COLOR BLOCKING","EVERYDAY STAPLE","GR"]
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
  ,
    "lore": "Virgil Abloh's amalgamation of the P-6000 and the Dunk, featuring rubberized accents and a vibrant green strike outline.",
    "culturalTags": ["LIFESTYLE","VIRGIL ABLOH","OFF-WHITE","HYBRID DESIGN","DECONSTRUCTED"]
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
  ,
    "lore": "Part of Nike's Move to Zero initiative, this eco-friendly Dunk is made with at least 20% recycled materials by weight.",
    "culturalTags": ["LIFESTYLE","SUSTAINABILITY","MOVE TO ZERO","ECO-FRIENDLY"]
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
  ,
    "lore": "Representing the toughest Powerpuff Girl, this SB features a striking green and black colorway with Buttercup's intense glare on the heel.",
    "culturalTags": ["SKATEBOARDING","CARTOON NETWORK","POP CULTURE","COLLABORATION","NIKE SB"]
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
  ,
    "lore": "A highly exclusive Player Exclusive made for the Oregon Ducks, mashing up various eras of the university's uniform history.",
    "culturalTags": ["LIFESTYLE","OREGON DUCKS","PE","COLLEGIATE","ULTRA RARE"]
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
  ,
    "lore": "Another wild, mossy release from CPFM, featuring long-hair suede and mismatched details in a striking blue hue.",
    "culturalTags": ["LIFESTYLE","CPFM","AVANT-GARDE","COLLABORATION","EXPERIMENTAL"]
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
  ,
    "lore": "Designed by Girls Don't Cry founder Verdy, inspired by his colorful, fluffy monster character 'Visty', featuring pastel hues and faux fur.",
    "culturalTags": ["SKATEBOARDING","VERDY","STREETWEAR","JAPANESE DESIGNER","COLLABORATION"]
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
  ,
    "lore": "A re-release of the original 1985 'Be True to Your School' colorway honoring the University of Kentucky Wildcats.",
    "culturalTags": ["LIFESTYLE","BE TRUE TO YOUR SCHOOL","COLLEGIATE","OG COLORWAY","BASKETBALL ORIGINS"]
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
  ,
    "lore": "Inspired by early 2000s Japan-exclusive releases, this Union collaboration features a tear-away ripstop upper revealing premium leather underneath.",
    "culturalTags": ["LIFESTYLE","UNION LA","PASSPORT PACK","TEAR-AWAY","COLLABORATION"]
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
  ,
    "lore": "A clean, collegiate-style colorway featuring a deep Valerian Blue over a white base with subtle red accents on the branding.",
    "culturalTags": ["LIFESTYLE","COLLEGIATE","GR","TWO-TONE"]
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
  ,
    "lore": "One of the most popular women's exclusive colorways of the 2020s, featuring rich chocolate brown overlays that pair perfectly with neutral outfits.",
    "culturalTags": ["LIFESTYLE","WOMEN'S EXCLUSIVE","EARTH TONES","2020s TREND"]
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
  ,
    "lore": "A core skate shop collaboration with Limosine, utilizing rugged materials and subtle football-inspired textures.",
    "culturalTags": ["SKATEBOARDING","LIMOSINE","CORE SKATE","COLLABORATION"]
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
  ,
    "lore": "Continuing the long-standing partnership, this Supreme SB Dunk features premium materials and the iconic world famous branding.",
    "culturalTags": ["SKATEBOARDING","SUPREME","STREETWEAR","HYPE","COLLABORATION"]
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
  ,
    "lore": "A tribute to the late Sandy Bodecker, the godfather of Nike SB. This shoe recreates the legendary cut-up eBay Charity Dunk.",
    "culturalTags": ["SKATEBOARDING","TRIBUTE","SANDY BODECKER","EBAY DUNK","CHARITY"]
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
  ,
    "lore": "A playful crossover with the beloved Mexican soda brand, featuring tear-away canvas panels that reveal a bright orange suede underneath.",
    "culturalTags": ["SKATEBOARDING","JARRITOS","BEVERAGE","TEAR-AWAY","COLLABORATION"]
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
  ,
    "lore": "A rumored retro of the legendary 2005 UNDFTD Jordan 4, the first-ever exclusive sneaker collaboration for the Jordan Brand, originally limited to 72 pairs.",
    "culturalTags": ["BASKETBALL","UNDEFEATED","STREETWEAR","HOLY GRAIL","MILITARY INSPIRED"]
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
  ,
    "lore": "Features an unreleased 'Rare Air' sample design concept, highlighted by velcro tongue patches and distinct white lettering.",
    "culturalTags": ["BASKETBALL","RARE AIR","UNRELEASED CONCEPT","PROTOTYPE"]
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
  ,
    "lore": "A women's exclusive utilizing heavily washed and distressed denim materials across the iconic Jordan 4 upper.",
    "culturalTags": ["BASKETBALL","WOMEN'S EXCLUSIVE","DENIM","MATERIAL FOCUS"]
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
  ,
    "lore": "A highly anticipated re-release of the beloved all-black nubuck colorway, originally inspired by Michael Jordan's predatory nickname.",
    "culturalTags": ["BASKETBALL","BLACK CAT","MONOCHROMATIC","FAN FAVORITE"]
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
  ,
    "lore": "The return of a masterpiece. Worn by MJ during the 1989 season and famous for its appearance in Do the Right Thing, complete with Nike Air branding.",
    "culturalTags": ["BASKETBALL","OG COLORWAY","DO THE RIGHT THING","TINKER HATFIELD","POP CULTURE"]
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
  ,
    "lore": "Following the massive success of the Pine Green edition, this skate-ready Jordan 4 features a reshaped toe box and flexible plastic components.",
    "culturalTags": ["SKATEBOARDING","NIKE SB","CROSSOVER","TOOLING UPDATE"]
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
  ,
    "lore": "An earth-toned release that continues the trend of neutral, highly wearable Jordan 4 colorways.",
    "culturalTags": ["BASKETBALL","EARTH TONES","LIFESTYLE","GR"]
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
  ,
    "lore": "BMX star Nigel Sylvester's take on the Jordan 4, featuring heavily distressed details mimicking the scuffs from riding a bike.",
    "culturalTags": ["BASKETBALL","NIGEL SYLVESTER","BMX","DISTRESSED","COLLABORATION"]
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
  ,
    "lore": "A mystery entry in the archive, representing a highly guarded release date for an upcoming Jordan silhouette.",
    "culturalTags": ["BASKETBALL","MYSTERY RELEASE","UNANNOUNCED"]
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
  ,
    "lore": "Reversing the classic Thunder color block, this 2024 release swaps yellow for crisp white against a black nubuck upper.",
    "culturalTags": ["BASKETBALL","THUNDER SERIES","COLOR BLOCKING","GR"]
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
  ,
    "lore": "Replacing the traditional nubuck of the 1989 classic with premium tumbled leather, reimagining the shoe MJ wore for 'The Shot'.",
    "culturalTags": ["BASKETBALL","REIMAGINED SERIES","OG COLORWAY","MATERIAL SWAP","THE SHOT"]
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
  ,
    "lore": "The long-awaited return of the 1989 OG colorway, featuring the correct off-white upper and original Nike Air branding on the heel.",
    "culturalTags": ["BASKETBALL","OG COLORWAY","NIKE AIR","TINKER HATFIELD"]
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
  ,
    "lore": "The grade-school sizing of the stealthy all-black classic, ensuring the next generation can wear the 'Black Cat'.",
    "culturalTags": ["BASKETBALL","BLACK CAT","YOUTH","MONOCHROMATIC"]
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
  ,
    "lore": "James Whitner's boutique delivers another luxurious collaboration, featuring premium materials, quilted linings, and subtle storytelling.",
    "culturalTags": ["BASKETBALL","A MA MANIERE","LUXURY","STORYTELLING","COLLABORATION"]
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
  ,
    "lore": "A spin on the 2006 'Thunder' colorway, replacing the tour yellow accents with vibrant crimson red.",
    "culturalTags": ["BASKETBALL","THUNDER SERIES","COLOR BLOCKING","GR"]
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
  ,
    "lore": "A monumental 2023 release that retooled the Jordan 4 for skateboarding, instantly becoming one of the most celebrated sneakers of the decade.",
    "culturalTags": ["SKATEBOARDING","NIKE SB","SNEAKER OF THE YEAR","CROSSOVER","COLLABORATION"]
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
  ,
    "lore": "Inspired by the 2024 Paris Olympics, this tonal grey release mimics the cobblestone streets of the French capital.",
    "culturalTags": ["BASKETBALL","PARIS OLYMPICS","TONAL","SPECIAL EDITION"]
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
  ,
    "lore": "The definitive retro of the shoe Michael Jordan wore when he hit 'The Shot' over Craig Ehlo in the 1989 Playoffs.",
    "culturalTags": ["BASKETBALL","OG COLORWAY","THE SHOT","TINKER HATFIELD","NIKE AIR"]
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
  ,
    "lore": "Part of AMM's six-shoe anniversary collection, utilizing premium muted tones and luxurious interior details.",
    "culturalTags": ["BASKETBALL","A MA MANIERE","WOMEN'S EXCLUSIVE","ANNIVERSARY","LUXURY"]
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
  ,
    "lore": "A retro of the 2013 classic from the 'Fear Pack', inspired by MJ's quote: 'I am scared of what I won't become.'",
    "culturalTags": ["BASKETBALL","FEAR PACK","STORYTELLING","RETRO"]
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
  ,
    "lore": "A flawless recreation of the 1989 original, complete with Nike Air on the heel and the vibrant Fire Red accents.",
    "culturalTags": ["BASKETBALL","OG COLORWAY","CHICAGO","TINKER HATFIELD"]
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
  ,
    "lore": "A vibrant pink suede women's exclusive, featuring speckled grey wings that contrast beautifully with the bright upper.",
    "culturalTags": ["BASKETBALL","WOMEN'S EXCLUSIVE","VIBRANT","SUEDE"]
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
  ,
    "lore": "Bringing back the 2006 LS (Lifestyle) release, known for its striking black and yellow color-blocking.",
    "culturalTags": ["BASKETBALL","THUNDER SERIES","LIFESTYLE","RETRO"]
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
  ,
    "lore": "Swapping traditional nubuck for a durable canvas upper, offering a rugged, workwear-inspired take on the silhouette.",
    "culturalTags": ["BASKETBALL","CANVAS","WORKWEAR","MATERIAL FOCUS"]
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
  ,
    "lore": "Virgil Abloh's deconstructed masterpiece. Originally debuted at his 'Figures of Speech' exhibit, it became one of the most coveted women's sneakers ever.",
    "culturalTags": ["BASKETBALL","VIRGIL ABLOH","OFF-WHITE","WOMEN'S EXCLUSIVE","DECONSTRUCTED"]
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
  ,
    "lore": "A return of the bold 2013 colorway, featuring a vibrant red suede upper that completely flips the script on Chicago colors.",
    "culturalTags": ["BASKETBALL","TORO BRAVO","SUEDE","VIBRANT","RETRO"]
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
  ,
    "lore": "Paying homage to Michael Jordan's UNC days, this release utilizes premium blue suede and classic cement speckling.",
    "culturalTags": ["BASKETBALL","UNC","COLLEGIATE","MICHAEL JORDAN","SUEDE"]
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
  ,
    "lore": "A massive mainstream hit from 2022. It uses the exact color-blocking of the OG Military Blue but replaces the blue with black.",
    "culturalTags": ["BASKETBALL","COLOR BLOCKING","LIFESTYLE","MAINSTREAM HIT"]
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
  ,
    "lore": "The first-ever retro of the legendary 2006 online-exclusive, featuring a bright Tour Yellow nubuck upper.",
    "culturalTags": ["BASKETBALL","LIGHTNING","ONLINE EXCLUSIVE","RETRO"]
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
  ,
    "lore": "A clever twist on the OG White Cement, replacing the grey speckled areas with a vibrant fire red.",
    "culturalTags": ["BASKETBALL","COLOR BLOCKING","CEMENT MASHUP","GR"]
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
  ,
    "lore": "Utilizing the classic 'White Cement' color blocking but replacing the black and red accents with deep navy blue.",
    "culturalTags": ["BASKETBALL","COLOR BLOCKING","CEMENT MASHUP","GR"]
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
  ,
    "lore": "An all-white release originally dropped in 2010 to celebrate 25 years of the Air Jordan lineage.",
    "culturalTags": ["BASKETBALL","ANNIVERSARY","SILVER","ALL WHITE"]
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
  ,
    "lore": "Featuring a muted purple upper, a metallic pin on the collar, and a quote hidden behind the heel tab: 'It is not about the shoes, it is about where you are going.'",
    "culturalTags": ["BASKETBALL","A MA MANIERE","LUXURY","STORYTELLING","COLLABORATION"]
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
  ,
    "lore": "A clean, summer-ready colorway from 2021 that applies the speckled grey aesthetic to an all-white tumbled leather base.",
    "culturalTags": ["BASKETBALL","SUMMER READY","LIFESTYLE","GR"]
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
  ,
    "lore": "An earthy, pre-distressed colorway that drew heavy comparisons to Travis Scott's unreleased F&F Olive 4s.",
    "culturalTags": ["BASKETBALL","EARTH TONES","DISTRESSED","LIFESTYLE"]
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
  ,
    "lore": "The grade-school sizing of the legendary 1989 classic, bringing Nike Air branding to smaller feet.",
    "culturalTags": ["BASKETBALL","OG COLORWAY","YOUTH","TINKER HATFIELD"]
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
  ,
    "lore": "The shoe that catapulted the 2002R to modern stardom. Designed by Yue Wu, it features jagged, deconstructed suede panels meant to look like they've been worn and torn.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","YUE WU","DECONSTRUCTED","Y2K RUNNER"]
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
  ,
    "lore": "A stealthy, dark grey addition to the highly successful 'Refined Future' collection, known for its raw edges.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","DECONSTRUCTED","MONOCHROMATIC"]
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
  ,
    "lore": "Not to be confused with Jordan, this dark iteration of the futuristic 9060 silhouette utilizes heavy mesh and premium suedes.",
    "culturalTags": ["LIFESTYLE","CHUNKY SOLE","FUTURISTIC","MONOCHROMATIC"]
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
  ,
    "lore": "Embodying the Y2K runner aesthetic, this release relies on aggressive silver overlays and a dark mesh base.",
    "culturalTags": ["LIFESTYLE","Y2K AESTHETIC","METALLIC","TECH RUNNER"]
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
  ,
    "lore": "A revival of an obscure archival runner, brought back with modern tech and aggressive metallic styling.",
    "culturalTags": ["LIFESTYLE","ARCHIVE REVIVAL","Y2K RUNNER","METALLIC"]
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
  ,
    "lore": "An ultra-premium execution of the chunky 9060, using hairy suede and muted off-white tones.",
    "culturalTags": ["LIFESTYLE","SUEDE PACK","PREMIUM","CHUNKY SOLE"]
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
  ,
    "lore": "A perfect blend of vintage and futuristic, using a cream midsole to simulate age beneath shiny silver uppers.",
    "culturalTags": ["LIFESTYLE","VINTAGE AESTHETIC","METALLIC","TECH RUNNER"]
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
  ,
    "lore": "An alternate tooling of the 1906, offering a more streamlined, stealthy all-black aesthetic.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","ALTERNATE TOOLING","MONOCHROMATIC"]
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
  ,
    "lore": "Originally released in 1996, the 850 was the first New Balance shoe to remove the iconic N logo from the side profile.",
    "culturalTags": ["LIFESTYLE","90s RUNNER","NO N-LOGO","ARCHIVE"]
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
  ,
    "lore": "A rugged, stealthy take on the Y2K-inspired silhouette, utilizing heavy suede panels across the entire upper.",
    "culturalTags": ["LIFESTYLE","CHUNKY SOLE","SUEDE PACK","TRIPLE BLACK"]
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
  ,
    "lore": "The ultimate 'dad shoe' of the 2020s, offering massive comfort and a retro 90s aesthetic at an accessible price point.",
    "culturalTags": ["LIFESTYLE","DAD SHOE","90s AESTHETIC","EVERYDAY STAPLE","ACCESSIBLE"]
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
  ,
    "lore": "Leaning heavily into 2000s maximalism, this colorway combines bright silver and gold accents over a white mesh base.",
    "culturalTags": ["LIFESTYLE","MAXIMALIST","METALLIC","Y2K AESTHETIC"]
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
  ,
    "lore": "A clean, white and cream version of Yue Wu's 'Refined Future' pack, featuring the signature jagged edges.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","DECONSTRUCTED","SUMMER READY"]
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
  ,
    "lore": "A vibrant, lifestyle-focused iteration of the tech runner, utilizing bright pink accents for a playful look.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","VIBRANT","Y2K AESTHETIC"]
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
  ,
    "lore": "A moody, greyscale approach to the 9060, highlighting the extreme proportions of the ABZORB midsole.",
    "culturalTags": ["LIFESTYLE","CHUNKY SOLE","FUTURISTIC","GREYSCALE"]
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
  ,
    "lore": "A sleek, dark colorway of the recently revived late-90s silhouette, favored for its chunky, wavy upper panels.",
    "culturalTags": ["LIFESTYLE","LATE 90s","ARCHIVE REVIVAL","WAVY DESIGN"]
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
  ,
    "lore": "A cool-toned, blue-grey version of the futuristic runner, offering a frosty aesthetic with premium suede.",
    "culturalTags": ["LIFESTYLE","CHUNKY SOLE","SUEDE PACK","COOL TONES"]
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
  ,
    "lore": "Combining Y2K runner vibes with rich blue accents, making it a standout in the modern tech-runner craze.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","Y2K AESTHETIC","METALLIC"]
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
  ,
    "lore": "A massive collaboration blending BAPE's iconic ABC camo and shark tooth motifs with the comfortable 2002R runner.",
    "culturalTags": ["LIFESTYLE","BAPE","STREETWEAR","CAMO","COLLABORATION"]
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
  ,
    "lore": "An everyday staple utilizing the highly comfortable N-ERGY sole unit paired with a durable black suede upper.",
    "culturalTags": ["LIFESTYLE","EVERYDAY STAPLE","MONOCHROMATIC","GR"]
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
  ,
    "lore": "A loafer iteration of the 1906! Blending high-tech running soles with a slip-on loafer upper, creating a bizarre but highly popular fashion fusion.",
    "culturalTags": ["LIFESTYLE","LOAFER","HYBRID DESIGN","FASHION FORWARD","EXPERIMENTAL"]
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
  ,
    "lore": "Bringing the jagged, torn 'Refined Future' aesthetic to the 1906 silhouette in a stealthy all-black execution.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","DECONSTRUCTED","TRIPLE BLACK","TECH RUNNER"]
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
  ,
    "lore": "An outdoor-inspired colorway of the chunky 1999 runner, blending rich green suedes with a white mesh base.",
    "culturalTags": ["LIFESTYLE","OUTDOOR INSPIRED","LATE 90s","ARCHIVE REVIVAL"]
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
  ,
    "lore": "Steven Smith's 1989 basketball oxford, revived by Aimé Leon Dore, presented here in a clean, neutral grey and white GR colorway.",
    "culturalTags": ["LIFESTYLE","BASKETBALL ORIGINS","STEVEN SMITH","RETRO OXFORD","GR"]
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
  ,
    "lore": "A special edition of the jagged 'Refined Future' pack, featuring muted tones meant to celebrate the changing of the zodiac calendar.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","LUNAR NEW YEAR","ZODIAC","SPECIAL EDITION"]
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
  ,
    "lore": "A highly technical looking colorway, leaning on dark metallic accents over a black mesh base.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","METALLIC","DARK TONES"]
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
  ,
    "lore": "An incredibly popular, lightweight lifestyle runner that dominated global street style throughout the early 2020s.",
    "culturalTags": ["LIFESTYLE","DAD SHOE","MAINSTREAM HIT","EVERYDAY STAPLE"]
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
  ,
    "lore": "A striking colorway that pops dark bases with vibrant purple-pink 'Dragon Berry' accents on the N-Lock logo.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","VIBRANT ACCENTS","ALTERNATE TOOLING"]
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
  ,
    "lore": "A deep navy iteration of the deconstructed suede pack that took the sneaker world by storm.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","DECONSTRUCTED","TONAL"]
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
  ,
    "lore": "A pure homage to early 2000s running shoe aesthetics, complete with aggressive metallic overlays.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","METALLIC","Y2K AESTHETIC"]
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
  ,
    "lore": "A pristine, all-white application of the torn-suede aesthetic on the popular 1906 tech runner.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","DECONSTRUCTED","ALL WHITE","TECH RUNNER"]
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
  ,
    "lore": "An exclusive, earth-toned version of the Refined Future pack released specifically for European retailer size?.",
    "culturalTags": ["LIFESTYLE","PROTECTION PACK","SIZE? EXCLUSIVE","EARTH TONES"]
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
  ,
    "lore": "A masterclass in neutral toning, blending soft greys and creams on the retro-futuristic 9060 silhouette.",
    "culturalTags": ["LIFESTYLE","CHUNKY SOLE","NEUTRAL TONES","FUTURISTIC"]
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
  ,
    "lore": "A standard yet highly effective Y2K colorway, combining breathable black mesh with structured silver synthetic panels.",
    "culturalTags": ["LIFESTYLE","TECH RUNNER","Y2K AESTHETIC","EVERYDAY STAPLE"]
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
  ,
    "lore": "A faithful retro of a niche early 2000s stability runner, featuring classic navy and grey New Balance blocking.",
    "culturalTags": ["LIFESTYLE","ARCHIVE REVIVAL","Y2K RUNNER","STABILITY RUNNER"]
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
  ,
    "lore": "A unique, fashion-forward release utilizing a washed, overdyed pink treatment on the suede upper.",
    "culturalTags": ["LIFESTYLE","ASOS EXCLUSIVE","OVERDYED","EXPERIMENTAL"]
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
  ,
    "lore": "The fourth iteration of the legendary 990 series, refined for modern wear while keeping the absolute highest standard of US manufacturing.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","PREMIUM CRAFTSMANSHIP","DMV STAPLE"]
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
  ,
    "lore": "The standard-bearer of the modern Made in USA line, introducing FuelCell cushioning to the legendary 990 lineage.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","FUELCELL","MODERN RUNNER"]
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
  ,
    "lore": "Widely considered the best of the 990 series. The v3 introduced a more aggressive, technical look while maintaining supreme comfort and domestic quality.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","FAN FAVORITE","TECH-BRO UNIFORM"]
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
  ,
    "lore": "Designed by ALD founder Teddy Santis for his Made in USA seasonal collection, featuring premium hairy suede and contrasting black midsoles.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","CREATIVE DIRECTOR","PREMIUM"]
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
  ,
    "lore": "The quintessential stealth dad-shoe, favored by tech CEOs and streetwear enthusiasts alike for its unrivaled comfort and quality.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","STEALTH","EVERYDAY STAPLE"]
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
  ,
    "lore": "Celebrating the Boston boutique's 15th anniversary, this earthy release features massive attention to detail, premium pigskin, and custom branding.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","BODEGA","ANNIVERSARY","COLLABORATION","STORYTELLING"]
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
  ,
    "lore": "The rapper/chef's first collaboration, featuring a wild, colorful mix of neon greens, blues, and browns that perfectly matches his chaotic energy.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","ACTION BRONSON","VIBRANT","COLLABORATION"]
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
  ,
    "lore": "Bronson's second 990v6, taking a more wearable approach with rich blues, silver accents, and a gum sole.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","ACTION BRONSON","TONAL","COLLABORATION"]
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
  ,
    "lore": "A slight variation on the classic grey v4, featuring a red tab on the tongue denoting its premium Made in USA status.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","RED LABEL","PREMIUM"]
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
  ,
    "lore": "A clean, simple execution of the v4, offering a durable black suede upper perfect for harsh weather wear.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","EVERYDAY STAPLE","DURABLE"]
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
  ,
    "lore": "A highly limited iteration of Bronson's chaotic color palette, brought to life on the comfortable FuelCell sole.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","ACTION BRONSON","LIMITED","COLLABORATION"]
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
  ,
    "lore": "Part of Season 4 of Santis' direction, utilizing a moody grey and black scheme with white laces for heavy contrast.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","MOODY TONES","PREMIUM"]
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
  ,
    "lore": "A bold seasonal drop combining earth-toned suedes with sharp, vibrant orange accents.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","VIBRANT ACCENTS","EARTH TONES"]
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
  ,
    "lore": "A stunning use of color on the typically grey 990, wrapping the entire shoe in rich, premium purple suede.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","MONOCHROMATIC","PREMIUM"]
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
  ,
    "lore": "Swapping the usual grey for a rugged, wheat-like tan colorway that evokes classic work boots.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","WORKWEAR","WHEAT TONES","RUGGED"]
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
  ,
    "lore": "Evoking classic collegiate colors, this Made in USA release blends deep forest green with golden yellow hits.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","COLLEGIATE","PREMIUM"]
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
  ,
    "lore": "A masterful, subtle shift from the standard grey, using lighter tones and premium mesh.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","SUBTLE TONES","PREMIUM"]
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
  ,
    "lore": "The official name of Bronson's neon-green debut collab, instantly recognizable and highly sought after.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","ACTION BRONSON","BAKLAVA","VIBRANT","COLLABORATION"]
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
  ,
    "lore": "A highly exclusive regional release celebrating the opening of the Paris Aimé Leon Dore flagship store.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","PARIS FLAGSHIP","REGIONAL EXCLUSIVE"]
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
  ,
    "lore": "Part of a pack highlighting local community hubs, featuring vibrant red suedes and standard domestic craftsmanship.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","COMMUNITY PACK","VIBRANT"]
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
  ,
    "lore": "The Montreal design studio's masterclass in minimalism, selling out instantly and commanding massive resale prices due to its perfect shade of green.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","JJJJOUND","MINIMALIST","HYPE","COLLABORATION"]
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
  ,
    "lore": "The stealth bomber of the v6 lineup, perfect for the hospitality industry or tech-wear fashion.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TRIPLE BLACK","WORKWEAR","FUELCELL"]
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
  ,
    "lore": "Following up the Olive release, Justin Saunders applied a rich chocolate brown to the v3 with black accents.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","JJJJOUND","EARTH TONES","MINIMALIST","COLLABORATION"]
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
  ,
    "lore": "A vibrant, pinkish-orange take on the v6, breaking from New Balance's traditionally muted color palettes.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","VIBRANT","LIFESTYLE GR"]
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
  ,
    "lore": "A staple colorway in the NB catalog, offering a slightly more formal alternative to the classic grey.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","EVERYDAY STAPLE","COLLEGIATE"]
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
  ,
    "lore": "A highly refined, tonal beige colorway that perfectly fits the Aimé Leon Dore aesthetic.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","ALD AESTHETIC","NEUTRAL TONES"]
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
  ,
    "lore": "Focusing on deep, collegiate navy blue, accented by crisp white midsoles and silver N logos.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","COMMUNITY PACK","COLLEGIATE"]
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
  ,
    "lore": "One of the standout hits from Santis' Season 1, utilizing a striking purple suede over a navy mesh base.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","VIBRANT","PREMIUM"]
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
  ,
    "lore": "A bold, somewhat Joker-esque color palette executed with the highest quality domestic materials.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","VIBRANT","PREMIUM"]
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
  ,
    "lore": "Blending vibrant red suede with traditional grey mesh, creating a striking contrast.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","HIGH CONTRAST","PREMIUM"]
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
  ,
    "lore": "The 2019 update to the 990, known for its plastic power strap on the collar and a slightly more streamlined look.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","STREAMLINED","GR"]
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
  ,
    "lore": "A highly wearable colorway combining a black base with tan heel accents, providing a subtle pop of contrast.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","EVERYDAY STAPLE","PREMIUM"]
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
  ,
    "lore": "Ronnie Fieg's homage to the legendary 1300JP colorway, ported over flawlessly to the 990v3 silhouette.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","KITH","RONNIE FIEG","1300JP HOMAGE","COLLABORATION"]
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
  ,
    "lore": "The standard grey iteration of the v4, beloved by DMV residents and global fashion icons alike.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","990 SERIES","DMV STAPLE","EVERYDAY STAPLE"]
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
  ,
    "lore": "Featuring a dark, earthy green tone, released exclusively through ALD before hitting broader New Balance channels.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","EARTH TONES","PREMIUM"]
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
  ,
    "lore": "A soft, pastel approach to the highly technical v6, offering a refreshing spring aesthetic.",
    "culturalTags": ["LIFESTYLE","MADE IN USA","TEDDY SANTIS","COMMUNITY PACK","PASTEL"]
  }
];
