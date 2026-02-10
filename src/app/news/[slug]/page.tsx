import { getNews } from "@/app/actions";
import NewDescription from "@/components/ui/newDescription";

type props = {
  params: {
    slug: string;
  };
};

export default async function News({ params }: props) {
  const posts = await getNews();

  console.log(params.slug);

  const post = posts.find((item) => item.title === params.slug);

  console.log(post);

  if (!post) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
      <NewDescription post={post} />
    </div>
  );
}
