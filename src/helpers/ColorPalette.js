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
    light: "#141414",
    mid: "#0e0e0c",
    dark: "#000000",
  },

  green: {
    light: "#50FF81",
    mid: "#4FFF4B",
    dark: "#33FF60",
  },

  yellow: {
    light: "#FFC800",
    mid: "#EFA83D",
  },

  orange: {
    light: "#FF6737",
  },

  red: {
    light: "#ff2424",
  },

  purple: {
    light: "#899BFF",
  },

  blue: {
    light: "#3DC5FF",
  },
};

export const colors = {
  // BODY
  bodyBackground: palette.black.light,

  // HOME
  homeBackground: palette.black.light,
  homeButton: palette.grey.mid,
  homeTitleColor: palette.white.mid,
  homeDescriptionColor: palette.white.dark,
  homeLineDivider: palette.grey.midSecondary,
  homeButtonBackground: palette.white.dark,
  homeButtonBackgroundHover: palette.red.light,
  homeButtonColor: palette.grey.dark,
  homeButtonColorHover: palette.white.mid,

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

  // POKEMON COMPARE
  versusColor: palette.grey.midSecondary,
  compareButtonColor: palette.grey.light,
  compareButtonBackground: palette.green.light,
  compareButtonBackgroundHover: palette.green.dark,
  compareButtonDisabledBackground: palette.grey.light,
  compareButtonDisabledColor: palette.grey.dark,

  // POKEMON PER PAGE
  perPageBackground: palette.yellow.light,
  perPageColor: palette.white.dark,
  perPageOptionBackground: palette.white.dark,

  // PAGINATION
  paginationOptionColor: palette.black.mid,
  paginationOptionColorHover: palette.white.mid,
  paginationOptionBackground: palette.white.dark,
  paginationOptionBackgroundHover: palette.black.mid,
  paginationOptionSelected: palette.yellow.light,
  paginationButtonColor: palette.white.dark,
  paginationButtonBorder: palette.grey.light,
  paginationButtonBackground: palette.black.dark,
  paginationScrollbarColor: palette.white.light,

  // CARDS
  cardBackground: palette.grey.dark,
  cardBackgroundHover: palette.black.mid,
  cardText: palette.white.mid,
  cardId: palette.white.dark,
  cardButton: palette.grey.mid,
  cardButtonHover: palette.grey.midSecondary,

  // STATS
  statsHp: palette.green.mid,
  statsAtk: palette.yellow.mid,
  statsDef: palette.purple.light,
  statsSpAtk: palette.orange.light,
  statsSpDef: palette.blue.light,
  statsSpeed: palette.green.dark,
  statsHigherValue: palette.green.mid,
  statsLowerValue: palette.red.light,
  statsEqualValue: palette.white.dark,

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
  modalCompareButtonDisabledBackground: palette.grey.light,
  modalCompareButtonDisabledColor: palette.grey.dark,

  // LOADER
  loaderColor: palette.yellow.light,

  // POKEMON NOT FOUND
  pokemonNotFoundColor: palette.white.mid,

  // SCROLLBARS
  scrollbarDropdownBackground: palette.grey.dark,
  scrollbarDropdownColor: palette.grey.light,
  scrollbarModalBackground: palette.grey.dark,
  scrollbarModalColor: palette.grey.light,
};
