import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";

export const HerosList = ({ publisher }: any) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <>
      <h1>Hero List - {publisher}</h1>
      <ul>
        {heroes.map((heroe) => (
          <li key={heroe.id}>{heroe.superhero}</li>
        ))}
        <li></li>
      </ul>
    </>
  );
};
