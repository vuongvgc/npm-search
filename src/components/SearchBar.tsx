const SearchBar: React.FC = () => {
  return (
    <section className="row search-bar__box">
      <div className="col-1 logo__box">
        <img src="./img/npm.png" alt="NPM LOGO" />
      </div>
      <div className="col-7">
        <form className="col-10 row search-form">
          <div className="col-9 input-form">
            <span className="col-2">
              <i className="fa fa-search"></i>
            </span>
            <input
              className="col-8 input-form-text"
              placeholder="Search Packages"
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
