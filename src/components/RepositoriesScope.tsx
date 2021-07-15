interface typeProps {
  scope: number;
  color: string;
  name: string;
}
const RepositoriesScope: React.FC<typeProps> = ({ scope, color, name }) => {
  const style = {
    backgroundColor: `${color}`,
    width: `${scope * 100}px`,
    height: "2px",
    margin: "0 1rem",
  };
  return (
    <div className="row scope__box">
      <p>{name}</p>
      <div style={style}></div>
    </div>
  );
};
export default RepositoriesScope;
