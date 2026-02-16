import { cache } from "react";
import Parser from "rss-parser";

const parser = new Parser();

export const revalidate = 60; // atualiza a cada 60 segundos

export const getNews = cache(async (category: string) => {
  const categories = category === "geral" ? "" : category;

  const url = `https://g1.globo.com/rss/g1/${categories}`;

  // Next agora controla cache
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Erro ao buscar RSS");
  }

  const xml = await res.text();

  const feed = await parser.parseString(xml);

  return feed.items.map((item) => {
    const image =
      item.content?.match(/<img.*?src="(.*?)"/)?.[1] || null;

    return {
      title: item.title,
      link: item.link,
      description: item.contentSnippet,
      date: item.pubDate,
      image,
      guid: item.guid,
      categories: item.categories,
    };
  });
});
