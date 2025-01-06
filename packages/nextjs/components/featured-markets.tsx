"use client";

import { Card, CardContent } from "~~/components/ui/card";
import { Market } from "~~/types";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import Link from "next/link";
import { Flame } from "lucide-react";

interface FeaturedMarketsProps {
  initialMarkets: Market[];
}

export function FeaturedMarkets({ initialMarkets = [] }: FeaturedMarketsProps) {
  if (!initialMarkets.length) {
    return null;
  }

  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        <Flame className="w-6 h-6 text-orange-500" />
        <h2 className="text-3xl font-bold">Featured Markets</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {initialMarkets.map((market) => (
          <Link href={`/markets/${market.id}`} key={market.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-semibold">{market.title}</h3>
                  <Badge variant="secondary">${market.volume.toLocaleString()}</Badge>
                </div>
                <p className="text-muted-foreground mb-6">{market.description}</p>
                <div className="space-y-4">
                  {market.outcomes.map((outcome) => (
                    <div key={outcome.id} className="space-y-2">
                      <div className="flex justify-between">
                        <span>{outcome.title}</span>
                        <span className="font-medium">{(outcome.probability * 100).toFixed(0)}%</span>
                      </div>
                      <Progress value={outcome.probability * 100} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}