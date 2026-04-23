import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../css/pokemonDetails.css';

function PokemonDetails() {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemonDetails() {
      try {
        setLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();

        setPokemon({
          id: data.id,
          name: data.name,
          image:
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map((item) => item.type.name),
          abilities: data.abilities.map((item) => item.ability.name),
          stats: data.stats.map((item) => ({
            name: item.stat.name,
            value: item.base_stat,
          })),
        });
      } catch (error) {
        console.error('Error fetching pokemon details:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchPokemonDetails();
  }, [id]);

  if (loading) {
    return <p className="pokemon-details-loading">Loading Pokémon details...</p>;
  }

  if (!pokemon) {
    return <p className="pokemon-details-loading">Pokemon not found.</p>;
  }

  return (
    <section className="pokemon-details-page">
      <div className="pokemon-details-card">
        <p className="pokemon-details-id">#{pokemon.id}</p>
        <h1 className="pokemon-details-name">{pokemon.name}</h1>

        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="pokemon-details-image"
        />

        <p><strong>Height:</strong> {pokemon.height}</p>
        <p><strong>Weight:</strong> {pokemon.weight}</p>
        <p><strong>Types:</strong> {pokemon.types.join(', ')}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.join(', ')}</p>

        <div className="pokemon-stats">
          <h2>Stats</h2>
          {pokemon.stats.map((stat) => (
            <p key={stat.name}>
              <strong>{stat.name}:</strong> {stat.value}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PokemonDetails;