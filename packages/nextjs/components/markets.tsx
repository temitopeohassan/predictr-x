"use client";

import { Market } from "~~/types";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { Badge } from "~~/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import Link from "next/link";
import { TrendingUp, Users } from "lucide-react";

interface MarketsProps {
  initialMarkets: Market[];
}

export function Markets({ initialMarkets = [] }: MarketsProps) {
  if (!initialMarkets.length) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Popular Markets</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialMarkets.map((market) => (
          <Link href={`/markets/${market.id}`} key={market.id}>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{market.title}</CardTitle>
                  <Badge variant={market.status === "open" ? "default" : "secondary"}>
                    {market.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground line-clamp-2">
                    {market.description}
                  </p>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      <span>${market.volume.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>${market.totalLiquidity.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Ends {formatDistanceToNow(market.endDate, { addSuffix: true })}
                  </div>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}