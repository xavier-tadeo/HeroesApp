import { Link } from "react-router-dom";
import { IHero } from "../../interfaces/interfaces";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}: IHero) => {
  return (
    <div className="col">
      <div className="card">
        <div className="row mo-gutters">
          <div className="col-4">
            <img
              src={`/assets/${id}.jpg`}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="crad-text">{alter_ego}</p>
              {alter_ego !== characters && (
                <p className="text-muted">{characters}</p>
              )}
              <p className="card-text">
                {" "}
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>Mas...</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
