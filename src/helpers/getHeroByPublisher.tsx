import { dataheros } from "../data/dataheros";

export const getHeroByPublisher = (publisher: string) => {
  const validPublisher = ["DC Comics", "Marvel Comics"];

  if (!validPublisher.includes(publisher)) {
    throw new Error(`${publisher} is not a valid publisher`);
  }

  return dataheros.filter((heroe) => heroe.publisher === publisher);
};
