"use client";

import { News } from "@/types";

type NewList = {
  post: News;
};

export default function NewDescription({ post }: NewList) {
  return <h2>{post.title}</h2>;
}
