export interface IHero {
  id: string;
  superhero: string;
  publisher: string;
  alter_ego: string;
  first_appearance: string;
  characters: string;
}

export interface IHeroId {
  heroId: string;
}

export interface IHeroes {
  heroes: [IHero];
}
