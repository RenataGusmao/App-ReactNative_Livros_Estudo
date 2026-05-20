import { Book } from '../types/book';

const SEARCH_URL = 'https://openlibrary.org/search.json?q=';
const COVER_URL = 'https://covers.openlibrary.org/b/id';

type OpenLibraryBook = {
  key: string;
  title: string;
  author_name?: string[];
  first_publish_year?: number;
  cover_i?: number;
};

type OpenLibraryResponse = {
  docs: OpenLibraryBook[];
};

export async function searchBooksByTitle(title: string): Promise<Book[]> {
  const response = await fetch(`${SEARCH_URL}${encodeURIComponent(title)}`);

  if (!response.ok) {
    throw new Error('Erro ao buscar livros');
  }

  const data = (await response.json()) as OpenLibraryResponse;
  return data.docs.slice(0, 10).map(formatBook);
}

function formatBook(book: OpenLibraryBook): Book {
  return {
    id: book.key,
    title: book.title,
    author: book.author_name?.[0] || 'Nao informado',
    year: book.first_publish_year || 'Nao informado',
    coverUrl: book.cover_i ? `${COVER_URL}/${book.cover_i}-M.jpg` : null,
  };
}
