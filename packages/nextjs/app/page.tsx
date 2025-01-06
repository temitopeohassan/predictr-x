import { Suspense } from "react";
import { Markets } from "~~/components/markets";
import { FeaturedMarkets } from "~~/components/featured-markets";
import { Categories } from "~~/components/categories";
import { getFeaturedMarkets, getMarkets } from "~~/lib/api";

export default async function Home() {
  const [featuredMarkets, markets] = await Promise.all([
    getFeaturedMarkets(),
    getMarkets(),
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      <FeaturedMarkets initialMarkets={featuredMarkets || []} />
      <Categories />
      <Markets initialMarkets={markets || []} />
    </div>
  );
}