export interface ArchiveTimelineEvent {
  year: string;
  event: string;
}

export interface ArchiveEntry {
  id: string;
  rarity: number;
  culturalTags: string[];
  lore: string;
  timeline: ArchiveTimelineEvent[];
  relatedObjects: string[];
  
  origin?: string;
  designerNote?: string;
  marketPeak?: string;
  verdict?: string;
  significance?: 'ICONIC' | 'GRAIL' | 'CULT' | 'UBIQUITOUS' | 'UNRELEASED';
}

export const archiveData: Record<string, ArchiveEntry> = {
  "000": {
    id: "000",
    rarity: 3,
    culturalTags: ['LIFESTYLE', 'UBIQUITOUS', '2020s TREND'],
    lore: "The 'Panda' Dunk Low became arguably the most recognizable and widely worn sneaker of the early 2020s. Its simple two-tone color-blocking made it an everyday staple, shifting the Dunk from a niche skate shoe back into the mainstream lifestyle consciousness.",
    timeline: [
      { year: '1985', event: 'Original Nike Dunk release as a basketball shoe' },
      { year: '2021', event: 'Release of the modern "Panda" Dunk Low' },
      { year: '2022', event: 'Numerous restocks solidify its ubiquitous status' }
    ],
    relatedObjects: ["005", "021"],
    origin: "Beaverton, Oregon",
    verdict: "The shoe that defined mainstream streetwear in the 2020s.",
    marketPeak: "$350 avg (StockX, 2021)",
    significance: 'UBIQUITOUS'
  },
  "012": {
    id: "012",
    rarity: 10,
    culturalTags: ['SKATEBOARDING', 'HORROR', 'NIKE SB', 'UNRELEASED'],
    lore: "One of the most infamous unreleased sneakers in history. Originally slated for a 2007 'Horror Pack', New Line Cinema issued a cease-and-desist due to the unauthorized use of Freddy Krueger's likeness. Nike ordered the shoes destroyed, but a few pairs survived and made their way into the hands of collectors, becoming mythological grails.",
    timeline: [
      { year: '2007', event: 'Designed for the Nike SB Horror Pack' },
      { year: '2007', event: 'Cease and desist issued, production halted' },
      { year: '2007', event: 'Shoes ordered to be incinerated (oil-stained pairs exist)' }
    ],
    relatedObjects: ["002", "003", "009"],
    designerNote: "The oil stains found on surviving pairs are supposedly from the incinerator where they were meant to be destroyed.",
    verdict: "A legendary survivor of a corporate kill-order.",
    marketPeak: "$100,000+ (Sotheby's/Private Sales)",
    significance: 'UNRELEASED'
  },
  "009": {
    id: "009",
    rarity: 8,
    culturalTags: ['SKATEBOARDING', 'COLLABORATION', 'FOOD & BEVERAGE'],
    lore: "A surreal collaboration with Ben & Jerry's Ice Cream. The design mimics the brand's iconic packaging, featuring cow-print overlays, a drippy yellow Swoosh, and tie-dye lining. It encapsulates the wild, irreverent spirit of Nike SB.",
    timeline: [
      { year: '2020', event: 'Released in select skate shops (some in special giant ice cream pint packaging)' }
    ],
    relatedObjects: ["012", "003"],
    verdict: "A perfect storm of hype, creativity, and lockdown-era sneaker mania.",
    marketPeak: "$2,000+ avg (StockX, 2020)",
    significance: 'CULT'
  },
  "003": {
    id: "003",
    rarity: 7,
    culturalTags: ['SKATEBOARDING', 'COLLABORATION', 'CONCEPTS', 'LOBSTER SERIES'],
    lore: "Continuing the legendary Concepts 'Lobster' series, the Orange Lobster takes inspiration from the rare orange lobster found in nature. It features the signature speckled upper, picnic blanket lining, and rubber claw bands.",
    timeline: [
      { year: '2008', event: 'Original Red Lobster Dunk released' },
      { year: '2022', event: 'Orange Lobster released, continuing the lineage' }
    ],
    relatedObjects: ["012", "009"],
    origin: "Boston, Massachusetts (Concepts)",
    verdict: "A testament to storytelling longevity in sneaker culture.",
    marketPeak: "$700 avg (StockX, 2022)",
    significance: 'ICONIC'
  }
};
