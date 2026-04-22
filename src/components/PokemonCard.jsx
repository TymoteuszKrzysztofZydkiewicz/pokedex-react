function PokemonCard({ id, name, type }) {
  return (
    <div className="pokemon-card">
      <p className="pokemon-id">#{id}</p>
      <h2 className="pokemon-name">{name}</h2>
      <p className="pokemon-type">Type: {type}</p>
    </div>
  );
}

export default PokemonCard;