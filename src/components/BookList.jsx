import BookCard from "./BookCard";

function BookList({books, addToReadingList}){
    return(
        <div className="book-card">
        <div className="book-card__image">
          {books.map((book) => (
            <BookCard book={book} addToReadingList={addToReadingList} key={book.book.ISBN}/>
          ))}
        </div>
      </div>
    );
}

export default BookList;