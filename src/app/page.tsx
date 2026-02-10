import Header from "@/components/ui/header";
import TopStories from "@/components/ui/topStories/indexe";
import { getNews } from "@/app/actions";
import NewsList from "@/components/ui/newsList";

export default async function Home() {
  const news = await getNews();
  return (
    <div>
      <Header />
      <main className="w-full">
        <div className="max-w-7xl mx-auto mt-10">
          <TopStories news={news} />
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_300px]">
            <div className="w-full p-4">
              <NewsList news={news} />
            </div>
            <div className="w-full hidden lg:inline-block p-4 bg-white rounded-lg shadow-sm mt-4 max-h-80">
              Teste2
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
