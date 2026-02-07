import { News } from "@/types";

type NewList = {
  news: News[];
};

export default function NewsList({ news }: NewList) {
  return (
    <div>
      <h2>Teste</h2>
    </div>
  );
}
