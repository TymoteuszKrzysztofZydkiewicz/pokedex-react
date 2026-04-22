import PokemonCard from './components/PokemonCard';

function App() {
  const pokemons = [
    { id: 1, name: 'Bulbasaur', type: 'grass' },
    { id: 4, name: 'Charmander', type: 'fire' },
    { id: 7, name: 'Squirtle', type: 'water' },
    { id: 25, name: 'Pikachu', type: 'electric' },
    { id: 39, name: 'Jigglypuff', type: 'fairy' },
    { id: 52, name: 'Meowth', type: 'normal' },
  ];

  return (
    <div className="app">
      <div className="container">
        <h1 className="page-title">Pokedex</h1>
        <p className="page-description">
          My first React Pokedex app
        </p>

        <div className="pokemon-grid">
          {pokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;