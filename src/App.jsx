import './App.css';
import BookList from './components/BookList';
import ReadingList from './components/ReadingList';
import {useEffect, useState} from 'react'
import ReadingListCounter from './components/ReadingListCounter';
import {booksMock} from './mocks/books'

function App() {

  const [readingList, setReadingList] = useState([]);
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBook();
    }, []);


  function getBook(){
    const bookFromJson = booksMock
    setBooks(bookFromJson.library)
    /*fetch('https://mpa56af7e152431ae8ac.free.beeceptor.com/data')
    .then(response => {
        if (response.ok) {
            return response.json();
        }else{
            throw new Error('Something went wrong');
        }
        })
        .then(data => setBooks(data.library))
        .catch(error => console.error("Error:", error))*/
    }

    function addToReadingList(book){
      if(!readingList.find((item) => item.book.ISBN === book.book.ISBN)){
          setReadingList([...readingList, book])
          console.log(readingList);
      }else{
          alert("El libro " + book.book.title + " ya está en la lista de lectura.")
      }
  }
  
  function removeFromReadingList(b){
      const updatedList = readingList.filter((book) => book.book.ISBN !== b.book.ISBN);
      setReadingList(updatedList);
  }
  

  return (
    <div className="App">
      <ReadingListCounter books={books} readingList={readingList}/>
      <BookList books={books} addToReadingList={addToReadingList}/>
      <ReadingList readingList={readingList} removeFromReadingList={removeFromReadingList}/>
    </div>
  );
}

export default App;
