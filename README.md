# Busca Livros

Aplicativo simples em React Native com Expo que consome a API publica Open Library.

Projeto configurado com Expo SDK 54.

## Funcionalidades

- Busca livros pelo nome.
- Mostra titulo, autor, ano de publicacao e capa quando disponivel.
- Usa Context API para controlar busca, carregamento e resultados.

## API utilizada

```txt
https://openlibrary.org/search.json?q=nome-do-livro
```

## Estrutura

```txt
App.tsx
src/
  components/
    BookCard.tsx
    BookList.tsx
    SearchBar.tsx
  context/
    BooksContext.tsx
  screens/
    HomeScreen.tsx
  services/
    openLibraryApi.ts
  types/
    book.ts
```

## Como executar

Instale as dependencias:

```bash
npm install
```

Inicie o Expo:

```bash
npm run start
```

Depois, abra com o app Expo Go no celular ou use uma das opcoes exibidas no terminal.

Para verificar os tipos:

```bash
npm run typecheck
```
