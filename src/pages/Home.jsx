import { createContext, useEffect, useState } from 'react';
import BookList from '../components/BookList';
import ReadingList from '../components/ReadingList';
import AddBook from '../components/AddBook';
import ReadingListCounter from '../components/ReadingListCounter';
import { getBooks } from '../services/BooksService';
export const LibraryContext = createContext();

function Home(){

    const [readingList, setReadingList] = useState([]);
    const [books, setBooks] = useState([]);
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState('');

    useEffect(() => {
        const booksFromLocal = window.localStorage.getItem("LibraryBooks");
        if (booksFromLocal) {
          setBooks(JSON.parse(booksFromLocal));
          setGenres([...new Set(JSON.parse(booksFromLocal).map(book => book.book.genre))]);
        } else {
          getBook();
        }
    
        const readingListFromLocal = window.localStorage.getItem("ReadingList");
        if (readingListFromLocal) {
          setReadingList(JSON.parse(readingListFromLocal));
        }
      }, []);
    
      async function getBook() {
        getBooks().then(books => {
          setBooks(books);
          setGenres([...new Set(books.map(book => book.book.genre))]);
          window.localStorage.setItem("LibraryBooks", JSON.stringify(books));
        });
      }

    function addToReadingList(book) {
        if (!readingList.find((item) => item.book.ISBN === book.book.ISBN)) {
          setReadingList([...readingList, book]);
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
    

    return(
                <LibraryContext.Provider value={{ books: filteredBooks, readingList, addToReadingList, removeFromReadingList, genres, setSelectedGenre, setBooks }}>
          <div className="header">
            <ReadingListCounter />
            <AddBook />
          </div>
              <div className="content">
                <BookList />
                <ReadingList />
              </div>
        </LibraryContext.Provider>
    )
}

export default Home;