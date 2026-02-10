"use client";

import { useState } from "react";
import { News } from "@/types";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import Link from "next/link";

type NewList = {
  news: News[];
};

export default function NewsList({ news }: NewList) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20; // quantas notícias por página

  // Calcula os índices para slice
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentNews = news.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  return (
    <section>
      <div className="flex flex-col gap-4">
        {currentNews.map((feed, i) => (
          <div className="shadow-sm rounded-lg bg-white p-4 relative" key={i}>
            <h2 className="font-bold">{feed.title}</h2>
            <div className="flex gap-4 mt-4">
              <Image
                src={feed.image || "/default-image.jpg"}
                alt={feed.title || "Noticia"}
                width={300}
                height={150}
                style={{ objectFit: "cover" }}
              />
              <p>
                {(feed.description || "").substring(0, 350)}
                {(feed.description || "").length > 350 ? "..." : ""}
              </p>
              <span className="absolute right-10 bottom-4">
                {formatDate(feed.date)}
              </span>
              <Link
                href={`/news/${feed.title}`}
                className="absolute bottom-4 left-80 mx-3 px-4 bg-blue-400 py-2 rounded-lg text-white font-bold
              hover:bg-blue-500 transition duration-300 hover:cursor-pointer shadow-md"
              >
                Ver noticia completa.
              </Link>
            </div>
          </div>
        ))}

        {/* Paginação */}
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-1 rounded hover:cursor-pointer ${
                currentPage === num
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
