import { images } from "../Images/Images";

export const PokemonConfig = {
  bug: { name: "bug", typeColor: "", img: images.bug },
  dark: { name: "dark", typeColor: "#5fbd58", img: images.dark },
  grass: {
    name: "grass",
    typeColor: "#5fbd58",
    gradientColor: "linear-gradient(180deg, #50FF81 0%, #00864E 100%)",
    img: images.grass,
  },
  fire: {
    name: "fire",
    typeColor: "#fba54c",
    gradientColor: "linear-gradient(180deg, #EFA83D 0%, #FF5F2D 100%);",
    img: images.fire,
  },
  poison: { name: "poison", typeColor: "#b763cf", img: images.poison },
  flying: { name: "flying", typeColor: "#a1bbec", img: images.flying },
};
