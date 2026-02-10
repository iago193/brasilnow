"use client";

import { News } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type FeedNewsProps = {
  news: News[];
};

export default function TopStories({ news }: FeedNewsProps) {
  const [current, setCurrent] = useState(0);

  // troca a cada 15 segundos
  useEffect(() => {
    if (!news.length) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % Math.min(news.length, 3));
    }, 15000);

    return () => clearInterval(interval);
  }, [news]);

  const topNews = news.slice(0, 3);
  const item = topNews[current];

  if (!item) return null;

  return (
    <section className="max-w-5xl mx-auto mt-40">
      <div className="relative shadow-xl rounded-md overflow-hidden h-44">
        <Image
          alt={item.title || "Notícia"}
          src={item.image || "/default-image.jpg"}
          fill
          className="object-cover"
        />

        {/* overlay */}
        <div className="absolute bottom-0 w-full bg-black/50 text-white p-2">
          <h2 className="text-sm font-semibold line-clamp-2">{item.title}</h2>
        </div>
      </div>
    </section>
  );
}
