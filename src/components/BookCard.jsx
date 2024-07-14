import { useContext } from 'react';
import { LibraryContext } from '../App';
import '../components/BookCard.css'

function BookCard({book}){

  const {addToReadingList} = useContext(LibraryContext);
    return(
            <img
              src={book.book.cover}
              alt={book.book.title}
              className="book-card__cover"
              onClick={() => addToReadingList(book)}
            />
    );
}

export default BookCard;