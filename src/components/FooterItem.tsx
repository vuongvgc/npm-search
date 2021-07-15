interface typeProps {
  navList: { name: string; link: string }[];
  header: string;
}
const FooterItem: React.FC<typeProps> = ({ navList, header }) => {
  return (
    <div className="footer-item__box">
      <h3 className="footer-item__header">{header}</h3>
      <ul>
        {navList.map((nav) => {
          return (
            <li key={nav.name}>
              <a href={nav.link} className="footer-item__nav">
                {nav.name}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default FooterItem;
