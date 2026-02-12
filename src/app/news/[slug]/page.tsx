import { getNews } from "@/services/newsService";
import { handleFormatLink } from "@/utils/handleFormatLink";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function News({ params }: Props) {
  const { slug } = await params;

  const posts = await getNews();

  const post = posts.find(
    (item) => handleFormatLink(item.title || "") === slug,
  );

  if (!post) {
    return <h1 className="mt-10 text-center">Notícia não encontrada</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-40 px-4">
      {/* Imagem */}
      {post.image && (
        <div className="relative w-full h-[400px] mb-6">
          <Image
            src={post.image}
            alt={post.title || "Imagem da notícia"}
            fill
            className="object-cover rounded-xl"
            priority
          />
        </div>
      )}

      {/* Título */}
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {/* Data */}
      {post.date && (
        <p className="text-gray-500 mb-6">
          {new Date(post.date).toLocaleDateString("pt-BR")}
        </p>
      )}

      {/* Conteúdo */}
      <p className="mb-20 text-lg">{post.description}</p>
    </div>
  );
}
