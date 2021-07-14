interface typeProps {
  link: string;
  name: string;
}
const NavLink: React.FC<typeProps> = ({ link, name }) => {
  return (
    <a className="nav-link" href={link}>
      {name}
    </a>
  );
};
export default NavLink;
