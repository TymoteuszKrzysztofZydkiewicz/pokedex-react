import { useEffect, useState } from 'react';
import '../css/pokedex.css';
import Pokemon from './Pokemon';

function Pokedex() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const limit = 12;

  useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
        );
        const data = await response.json();

        const pokemonList = data.results.map((pokemon, index) => {
          const id = offset + index + 1;

          return {
            id,
            name: pokemon.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          };
        });

        setPokemons(pokemonList);
      } catch (error) {
        console.error('Error fetching pokemon:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [offset]);

  function handleNext() {
    setOffset((prevOffset) => prevOffset + limit);
  }

  function handlePrevious() {
    if (offset >= limit) {
      setOffset((prevOffset) => prevOffset - limit);
    }
  }

  return (
    <section className="pokedex">
      <h1 className="pokedex-title">Pokedex</h1>

      {loading ? (
        <p className="pokedex-loading">Loading Pokémon...</p>
      ) : (
        <>
          <div className="pokedex-grid">
            {pokemons.map((pokemon) => (
              <Pokemon
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.image}
              />
            ))}
          </div>

          <div className="pagination">
            <button
              className="pagination-button"
              onClick={handlePrevious}
              disabled={offset === 0}
            >
              Previous
            </button>

            <button className="pagination-button" onClick={handleNext}>
              Next
            </button>
          </div>
        </>
      )}
    </section>
  );
}

export default Pokedex;