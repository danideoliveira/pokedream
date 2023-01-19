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
  HomeText: palette.white.mid,

  // STATS
  statsHp: palette.green.mid,
  statsAtk: palette.yellow.light,
  statsDef: palette.purple.light,
  statsSpAtk: palette.orange.light,
  statsSpDef: palette.blue.light,
  statsSpeed: palette.green.dark,
};
