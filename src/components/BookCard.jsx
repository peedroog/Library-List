import {useEffect, useState} from 'react'
import '../components/BookCard.css'
import {booksMock} from '../mocks/books'

function BookCard(){

const [books, setBooks] = useState([]);
const [readingList, setReadingList] = useState([]);


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



    return(
<div className="main">

      <div className="book-card">
        <h1>{books.length} libros en la lista</h1>
        <h3>{readingList.length} en la lista de lectura</h3>
        <div className="book-card__image">
          {books.map((book) => (
            <img
              key={book.book.ISBN}
              src={book.book.cover}
              alt={book.book.title}
              className="book-card__cover"
              onClick={() => addToReadingList(book)}
            />
          ))}
        </div>
      </div>
      <div className="reading-list">
        <h2>Lista de lectura</h2>
        {readingList.map((book) => (
          <div key={book.book.ISBN} className="reading-list__item">
            <img src={book.book.cover} className="book-card__cover" onClick={() => removeFromReadingList(book)}/>
          </div>
        ))}
      </div>
    </div>
    );
}

export default BookCard;