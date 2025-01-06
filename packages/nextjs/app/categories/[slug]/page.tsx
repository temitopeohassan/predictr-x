"use client";

import { Markets } from "~~/components/markets";
import { Category, Market } from "~~/types";
import { Bitcoin, Briefcase, Globe2, Rocket, Trophy, TrendingUp } from "lucide-react";

const iconMap = {
  crypto: Bitcoin,
  sports: Trophy,
  politics: Globe2,
  business: Briefcase,
  technology: Rocket,
  economics: TrendingUp,
};

const categories: { [key: string]: Category } = {
  crypto: { id: "1", name: "Crypto", slug: "crypto", icon: "Bitcoin" },
  sports: { id: "2", name: "Sports", slug: "sports", icon: "Trophy" },
  politics: { id: "3", name: "Politics", slug: "politics", icon: "Globe2" },
  business: { id: "4", name: "Business", slug: "business", icon: "Briefcase" },
  technology: { id: "5", name: "Technology", slug: "technology", icon: "Rocket" },
  economics: { id: "6", name: "Economics", slug: "economics", icon: "TrendingUp" },
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug];
  const Icon = iconMap[params.slug as keyof typeof iconMap];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-12 h-12" />
        <h1 className="text-4xl font-bold">{category.name} Markets</h1>
      </div>
      <Markets />
    </div>
  );
}