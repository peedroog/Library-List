import { useContext } from "react";
import { LibraryContext } from "../pages/Home";

function ReadingList(){

    const {readingList, removeFromReadingList} = useContext(LibraryContext);
    
    return(
        <div className="reading-list">
        <h2>Lista de lectura</h2>
        {readingList.map((book) => (
          <div key={book.book.ISBN} className="reading-list__item">
            <img src={book.book.cover} className="book-card__cover" onClick={() => removeFromReadingList(book)}/>
          </div>
        ))}
      </div>

    );
}

export default ReadingList;