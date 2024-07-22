import { useContext, useState } from "react";
import { LibraryContext } from "../pages/Home";


function AddBook() {
  const { books, setBooks } = useContext(LibraryContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    pages: "",
    genre: "",
    cover: "",
    synopsis: "",
    year: "",
    ISBN: "",
    author: {
      name: "",
      otherBooks: []
    }
  });

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setNewBook({
      title: "",
      pages: "",
      genre: "",
      cover: "",
      synopsis: "",
      year: "",
      ISBN: "",
      author: {
        name: "",
        otherBooks: []
      }
    });
  }

  function handleInputChange(event) {
    const { name, value } = event.target;
    if (name === "otherBooks") {
      setNewBook({
        ...newBook,
        author: {
          ...newBook.author,
          otherBooks: value.split(",")
        }
      });
    } else if (name in newBook.author) {
      setNewBook({
        ...newBook,
        author: {
          ...newBook.author,
          [name]: value
        }
      });
    } else {
      setNewBook({ ...newBook, [name]: value });
    }
  }

  function addBook() {
    if (checkIfValidBook(newBook)){
      const updatedBooks = [...books, { book: newBook }];
      window.localStorage.setItem("LibraryBooks", JSON.stringify(updatedBooks));
      setBooks(updatedBooks);
      closeModal();
    }
  }

  function checkIfValidBook(book){
    return Object.values(book).every(value => value);
  }

  return (
    <div className="add-book">
      <button className="add-button" title="Añadir libro" onClick={openModal}>+</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>Añadir nuevo libro</h2>
            <form>

                <input type="text" name="title" value={newBook.title} onChange={handleInputChange} placeholder="Title"/>

                <input type="number" name="pages" value={newBook.pages} onChange={handleInputChange} placeholder="Pages"/>

                <input type="text" name="genre" value={newBook.genre} onChange={handleInputChange} placeholder="Genre"/>
 
                <input type="text" name="cover" value={newBook.cover} onChange={handleInputChange} placeholder="Cover"/>

                <input type="text" name="synopsis" value={newBook.synopsis} onChange={handleInputChange} placeholder="Synpsis"/>

                <input type="number" name="year" value={newBook.year} onChange={handleInputChange} placeholder="Year"/>

                <input type="text" name="ISBN" value={newBook.ISBN} onChange={handleInputChange} placeholder="ISBN"/>

                <input type="text" name="name" value={newBook.author.name} onChange={handleInputChange} placeholder="Author name"/>

                <input type="text" name="otherBooks" value={newBook.author.otherBooks.join(",")} onChange={handleInputChange} placeholder="Otros libros (separados por ',')"/>

              {checkIfValidBook(newBook) &&(
                  <button type="button" onClick={addBook}>Añadir</button>
              )}
                
              

            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddBook;
