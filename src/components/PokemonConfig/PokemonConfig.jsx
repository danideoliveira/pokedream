import { images } from "../Images/Images";

export const PokemonConfig = {
  bug: {
    name: "bug",
    typeColor: "#596700",
    gradientColor: "linear-gradient(180deg, #50FF81 0%, #596700 100%)",
    description:
      "Embora muitos Pokémon do tipo Inseto sejam considerados fracos ou pouco populares em comparação com outros tipos de Pokémon, eles têm um papel importante na jogabilidade e na estratégia do jogo. Por exemplo, alguns Pokémon do tipo Inseto são conhecidos por suas habilidades de envenenamento, o que pode desgastar gradualmente a vida de um oponente.",
    img: images.bug,
  },
  grass: {
    name: "grass",
    typeColor: "#219118",
    gradientColor: "linear-gradient(180deg, #2eff6a 0%, #00864E 100%)",
    description:
      "Muitos dos movimentos e habilidades dos Pokémon do tipo Grama estão relacionados a plantas e natureza. Por exemplo, o movimento 'Síntese' permite que um Pokémon Grama recupere pontos de vida em um dia ensolarado, enquanto o movimento 'Raio Solar' permite que um Pokémon Grama carregue energia solar para um ataque poderoso.",
    img: images.grass,
  },
  fire: {
    name: "fire",
    typeColor: "#ec5223",
    gradientColor: "linear-gradient(180deg, #ff8f2d 0%, #FF5F2D 100%);",
    description:
      "Pokémon do tipo Fogo são representados como criaturas fortes, corajosas e determinadas, o que reflete a natureza do elemento fogo, que é frequentemente associado à paixão, à energia e à vitalidade. Essas características tornam os Pokémon do tipo Fogo uma escolha popular entre muitos jogadores e fãs da franquia Pokémon.",
    img: images.fire,
  },
  water: {
    name: "water",
    typeColor: "#0072B1",
    gradientColor: "linear-gradient(180deg, #50DFFF 0%, #0072B1 100%);",
    description:
      "De todos os tipos elementais, os Pokémon do tipo Água possuem o maior número de representantes, totalizando mais de 20% de todos os Pokémon atualmente conhecidos. Esse fato pode ser atribuído à presença abundante de água em nosso planeta, que é um dos elementos básicos para a vida.",
    img: images.water,
  },
  poison: {
    name: "poison",
    typeColor: "#9249a7",
    gradientColor: "linear-gradient(180deg, #FF5AEF 0%, #C213FF 100%)",
    description:
      "Os Pokémon do tipo Veneno têm vantagem contra os Pokémon do tipo Planta, que geralmente são frágeis a toxinas, mas são vulneráveis aos Pokémon do tipo Terra e Psíquico. Muitos Pokémon do tipo Veneno também têm habilidades que podem causar confusão ou paralisia em seus oponentes, tornando-os uma escolha estratégica interessante em batalhas.",
    img: images.poison,
  },
  dark: {
    name: "dark",
    typeColor: "#423954",
    gradientColor: "linear-gradient(180deg,#423954 0%,#0d0914 100%)",
    description:
      "Os Pokémon do tipo Dark é são frequentemente associados a trapaças e enganos, já que muitos desses Pokémon têm habilidades que envolvem enganar ou iludir seus oponentes. Por exemplo, o Pokémon Zoroark pode se transformar em outros Pokémon para confundir seus oponentes, enquanto o movimento 'Foul Play' usa a força do oponente contra si mesmo.",
    img: images.dark,
  },
  fairy: {
    name: "fairy",
    typeColor: "#d84e87",
    gradientColor: "linear-gradient(180deg, #ffa8cc 0%, #d84e87 100%)",
    description:
      "Os Pokémon do tipo Fada têm vantagem contra os Pokémon do tipo Dragão, que são frequentemente associados à força e ao poder, mas são vulneráveis aos Pokémon do tipo Aço e Veneno. Muitos Pokémon do tipo Fada também têm habilidades que podem curar aliados ou causar dano adicional a certos tipos de Pokémon, tornando-os uma escolha estratégica interessante em batalhas.",
    img: images.fairy,
  },
  ghost: {
    name: "ghost",
    typeColor: "#4F00B5",
    gradientColor: "linear-gradient(180deg, #905CFF 0%, #4F00B5 100%)",
    description:
      "Muitos dos Pokémon do tipo Fantasma são baseados em lendas e histórias de fantasmas reais. Por exemplo, o Pokémon Gengar é inspirado em um youkai (monstro folclórico japonês) chamado 'Nekomata', enquanto o Pokémon Drifloon é baseado em uma lenda japonesa sobre um balão que carrega crianças para longe.",
    img: images.ghost,
  },
  dragon: {
    name: "dragon",
    typeColor: "#6244e4",
    gradientColor: "linear-gradient(180deg, #42A4FF 0%, #CB5CFF 100%)",
    description:
      "Os Pokémon do tipo Dragão têm vantagem contra a própria espécie e são imunes a ataques do tipo Terrestre. No entanto, eles são vulneráveis aos ataques dos tipos Gelo, Fada e Dragão. Isso os torna uma escolha estratégica interessante em batalhas, especialmente contra outros Pokémon do tipo Dragão.",
    img: images.dragon,
  },
  electric: {
    name: "electric",
    typeColor: "#f59e00",
    gradientColor: "linear-gradient(180deg, #ffd12a 0%, #f59e00 100%)",
    description:
      "Os Pokémon do tipo Elétrico têm vantagem contra Pokémon do tipo Água, que são frequentemente encontrados perto de corpos d'água, onde a eletricidade é mais provável de ser conduzida. Além disso, muitos dos Pokémon do tipo Elétrico são baseados em animais como ratos, ouriços e pássaros, que têm reputação de serem rápidos e ágeis.",
    img: images.electric,
  },
  ice: {
    name: "ice",
    typeColor: "#2f98c2",
    gradientColor: "linear-gradient(180deg, #B0ECFF 0%, #63B4FF 100%)",
    description:
      "Os Pokémon do tipo Gelo têm vantagem contra Pokémon do tipo Voador, que muitas vezes habitam regiões frias e montanhosas, onde a neve e o gelo são comuns. Além disso, muitos dos ataques do tipo Gelo podem causar congelamento nos oponentes, o que pode ser uma vantagem estratégica durante as batalhas.",
    img: images.ice,
  },
  flying: {
    name: "flying",
    typeColor: "#4E6383",
    gradientColor: "linear-gradient(180deg, #8ED6FF 0%, #4E6383 100%)",
    description:
      "Os Pokémon do tipo Voador geralmente são associados à liberdade, agilidade e velocidade. Muitos dos Pokémon desse tipo são baseados em aves, como pombos, falcões e águias, que são conhecidos por serem excelentes voadores e por sua habilidade em caçar suas presas. Eles  são vulneráveis a ataques do tipo Elétrico e Gelo.",
    img: images.flying,
  },
  ground: {
    name: "ground",
    typeColor: "#AF6900",
    gradientColor: "linear-gradient(180deg, #FFCC4A 0%, #AF6900 100%)",
    description:
      "Muitos dos Pokémon desse tipo são baseados em animais como touros, hipopótamos e toupeiras, que são conhecidos por sua força e resistência. Os Pokémon do tipo Terra são únicos por sua imunidade a ataques elétricos. Isso ocorre porque eles estão enraizados na terra e não conduzem eletricidade da mesma forma que outros tipos de Pokémon.",
    img: images.ground,
  },
  rock: {
    name: "rock",
    typeColor: "#703C26",
    gradientColor: "linear-gradient(180deg, #FFAC4B 0%, #703C26 100%)",
    description:
      "Pokémon do tipo Pedra geralmente têm altos níveis de defesa e resistência, mas também são vulneráveis a muitos tipos de ataques, como água, grama, luta e solo. No entanto, muitos deles também têm habilidades que os permitem evitar ou reduzir o dano de certos tipos de ataques.",
    img: images.rock,
  },
  fighting: {
    name: "fighting",
    typeColor: "#AA1209",
    gradientColor: "linear-gradient(180deg, #FF5858 0%, #AA1209 100%)",
    description:
      "Os Pokémon do tipo Lutador são conhecidos por terem uma grande variedade de movimentos de combate. Isso pode ser visto em ataques como Cross Chop, Dynamic Punch e Focus Blast, que são capazes de causar grandes danos a outros Pokémon durante as batalhas.",
    img: images.fighting,
  },
  psychic: {
    name: "psychic",
    typeColor: "#FF239A",
    gradientColor: "linear-gradient(180deg, #FFA9F1 0%, #FF239A 100%)",
    description:
      "Os Pokémon do tipo Psíquico eram considerados os mais fortes na primeira geração dos jogos Pokémon. Isso se deve em grande parte ao fato de que havia poucos Pokémon do tipo Noturno ou Inseto para contrabalancear seus poderes, o que levou a um desequilíbrio no jogo. ",
    img: images.psychic,
  },
  steel: {
    name: "steel",
    typeColor: "#535353",
    gradientColor: "linear-gradient(180deg, #D9D9D9 0%, #535353 100%)",
    description:
      "Os Pokémon do tipo Aço geralmente têm uma fraqueza comum: o tipo Fogo. Isso ocorre porque o aço é um metal que pode ser facilmente enfraquecido pelo calor extremo. Portanto, os Pokémon do tipo Fogo podem facilmente superar a defesa de um Pokémon do tipo Aço.",
    img: images.steel,
  },
  normal: {
    name: "normal",
    typeColor: "#6B5B33",
    gradientColor: "linear-gradient(180deg, #FFF1BF 0%, #6B5B33 100%)",
    description:
      "Os Pokémon do tipo Normal têm uma mecânica especial chamada de STAB, que significa Same Type Attack Bonus (bônus de ataque do mesmo tipo). Isso significa que, quando um Pokémon do tipo Normal usa um ataque que é do mesmo tipo, ele recebe um bônus de poder adicional.",
    img: images.normal,
  },
};
