import { useTypedSelector } from "../hooks/useTypedSelector";
import PaginationResult from "./PaginationResult";
import SortItem from "./SortItem";
const RepositoriesList: React.FC = () => {
  const { loading, data, error } = useTypedSelector(
    (state) => state.repositories
  );
  return (
    <section className="search-result__box">
      <div className="result__box">
        <div>
          <p className="result-status">165853 packages found</p>
        </div>
        <div>
          <PaginationResult />
        </div>
      </div>
      <div className="result-list__box row">
        <div className="result-list__left col-2">
          <h3>Sort Package</h3>
          <ul>
            <li>
              <SortItem name="Optimal" color="#BBBBBB" />
            </li>
            <li>
              <SortItem name="Popularity" color="#29ABE2" />
            </li>
            <li>
              <SortItem name="Quality" color="#8956FF" />
            </li>
            <li>
              <SortItem name="Maintenance" color="#CB3837" />
            </li>
          </ul>
        </div>
        <div className="result-list__right col-8">
          {error && <h3>{error}</h3>}
          {loading && <h3>Loading....</h3>}
          {!error &&
            !loading &&
            data.map((item: any) => {
              return <p key={item}>{item}</p>;
            })}
        </div>
      </div>
    </section>
  );
};
export default RepositoriesList;
