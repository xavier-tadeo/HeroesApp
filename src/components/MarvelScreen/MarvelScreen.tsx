import { HerosList } from "../HerosList/HerosList";

export const MarvelScreen = () => {
  return (
    <div>
      <h1>Marvel</h1>
      <HerosList publisher={"Marvel Comics"} />
    </div>
  );
};
