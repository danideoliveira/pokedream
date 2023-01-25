const palette = {
  grey: {
    light: "#3F3F3F",
    mid: "#3C3C3D",
    midSecondary: "#898989",
    dark: "#1E1E1E",
  },

  white: {
    light: "#FFFFFF",
    mid: "#EFEFEF",
    dark: "#AEAEAE",
  },

  black: {
    dark: "#000000",
  },

  green: {
    light: "#50FF81",
    mid: "#4FFF4B",
    dark: "#33FF60",
  },

  yellow: {
    light: "#EFA83D",
  },

  orange: {
    light: "#FF6737",
  },

  purple: {
    light: "#899BFF",
  },

  blue: {
    light: "#3DC5FF",
  },
};

export const colors = {
  // HOME
  homeBackground: palette.grey.dark,
  homeButton: palette.grey.mid,
  homeText: palette.white.mid,

  // POKEMON LIST
  listBackground: palette.grey.mid,

  // SEARCH BAR
  searchBarBackground: palette.grey.dark,

  // SEARCH BAR - INPUT & BUTTON
  searchInputBackground: palette.grey.mid,
  searchInputColor: palette.white.dark,
  searchButtonColor: palette.white.light,
  searchButtonBackground: palette.grey.mid,

  // DROPDOWN - SELECTED ITEM
  selectedItemBackground: palette.grey.mid,
  selectedItemBackgroundHover: palette.grey.mid,
  selectedItemBorder: palette.grey.mid,
  selectedItemColor: palette.white.dark,

  // DROPDOWN - MENU
  menuBackground: palette.grey.dark,
  menuBorder: palette.grey.dark,
  menuColor: palette.white.light,

  // DROPDOWN - LIST ITEM
  listItemColor: palette.white.light,
  listItemBackgroundHover: palette.grey.midSecondary,
  listItemColorHover: palette.grey.dark,

  optionBackground: palette.grey.dark,
  optionBackgroundHover: palette.grey.mid,
  optionColor: palette.white.light,
  optionColorHover: palette.grey.dark,

  // POKEMON COMPARE
  versusColor: palette.grey.midSecondary,
  compareButtonColor: palette.grey.light,
  compareButtonBackground: palette.green.light,
  compareButtonBackgroundHover: palette.green.dark,

  // CARDS
  cardBackground: palette.grey.dark,
  cardText: palette.white.mid,
  cardId: palette.white.dark,
  cardButton: palette.grey.mid,
  cardButtonHover: palette.grey.midSecondary,

  // STATS
  statsHp: palette.green.mid,
  statsAtk: palette.yellow.light,
  statsDef: palette.purple.light,
  statsSpAtk: palette.orange.light,
  statsSpDef: palette.blue.light,
  statsSpeed: palette.green.dark,

  // MODAL
  modalBackground: palette.grey.dark,
  modalPokemonNameColor: palette.white.mid,
  modalPokemonIdColor: palette.grey.midSecondary,
  modalStatsColor: palette.white.dark,
  modalProgressBackground: palette.grey.dark,
  modalCloseButtonColor: palette.white.mid,
  modalTypeNameColor: palette.white.mid,
  modalCompareButtonBackground: palette.green.light,
  modalCompareButtonColor: palette.grey.dark,

  // LOADER
  loaderColor: palette.green.light,
};
