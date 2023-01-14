import { CardContainer, Text } from "./Card.styled";

export default function Card({ name, weight, types }) {
  return (
    <CardContainer key={name}>
      <div className="div-pokemon-img">
        <img
          src={`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`}
          alt={`${name} gif`}
        />
      </div>
      <div className="div-pokemon-name">
        <Text fontSize="2rem" color="#0c0c0c" fontWeight="700">
          {name}
        </Text>
        <Text fontSize="1.6rem" color="#0c0c0c" fontWeight="400">
          Weight: {weight / 10} kg
        </Text>
      </div>
      <div className="div-pokemon-type">
        {types.map((type) => (
          <Text key={name}>{type.type.name}</Text>
        ))}
      </div>
    </CardContainer>
  );
}
