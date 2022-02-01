import { dataheros } from "../data/dataheros";

export const getHeroById = (id: string) => {
  return dataheros.find((hero) => hero.id === id);
};
