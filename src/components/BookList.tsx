import { FlatList, StyleSheet } from 'react-native';
import { useBooks } from '../context/BooksContext';
import { Book } from '../types/book';
import BookCard from './BookCard';

export default function BookList() {
  const { books } = useBooks();

  return (
    <FlatList<Book>
      data={books}
      keyExtractor={(item, index) => `${item.id}-${index}`}
      renderItem={({ item }) => <BookCard book={item} />}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    paddingBottom: 20,
  },
});
