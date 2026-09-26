import type { Product } from './products';

// This acts as a supplemental database to the core products.ts
// It provides rich archive data for specific featured objects.

export const objectData: Record<string, Partial<Product>> = {
  // Nike Dunk Low 'Black White' (Panda)
  "000": {
    rarity: 3,
    culturalTags: ['LIFESTYLE', 'UBIQUITOUS', '2020s TREND'],
    lore: "The 'Panda' Dunk Low became arguably the most recognizable and widely worn sneaker of the early 2020s. Its simple two-tone color-blocking made it an everyday staple, shifting the Dunk from a niche skate shoe back into the mainstream lifestyle consciousness.",
    timeline: [
      { year: '1985', event: 'Original Nike Dunk release as a basketball shoe' },
      { year: '2021', event: 'Release of the modern "Panda" Dunk Low' },
      { year: '2022', event: 'Numerous restocks solidify its ubiquitous status' }
    ],
    relatedObjects: ["005", "021"]
  },
  // Nike Dunk Low Pro SB 'Freddy Krueger'
  "012": {
    rarity: 10,
    culturalTags: ['SKATEBOARDING', 'HORROR', 'NIKE SB', 'UNRELEASED'],
    lore: "One of the most infamous unreleased sneakers in history. Originally slated for a 2007 'Horror Pack', New Line Cinema issued a cease-and-desist due to the unauthorized use of Freddy Krueger's likeness. Nike ordered the shoes destroyed, but a few pairs survived and made their way into the hands of collectors, becoming mythological grails.",
    timeline: [
      { year: '2007', event: 'Designed for the Nike SB Horror Pack' },
      { year: '2007', event: 'Cease and desist issued, production halted' },
      { year: '2007', event: 'Shoes ordered to be incinerated (oil-stained pairs exist)' }
    ],
    relatedObjects: ["002", "003", "009"] // Other iconic SBs
  },
  // Ben & Jerry's x Nike Dunk Low SB 'Chunky Dunky'
  "009": {
    rarity: 8,
    culturalTags: ['SKATEBOARDING', 'COLLABORATION', 'FOOD & BEVERAGE'],
    lore: "A surreal collaboration with Ben & Jerry's Ice Cream. The design mimics the brand's iconic packaging, featuring cow-print overlays, a drippy yellow Swoosh, and tie-dye lining. It encapsulates the wild, irreverent spirit of Nike SB.",
    timeline: [
      { year: '2020', event: 'Released in select skate shops (some in special giant ice cream pint packaging)' }
    ],
    relatedObjects: ["012", "003"]
  },
  // Concepts x Nike Dunk Low SB 'Orange Lobster'
  "003": {
    rarity: 7,
    culturalTags: ['SKATEBOARDING', 'COLLABORATION', 'CONCEPTS', 'LOBSTER SERIES'],
    lore: "Continuing the legendary Concepts 'Lobster' series, the Orange Lobster takes inspiration from the rare orange lobster found in nature. It features the signature speckled upper, picnic blanket lining, and rubber claw bands.",
    timeline: [
      { year: '2008', event: 'Original Red Lobster Dunk released' },
      { year: '2022', event: 'Orange Lobster released, continuing the lineage' }
    ],
    relatedObjects: ["012", "009"]
  }
};
