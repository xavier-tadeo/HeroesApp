import { getHeroByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "../HeroCard/HeroCard";

export const HerosList = ({ publisher }: any) => {
  const heroes = getHeroByPublisher(publisher);

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-3">
        {heroes.map((heroe) => (
          <HeroCard key={heroe.id} {...heroe} />
        ))}
      </div>
    </>
  );
};
