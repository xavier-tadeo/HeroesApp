import { dataheros } from "../data/dataheros";

export const getHerosByName = (name = "") => {
  if (!name) {
    return [];
  }
  name = name.toLowerCase();

  return dataheros.filter((hero) =>
    hero.superhero.toLowerCase().includes(name)
  );
};
