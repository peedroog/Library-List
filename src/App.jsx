import './App.css';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import { createContext, useEffect, useState } from 'react';
import ReadingListCounter from './components/ReadingListCounter';
import { getBooks } from './services/BooksService';

export const LibraryContext = createContext();

function App() {
  const [readingList, setReadingList] = useState([]);
  const [books, setBooks] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  useEffect(() => {
    const booksFromLocal = window.localStorage.getItem("ReadingList");
    if (booksFromLocal) {
      setReadingList(JSON.parse(booksFromLocal));
    }
    getBook();
  }, []);

  async function getBook() {
    getBooks().then(books => {
      setBooks(books);
      setGenres([...new Set(books.map(book => book.book.genre))]); // Extract unique genres
    });
  }

  function addToReadingList(book) {
    if (!readingList.find((item) => item.book.ISBN === book.book.ISBN)) {
      setReadingList([...readingList, book]);
      console.log(readingList);
      window.localStorage.setItem("ReadingList", JSON.stringify([...readingList, book]));
    } else {
      alert("El libro " + book.book.title + " ya está en la lista de lectura.");
    }
  }

  function removeFromReadingList(b) {
    const updatedList = readingList.filter((book) => book.book.ISBN !== b.book.ISBN);
    setReadingList(updatedList);
    window.localStorage.setItem("ReadingList", JSON.stringify(updatedList));
  }

  const filteredBooks = selectedGenre
    ? books.filter(book => book.book.genre === selectedGenre)
    : books;

  return (
    <div className="App">
      <LibraryContext.Provider value={{ books: filteredBooks, readingList, addToReadingList, removeFromReadingList, genres, setSelectedGenre }}>
        <ReadingListCounter />
        <div className="content">
          <BookList />
          <ReadingList />
        </div>
      </LibraryContext.Provider>
    </div>
  );
}

export default App;
