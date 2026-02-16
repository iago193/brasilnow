export const revalidate = 60 * 30;

import TopStories from "@/components/ui/topStories/indexe";
import { getNews } from "@/services/newsService";
import NewsList from "@/components/ui/newsList";
import WeatherCard from "@/components/ui/WeatherCard";
import { getForecast } from "@/services/Forecast";

type Props = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: Props) {
    const { category } = await params;
  const news = await getNews(category === 'geral'? '' : category);
  const forecast = await getForecast();

  if (!forecast) throw new Error("Erro na requisição forecast");

  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto mt-10">
        <TopStories news={news} />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-[1fr_300px]">
          <div className="w-full p-4">
            <NewsList news={news} />
          </div>

          <div className="w-full hidden lg:inline-block p-4 bg-white rounded-lg shadow-sm mt-4 max-h-80">
            <WeatherCard forecast={forecast} />
          </div>
        </div>
      </div>
    </main>
  );
}