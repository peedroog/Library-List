function ReadingListCounter({books, readingList}){
    return(
        <div className="reading-list-counter">
            <h1>{books.length} libros en la lista</h1>
            <h3>{readingList.length} en la lista de lectura</h3>
        </div>
    )
}

export default ReadingListCounter;