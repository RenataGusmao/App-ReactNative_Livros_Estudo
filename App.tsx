import { BooksProvider } from './src/context/BooksContext';
import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <BooksProvider>
      <HomeScreen />
    </BooksProvider>
  );
}
