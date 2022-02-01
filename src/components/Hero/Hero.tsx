import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../helpers/getHeroById";

export const Hero = () => {
  const { heroId }: any = useParams();
  const navigate = useNavigate();

  const hero = getHeroById(heroId);
  if (!hero) {
    return <Navigate to={"/"} />;
  }

  const handleReturn = () => {
    navigate(-1);
  };

  const { alter_ego, characters, first_appearance, id, publisher, superhero } =
    hero;

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img
          src={`/assets/${id}.jpg`}
          alt={superhero}
          className="img-thumbnail"
        />
      </div>

      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego:</b>
            {alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher:</b>
            {publisher}
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b>
            {first_appearance}
          </li>
        </ul>
        <h5>Characters</h5>
        <p>{characters}</p>

        <button className="btn btn-outline-info" onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  );
};
