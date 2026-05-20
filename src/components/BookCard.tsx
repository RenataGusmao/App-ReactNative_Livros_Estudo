import { Image, StyleSheet, Text, View } from 'react-native';
import { Book } from '../types/book';

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <View style={styles.card}>
      {book.coverUrl ? (
        <Image source={{ uri: book.coverUrl }} style={styles.cover} />
      ) : (
        <View style={styles.emptyCover}>
          <Text style={styles.emptyCoverText}>Sem capa</Text>
        </View>
      )}

      <View style={styles.info}>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.text}>Autor: {book.author}</Text>
        <Text style={styles.text}>Ano: {book.year}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
    flexDirection: 'row',
    marginBottom: 12,
    padding: 12,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  cover: {
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    height: 110,
    width: 75,
  },
  emptyCover: {
    alignItems: 'center',
    backgroundColor: '#e5e7eb',
    borderRadius: 6,
    height: 110,
    justifyContent: 'center',
    width: 75,
  },
  emptyCoverText: {
    color: '#667085',
    fontSize: 12,
    textAlign: 'center',
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 12,
  },
  title: {
    color: '#101828',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    color: '#475467',
    fontSize: 14,
    marginBottom: 4,
  },
});
