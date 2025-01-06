"use client";

import { Market } from "~~/types";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { Badge } from "~~/components/ui/badge";
import { formatDistanceToNow } from "date-fns";
import { AlertCircle, TrendingUp, Users } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "~~/components/ui/alert";

interface MarketDetailsProps {
  market: Market;
}

export function MarketDetails({ market }: MarketDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-4">{market.title}</h1>
        <div className="flex gap-4 items-center mb-6">
          <Badge variant={market.status === "open" ? "default" : "secondary"}>
            {market.status}
          </Badge>
          <span className="text-muted-foreground">
            Ends {formatDistanceToNow(market.endDate, { addSuffix: true })}
          </span>
        </div>
        <p className="text-lg text-muted-foreground">{market.description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Market Stats</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground mb-1">Volume</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              ${market.volume.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-1">Liquidity</div>
            <div className="text-2xl font-bold flex items-center gap-2">
              <Users className="w-5 h-5" />
              ${market.totalLiquidity.toLocaleString()}
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Resolution Details</AlertTitle>
        <AlertDescription>
          This market will be resolved based on official price data from major cryptocurrency exchanges.
          The resolution source will be CoinGecko's Bitcoin/USD price feed.
        </AlertDescription>
      </Alert>
    </div>
  );
}