import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useBooks } from '../context/BooksContext';

export default function SearchBar() {
  const { search, searchBooks, setSearch } = useBooks();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ex: Harry Potter"
        value={search}
        onChangeText={setSearch}
        onSubmitEditing={searchBooks}
        returnKeyType="search"
      />

      <TouchableOpacity style={styles.button} onPress={searchBooks}>
        <Text style={styles.buttonText}>Buscar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderColor: '#d0d5dd',
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 12,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#1f6feb',
    borderRadius: 8,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
