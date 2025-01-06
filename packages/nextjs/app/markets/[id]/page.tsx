import { Suspense } from "react";
import { getMarketById } from "~~/lib/api";
import { MarketDetails } from "~~/components/market-details";
import { MarketTrade } from "~~/components/market-trade";

export default async function MarketPage({ params }: { params: { id: string } }) {
  const market = await getMarketById(params.id);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Suspense fallback={<div>Loading market details...</div>}>
            <MarketDetails market={market} />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading trading interface...</div>}>
            <MarketTrade market={market} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}