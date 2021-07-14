import NavLink from "./NavLink";
const Header: React.FC = () => {
  return (
    <>
      <div className="header__border"></div>
      <header className="row header__container">
        <div className="row header__icon">
          <span>
            <i className="fa fa-heart"></i>
          </span>
          <p>Near Perfect Mood</p>
        </div>
        <div className="nav-bar__box">
          <ul className="row nav-bar__list">
            <li>
              <NavLink
                name="Products"
                link="https://portfolio-app-vuong.vercel.app/"
              />
            </li>
            <li>
              <NavLink
                name="Pricing"
                link="https://portfolio-app-vuong.vercel.app/"
              />
            </li>
            <li>
              <NavLink
                name="Documentation"
                link="https://portfolio-app-vuong.vercel.app/"
              />
            </li>
            <li>
              <NavLink
                name="Community"
                link="https://portfolio-app-vuong.vercel.app/"
              />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Header;
