// TODO - take into .env and use REACT_ prefix and not hardcoded
export const endpoints = {
  previousHeros: "http://localhost:5050/heros/history",
  heroSearch: "http://localhost:5050/heros/search",
};

export const navigation = [
  {
    to: "/about",
    label: "About",
  },
  {
    to: "/why",
    label: "Why",
  },
  {
    to: "/contact",
    label: "Contact",
  },
];
