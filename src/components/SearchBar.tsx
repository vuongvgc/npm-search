import { useState } from "react";
import { useActions } from "../hooks/useActions";
const SearchBar: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    searchRepositories(term);
  };
  return (
    <section className="row search-bar__box">
      <div className="col-1 logo__box">
        <img src="./img/npm.png" alt="NPM LOGO" />
      </div>
      <div className="col-7">
        <form className="col-10 row search-form" onSubmit={onSubmit}>
          <div className="col-9 input-form">
            <span className="col-2">
              <i className="fa fa-search"></i>
            </span>
            <input
              className="col-8 input-form-text"
              placeholder="Search Packages"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <button className="col-1 search-button">Search</button>
        </form>
      </div>
      <div className="col-2">
        <button className="button__box button__box-border">Sign Up</button>
        <button className="button__box">Sign In</button>
      </div>
    </section>
  );
};
export default SearchBar;
