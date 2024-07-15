import { useContext } from "react";
import BookCard from "./BookCard";
import { LibraryContext } from "../App";
import GenreFilter from "./GenreFilter";

function BookList() {
  const { books } = useContext(LibraryContext);

  return (
    <div className="book-list">
      <GenreFilter />
      <div className="book-card__image">
        {books.map((book) => (
          <BookCard book={book} key={book.book.ISBN} />
        ))}
      </div>
    </div>
  );
}

export default BookList;
