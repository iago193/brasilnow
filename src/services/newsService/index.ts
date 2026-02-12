import Parser from "rss-parser";

export async function getNews() {
  const parser = new Parser();
  const feed = await parser.parseURL("https://g1.globo.com/rss/g1/");

  return feed.items.map((item) => {
    // pega a primeira imagem do content
    const image = item.content?.match(/<img.*?src="(.*?)"/)?.[1] || null;

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
}
