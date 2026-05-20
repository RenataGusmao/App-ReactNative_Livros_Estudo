import { ReactNode, createContext, useContext, useState } from 'react';
import { Keyboard } from 'react-native';
import { searchBooksByTitle } from '../services/openLibraryApi';
import { Book } from '../types/book';

type BooksContextData = {
  books: Book[];
  loading: boolean;
  message: string;
  search: string;
  searchBooks: () => Promise<void>;
  setSearch: (value: string) => void;
};

type BooksProviderProps = {
  children: ReactNode;
};

const BooksContext = createContext<BooksContextData | undefined>(undefined);

export function BooksProvider({ children }: BooksProviderProps) {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('Pesquise por um livro.');

  async function searchBooks() {
    const term = search.trim();

    if (!term) {
      setBooks([]);
      setMessage('Digite o nome de um livro.');
      return;
    }

    try {
      Keyboard.dismiss();
      setLoading(true);
      setMessage('');

      const results = await searchBooksByTitle(term);

      setBooks(results);
      setMessage(results.length ? '' : 'Nenhum livro encontrado.');
    } catch (error) {
      setBooks([]);
      setMessage('Erro ao buscar livros. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <BooksContext.Provider
      value={{
        books,
        loading,
        message,
        search,
        searchBooks,
        setSearch,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error('useBooks deve ser usado dentro de BooksProvider');
  }

  return context;
}
