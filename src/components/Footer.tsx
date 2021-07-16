import FooterItem from "./FooterItem";
import CopyRight from "./Copyright";
const navListSupport = [
  { name: "Help", link: "https://docs.npmjs.com/" },
  { name: "Community", link: "https://docs.npmjs.com/" },
  { name: "Advisories", link: "https://docs.npmjs.com/" },
  { name: "Status", link: "https://docs.npmjs.com/" },
  { name: "Contact npm", link: "https://docs.npmjs.com/" },
];
const navListCompany = [
  { name: "About", link: "https://docs.npmjs.com/" },
  { name: "Blog", link: "https://docs.npmjs.com/" },
  { name: "Press", link: "https://docs.npmjs.com/" },
];
const navListTermsPolicies = [
  { name: "Policies", link: "https://docs.npmjs.com/" },
  { name: "Terms of Use", link: "https://docs.npmjs.com/" },
  { name: "Advisories", link: "https://docs.npmjs.com/" },
  { name: "Code of Conduct", link: "https://docs.npmjs.com/" },
  { name: "Privacy", link: "https://docs.npmjs.com/" },
];
const Footer: React.FC = () => {
  return (
    <>
      <footer className="footer__box">
        <div className="row">
          <div className="col-1 footer-icon__box">
            <div className="footer-icon__item">
              <i className="fab fa-npm"></i>
            </div>
            <div className="footer-icon__item">
              <i className="fab fa-github"></i>
            </div>
          </div>
          <div className="col-3">
            <FooterItem navList={navListSupport} header="Support" />
          </div>
          <div className="col-3">
            <FooterItem navList={navListCompany} header="Company" />
          </div>
          <div className="col-3">
            <FooterItem
              navList={navListTermsPolicies}
              header="Terms & Policies"
            />
          </div>
        </div>
        <CopyRight />
      </footer>
      <div className="header__border"></div>
    </>
  );
};
export default Footer;
