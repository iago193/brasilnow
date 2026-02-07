import Header from "@/components/header";
import TopStories from "@/components/TopStories/indexe";
import { getNews } from "@/app/actions";
import NewsList from "@/components/NewsList";

export default async function Home() {
  const news = await getNews();
  return (
    <div>
      <Header />
      <main className="w-full">
        <div className="max-w-7xl mx-auto mt-10">
          <TopStories news={news} />
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_300px]">
            <div className="w-full border-2 p-4">
              <NewsList news={news} />
            </div>
            <div className="w-full border-2 hidden lg:inline-block p-4">
              Teste
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
