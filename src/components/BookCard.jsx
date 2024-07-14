
import '../components/BookCard.css'


function BookCard({book, addToReadingList}){



   



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