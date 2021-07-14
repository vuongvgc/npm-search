import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../states';
import { useActions } from "../hooks/useActions";
const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.searchRepositories(term))
    searchRepositories(term);
  };
  const { loading, data, error } = useTypedSelector(
    (state) => state.repositories
  );
  return (
    <div>
      <h2>Search For A Package</h2>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading....</h3>}
        {!error &&
          !loading &&
          data.map((item: any) => {
            return <p key={item}>{item}</p>;
          })}
      </div>
    </div>
  );
};
export default RepositoriesList;
