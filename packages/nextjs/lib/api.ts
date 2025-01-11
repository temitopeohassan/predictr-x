import { Market } from "~~/types";

// Simulated API calls - replace with real API endpoints
export async function getFeaturedMarkets(): Promise<Market[]> {
  return [
    {
      id: "featured-1",
      title: "Will SpaceX successfully land on Mars in 2024?",
      description: "Market resolves to Yes if SpaceX...",
      endDate: new Date("2024-12-31"),
      totalLiquidity: 100000,
      volume: 250000,
      category: "Space",
      status: "open" as const,
      outcomes: [
        { id: "1", title: "Yes", probability: 0.75, price: 0.75 },
        { id: "2", title: "No", probability: 0.25, price: 0.25 },
      ],
    },
  ];
}

export async function getMarkets(): Promise<Market[]> {
  return [
    {
      id: "1",
      title: "Will Bitcoin reach $100k by end of 2024?",
      description: "Market resolves to Yes if BTC/USD price reaches...",
      endDate: new Date("2024-12-31"),
      totalLiquidity: 50000,
      volume: 75000,
      category: "Crypto",
      status: "open" as const,
      outcomes: [
        { id: "1", title: "Yes", probability: 0.65, price: 0.65 },
        { id: "2", title: "No", probability: 0.35, price: 0.35 },
      ],
    },
  ];
}

export async function getMarketById(id: string): Promise<Market> {
  return {
    id: "1",
    title: "Will Bitcoin reach $100k by end of 2024?",
    description: "Market resolves to Yes if BTC/USD price reaches or exceeds $100,000 on any major exchange before December 31st, 2024 23:59:59 UTC.",
    endDate: new Date("2024-12-31"),
    totalLiquidity: 50000,
    volume: 75000,
    category: "Crypto",
    status: "open" as const,
    outcomes: [
      { id: "1", title: "Yes", probability: 0.65, price: 0.65 },
      { id: "2", title: "No", probability: 0.35, price: 0.35 },
    ],
  };
}