import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "../HeroCard/HeroCard";

export const HerosList = ({ publisher }: any) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <>
      <div className="card-columns">
        {heroes.map((heroe) => (
          <HeroCard key={heroe.id} {...heroe} />
        ))}
        <li></li>
      </div>
    </>
  );
};
