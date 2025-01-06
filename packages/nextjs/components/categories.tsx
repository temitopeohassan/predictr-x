"use client";

import { Category } from "~~/types";
import { Card, CardContent } from "~~/components/ui/card";
import Link from "next/link";
import { Bitcoin, Briefcase, Globe2, Rocket, Trophy, TrendingUp } from "lucide-react";

const categories: Category[] = [
  { id: "1", name: "Crypto", slug: "crypto", icon: "Bitcoin" },
  { id: "2", name: "Sports", slug: "sports", icon: "Trophy" },
  { id: "3", name: "Politics", slug: "politics", icon: "Globe2" },
  { id: "4", name: "Business", slug: "business", icon: "Briefcase" },
  { id: "5", name: "Technology", slug: "technology", icon: "Rocket" },
  { id: "6", name: "Economics", slug: "economics", icon: "TrendingUp" },
];

const iconMap = {
  Bitcoin,
  Trophy,
  Globe2,
  Briefcase,
  Rocket,
  TrendingUp,
};

export function Categories() {
  return (
    <div className="my-12">
      <h2 className="text-3xl font-bold mb-6">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => {
          const Icon = iconMap[category.icon as keyof typeof iconMap];
          return (
            <Link href={`/categories/${category.slug}`} key={category.id}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <Icon className="w-8 h-8 mb-2" />
                  <span className="font-medium">{category.name}</span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}