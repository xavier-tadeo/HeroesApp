import { dataheros } from "../data/dataheros";

export const getHeroById = (publisher: string) => {
  return dataheros.filter((heroe) => heroe.publisher === publisher);
};
