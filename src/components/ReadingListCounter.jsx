import { useContext } from "react";
import { LibraryContext } from "../App";

function ReadingListCounter(){

    const {readingList, books} = useContext(LibraryContext);
    return(
        <div className="reading-list-counter">
            <h1>{books.length} libros en la lista</h1>
            <h3>{readingList.length} en la lista de lectura</h3>
        </div>
    )
}

export default ReadingListCounter;