import { useTypedSelector } from "../hooks/useTypedSelector";
import PaginationResult from "./PaginationResult";
import SortItem from "./SortItem";
import { RepositoriesItem } from "./RepositoriesItem";
const RepositoriesList: React.FC = () => {
  const { loading, data, error } = useTypedSelector(
    (state) => state.repositories
  );
  console.log(data);
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
              const {
                name,
                description,
                keywords,
                links,
                publisher,
                version,
                date,
              } = item.package;
              const { quality, popularity, maintenance } = item.score.detail;
              return (
                <RepositoriesItem
                  key={item.package.name}
                  name={name}
                  description={description}
                  keywords={keywords}
                  link={links.npm}
                  publisher={publisher.username}
                  version={version}
                  date={date}
                  quality={quality}
                  popularity={popularity}
                  maintenance={maintenance}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};
export default RepositoriesList;
