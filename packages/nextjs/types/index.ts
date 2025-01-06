export type Market = {
  id: string;
  title: string;
  description: string;
  endDate: Date;
  totalLiquidity: number;
  volume: number;
  outcomes: Outcome[];
  category: string;
  status: 'open' | 'closed' | 'resolved';
  resolvedOutcome?: string;
};

export type Outcome = {
  id: string;
  title: string;
  probability: number;
  price: number;
};

export type Trade = {
  id: string;
  marketId: string;
  outcomeId: string;
  amount: number;
  price: number;
  type: 'buy' | 'sell';
  timestamp: Date;
  userId: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  icon: string;
};