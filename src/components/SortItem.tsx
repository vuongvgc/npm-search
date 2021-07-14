interface propsType {
  name: string;
  color: String;
}

const SortItem: React.FC<propsType> = ({ name, color }) => {
  const style = {
    borderBottom: `1px solid ${color}`,
    padding: "4px 0",
  };
  return <p style={style}>{name}</p>;
};
export default SortItem;
