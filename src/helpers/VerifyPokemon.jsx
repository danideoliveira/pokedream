import { images } from "../components/Images/Images";

export const verifyNotifyPokemonName = (pokemonName) => {
  return verifyPokemon[pokemonName.replace(/\-/g, "")]
    ? verifyPokemon[pokemonName.replace(/\-/g, "")].newName
    : pokemonName;
};

export const verifyPokemon = {
  nidoranm: {
    newName: "nidoran",
    urlName: "nidoran",
    img: images.iconMale,
    altText: "icon male",
  },
  nidoranf: {
    newName: "nidoran",
    urlName: "nidoran-f",
    img: images.iconFemale,
    altText: "icon female",
  },
  hooh: {
    newName: "ho-oh",
    urlName: "hooh",
  },
  mrmime: {
    newName: "mr mime",
    urlName: "mrmime",
  },
  deoxysnormal: {
    newName: "deoxys",
    urlName: "deoxys",
  },
  giratinaaltered: {
    newName: "giratina",
    urlName: "giratina",
  },
  shayminland: {
    newName: "shaymin",
    urlName: "shaymin",
  },
  mimejr: {
    newName: "mime jr",
    urlName: "mimejr",
  },
  wormadamplant: {
    newName: "wormadam",
    urlName: "wormadam",
  },
  basculinredstriped: {
    newName: "basculin",
    urlName: "basculin",
  },
  darmanitanstandard: {
    newName: "darmanitan",
    urlName: "darmanitan",
  },
  meloettaaria: {
    newName: "meloetta",
    urlName: "meloetta",
  },
  keldeoordinary: {
    newName: "keldeo",
    urlName: "keldeo",
  },
  landorusincarnate: {
    newName: "landorus",
    urlName: "landorus",
  },
  tornadusincarnate: {
    newName: "tornadus",
    urlName: "tornadus",
  },
  thundurusincarnate: {
    newName: "thundurus",
    urlName: "thundurus",
  },
  aegislashshield: {
    newName: "aegislash",
    urlName: "aegislash",
  },
  zygarde50: {
    newName: "zygarde",
    urlName: "zygarde",
  },
  gourgeistaverage: {
    newName: "gourgeist",
    urlName: "gourgeist",
  },
  pumpkabooaverage: {
    newName: "pumpkaboo",
    urlName: "pumpkaboo",
  },
  meowsticmale: {
    newName: "meowstic",
    urlName: "meowstic",
  },
  lycanrocmidday: {
    newName: "lycanroc",
    urlName: "lycanroc",
  },
  oricoriobaile: {
    newName: "oricorio",
    urlName: "oricorio",
  },
  wishiwashisolo: {
    newName: "wishiwashi",
    urlName: "wishiwashi",
  },
  typenull: {
    newName: "type null",
    urlName: "typenull",
  },
  miniorredmeteor: {
    newName: "minior",
    urlName: "minior",
  },
  mimikyudisguised: {
    newName: "mimikyu",
    urlName: "mimikyu",
  },
  jangmoo: {
    newName: "jangmo-o",
    urlName: "jangmoo",
  },
  hakamoo: {
    newName: "hakamo-o",
    urlName: "hakamoo",
  },
  kommoo: {
    newName: "kommo-o",
    urlName: "kommoo",
  },
  tapukoko: {
    newName: "tapu koko",
    urlName: "tapukoko",
  },
  tapulele: {
    newName: "tapu lele",
    urlName: "tapulele",
  },
  tapubulu: {
    newName: "tapu bulu",
    urlName: "tapubulu",
  },
  tapufini: {
    newName: "tapu fini",
    urlName: "tapufini",
  },
  toxtricityamped: {
    newName: "toxtricity",
    urlName: "toxtricity",
  },
  mrrime: {
    newName: "mr rime",
    urlName: "mrrime",
  },
  eiscueice: {
    newName: "eiscue",
    urlName: "eiscue",
  },
  indeedeemale: {
    newName: "indeedee",
    urlName: "indeedee",
  },
  morpekofullbelly: {
    newName: "morpeko",
    urlName: "morpeko",
  },
  urshifusinglestrike: {
    newName: "urshifu",
    urlName: "urshifu",
  },
  basculegionmale: {
    newName: "basculegion",
    urlName: "basculegion",
  },
};