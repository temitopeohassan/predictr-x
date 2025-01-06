"use client";

import { Market } from "~~/types";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { Button } from "~~/components/ui/button";
import { Input } from "~~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~~/components/ui/tabs";
import { useState } from "react";

interface MarketTradeProps {
  market: Market;
}

export function MarketTrade({ market }: MarketTradeProps) {
  const [selectedOutcome, setSelectedOutcome] = useState(market.outcomes[0]);
  const [amount, setAmount] = useState("");
  const [tradeType, setTradeType] = useState<"buy" | "sell">("buy");

  const handleTrade = () => {
    // Implement trade logic
    console.log("Trading", {
      type: tradeType,
      outcome: selectedOutcome,
      amount,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Trade</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={tradeType} onValueChange={(v) => setTradeType(v as "buy" | "sell")}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy" className="space-y-4">
            <div>
              <div className="text-sm text-muted-foreground mb-2">Select Outcome</div>
              <div className="grid grid-cols-2 gap-2">
                {market.outcomes.map((outcome) => (
                  <Button
                    key={outcome.id}
                    variant={selectedOutcome.id === outcome.id ? "default" : "outline"}
                    onClick={() => setSelectedOutcome(outcome)}
                  >
                    {outcome.title}
                  </Button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground mb-2">Amount (USD)</div>
              <Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
              />
            </div>
            <Button className="w-full" onClick={handleTrade}>
              Buy {selectedOutcome.title}
            </Button>
          </TabsContent>
          <TabsContent value="sell" className="space-y-4">
            {/* Similar content for sell tab */}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}