import { useContext } from 'react';
import { LibraryContext } from '../App';

function GenreFilter() {
  const { genres, setSelectedGenre } = useContext(LibraryContext);

  return (
    <div className="genre-filter">
      <label htmlFor="genre-select">Filtrar por género:</label>
      <select id="genre-select" onChange={(e) => setSelectedGenre(e.target.value)}>
        <option value="">Todos los géneros</option>
        {genres.map((genre) => (
          <option value={genre} key={genre}>{genre}</option>
        ))}
      </select>
    </div>
  );
}

export default GenreFilter;
