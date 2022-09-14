export const theme = {
  containerWidth: "1500px",
  font: {
    family: `'Overpass', sans-serif`,
    size: "16px",
  },
  colors: {
    primary: {
      "400": "#6b7280",
      "500": "#58baf7",
      "600": "#5286FE",
      "700": "#314f96",
      "800": "#142947",
      "900": "#111a27",
    },
    danger: {
      "400": "#f1626f",
      "500": "#e91b2e",
      "600": "#bd1b2a",
    },
    black: {
      "400": "#1c1c1d",
      "500": "#1f202a",
      "900": "#000",
    },
    white: {
      "200": "rgba(189,197,209,.2)",
      "300": "#F8F9FA",
      "400": "rgba(255, 255, 255, .7)",
      "500": "white",
    },
  },
  spacing: {
    1: ".25rem",
    2: ".5rem",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
  },
};

export const lightTheme = {
  ...theme,
  name: "light",
  background: theme.colors.white["300"],
  foreground: {
    title: theme.colors.black["900"],
    body: theme.colors.black["900"],
  },
  card: {
    title: theme.colors.black["900"],
    background: theme.colors.white["500"],
    shadow: theme.colors.white["200"],
    border: "#e7eaf3",
  },
  link: {
    default: theme.colors.white["500"],
    active: theme.colors.primary["500"],
    header: theme.colors.black["900"]
  },
  input: {
    color: theme.colors.black["900"],
  },
  address: {
    color: theme.colors.black["900"],
  }
};

export const darkTheme = {
  ...theme,
  name: "dark",
  background: theme.colors.primary["800"],
  foreground: {
    title: theme.colors.white["500"],
    body: "#c0d3df",
  },
  card: {
    title: "#e5ecf3",
    background: theme.colors.primary["900"],
    shadow: "#00000033",
    border: "#102e59",
  },
  link: {
    default: theme.colors.white["500"],
    active: theme.colors.primary["500"],
    header: "#3498db"
  },
  input: {
    color: "#e5ecf3",
  },
  address: {
    color: "#3498db"
  }
};
