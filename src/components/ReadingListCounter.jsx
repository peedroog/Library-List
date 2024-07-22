import { useContext } from "react";
import { LibraryContext } from "../pages/Home";

function ReadingListCounter(){

    const {readingList, books} = useContext(LibraryContext);
   
    return(
        <div className="reading-list-counter">
            <div className="books-letter">
                <h1>{books.length} libros en la lista</h1>
                <h3>{readingList.length} en la lista de lectura</h3>
            </div>
        </div>
        
    )
}

export default ReadingListCounter;