import { Link } from 'react-router';
import '../css/pokemon.css';

function Pokemon({ id, name, image }) {
  return (
    <Link to={`/pokemon/${id}`} className="pokemon-link">
      <div className="pokemon-card">
        <p className="pokemon-id">#{id}</p>
        <img src={image} alt={name} className="pokemon-image" />
        <h2 className="pokemon-name">{name}</h2>
      </div>
    </Link>
  );
}

export default Pokemon;