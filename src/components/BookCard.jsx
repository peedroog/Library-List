import { useContext } from 'react';
import { LibraryContext } from '../App';

function BookCard({ book }) {
  const { addToReadingList, readingList } = useContext(LibraryContext);

  // Verificar si el libro está en la lista de lectura
  const isInReadingList = readingList.some((item) => item.book.ISBN === book.book.ISBN);

  return (
    <img
      src={book.book.cover}
      alt={book.book.title}
      className={`book-card__cover ${isInReadingList ? 'book-card__cover--opaque' : ''}`}
      onClick={() => addToReadingList(book)}
      data-id={book.book.ISBN} // Asegúrate de que cada imagen tenga un atributo data-id
    />
  );
}

export default BookCard;
