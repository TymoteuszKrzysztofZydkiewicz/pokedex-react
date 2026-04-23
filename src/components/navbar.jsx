import { Link } from 'react-router';
import '../css/navbar.css';


import pokemonLogo from '../img/Pokemon_logo.png';
import pokemonGoIcon from '../img/Pokémon_GO_logo.svg.png';
import pokedexIcon from '../img/pokedex.jpg'; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={pokemonLogo} alt="Pokemon Logo" className="navbar-logo" />
      </div>

      <div className="navbar-right">
        <Link to="/" className="nav-link">
          <img src={pokedexIcon} alt="Pokedex icon" className="nav-icon" />
          <span>Pokedex</span>
        </Link>

        <Link to="/pokemon-go" className="nav-link">
          <img src={pokemonGoIcon} alt="Pokemon Go icon" className="nav-icon" />
          <span>Pokemon GO</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;