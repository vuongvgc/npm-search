import { useTypedSelector } from "../hooks/useTypedSelector";
import { Pagination } from "antd";
import { Spin } from "antd";
import SortItem from "./SortItem";
import { RepositoriesItem } from "./RepositoriesItem";
import { useState } from "react";
const RepositoriesList: React.FC = () => {
  const { loading, data, error } = useTypedSelector(
    (state) => state.repositories
  );
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const onChange = (page: number, pageSize: any) => {
    setCurrent(page);
    setPageSize(pageSize);
  };
  return (
    <section className="search-result__box">
      <div className="result__box">
        <div>
          <p className="result-status">{data.length} packages found</p>
        </div>
        {data.length ? (
          <div>
            <Pagination
              current={current}
              onChange={onChange}
              total={data.length}
              pageSize={5}
            />
          </div>
        ) : (
          ""
        )}
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
          {loading && (
            <div className="loading__box">
              <Spin tip="Loading..."></Spin>
            </div>
          )}
          {!error &&
            !loading &&
            data
              .slice((current - 1) * pageSize, current * pageSize)
              .map((item: any) => {
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
          {data.length ? (
            <div>
              <Pagination
                current={current}
                onChange={onChange}
                total={data.length}
                pageSize={5}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
};
export default RepositoriesList;
