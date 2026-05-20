import { ActivityIndicator, SafeAreaView, StyleSheet, Text } from 'react-native';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { useBooks } from '../context/BooksContext';

export default function HomeScreen() {
  const { loading, message } = useBooks();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Busca de Livros</Text>
      <Text style={styles.subtitle}>API publica: Open Library</Text>

      <SearchBar />

      {loading ? (
        <ActivityIndicator size="large" color="#1f6feb" style={styles.loading} />
      ) : (
        <>
          {message ? <Text style={styles.message}>{message}</Text> : null}
          <BookList />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
    padding: 20,
  },
  title: {
    color: '#1f2937',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    color: '#667085',
    fontSize: 16,
    marginBottom: 20,
    marginTop: 4,
  },
  loading: {
    marginTop: 30,
  },
  message: {
    color: '#475467',
    fontSize: 16,
    marginTop: 12,
    textAlign: 'center',
  },
});
