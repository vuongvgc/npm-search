import RepositoriesScope from "./RepositoriesScope";
import { Avatar, Image } from "antd";
import { Tag } from "antd";
import { calcMonth } from "../utils/CalculatorMonth";
interface typeProps {
  name: string;
  description: string;
  keywords: string[];
  link: string;
  publisher: string;
  version: number;
  date: string;
  quality: number;
  popularity: number;
  maintenance: number;
}
export const RepositoriesItem: React.FC<typeProps> = ({
  name,
  description,
  keywords,
  link,
  publisher,
  version,
  date,
  quality,
  popularity,
  maintenance,
}) => {
  return (
    <div className="row RepositoriesItem__box">
      <div className="RepositoriesItem__right">
        <div className="row Repositories__header">
          <h3>
            <a href={link} target="_blank" rel="noreferrer">
              {name}
            </a>
          </h3>
          {keywords && name === keywords[0] && (
            <div>
              <Tag color="purple">exact match</Tag>
            </div>
          )}
        </div>
        <p className="Repositories__content">{description}</p>
        <div className="Repositories__tag">
          {keywords &&
            keywords.map((item) => {
              return (
                <Tag key={item} color="default">
                  {item}
                </Tag>
              );
            })}
        </div>
        <div className="row Repositories__author">
          <div className="Repositories__avatar">
            <Avatar
              size={22}
              shape="square"
              src={<Image src="./img/person1.jpeg" />}
            />
          </div>
          <h3>{publisher}</h3>
          <p className="Repositories__content">
            published {version} • {calcMonth(date)} months ago
          </p>
        </div>
      </div>
      <div className="RepositoriesItem__left col-1">
        <RepositoriesScope name="p" color="#29ABE2" scope={popularity} />
        <RepositoriesScope name="q" color="#8956FF" scope={quality} />
        <RepositoriesScope name="m" color="#CB3837" scope={maintenance} />
      </div>
    </div>
  );
};
