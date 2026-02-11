export const handleFormatLink = (title: string) => {
  return title
    .toLowerCase()
    .trim()
    .normalize("NFD") // separa acentos
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9\s-]/g, "") // remove caracteres especiais
    .replace(/\s+/g, "-"); // troca espaços por "-"
};
