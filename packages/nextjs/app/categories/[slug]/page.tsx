"use client";

import { getMarkets } from "~~/lib/api";
import { Markets } from "~~/components/markets";
import { Categories } from "~~/components/categories";
import { Market } from "~~/types";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  // Fetch markets filtered by category
  const markets = await getMarkets();
  const filteredMarkets = markets.filter(market => 
    market.category.toLowerCase() === params.slug.toLowerCase()
  ) as Market[];

  return (
    <div className="container mx-auto px-4 py-8">
      <Categories />
      <div className="my-8">
        <h1 className="text-4xl font-bold capitalize mb-8">{params.slug} Markets</h1>
        <Markets initialMarkets={filteredMarkets} />
      </div>
    </div>
  );
}