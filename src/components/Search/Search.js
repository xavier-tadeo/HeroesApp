import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { getHerosByName } from "../../helpers/getHerosByName";
import { useForm } from "../../hooks/useForm";
import { HeroCard } from "../HeroCard/HeroCard";
import { useMemo } from "react";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

  const [values, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = values;

  const heroFilter = useMemo(() => getHerosByName(q), [q]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <hr />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={handleInputChange}
              value={searchText}
            />
            <button className="btn btn-success mt-2" type="submit">
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {!q ? (
            <div className="alert alert-info">Search Hero</div>
          ) : (
            heroFilter?.length === 0 && (
              <div className="alert alert-danger">Don't have results: {q}</div>
            )
          )}

          {heroFilter?.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
