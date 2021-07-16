import { Tag } from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
const CopyRight: React.FC = () => {
  return (
    <div>
      <div className="social__box">
        <a href="https://github.com/vuongvgc">
          <Tag icon={<GithubOutlined />} color="#55acee">
            Github
          </Tag>
        </a>
        <a href="https://www.facebook.com/vuongvgc/">
          <Tag icon={<FacebookOutlined />} color="#3b5999">
            Facebook
          </Tag>
        </a>
        <a href="https://www.linkedin.com/in/vuongvgc/">
          <Tag icon={<LinkedinOutlined />} color="#55acee">
            LinkedIn
          </Tag>
        </a>
      </div>
      <div className="copyright row">
        <p>
          Copyright © 2021{" "}
          <a
            className="nav-link"
            href="https://portfolio-app-vuong.vercel.app/"
          >
            <span>
              <i className="fa fa-user-tie"></i>
            </span>
            Do Minh Vuong
          </a>
          . All Rights Reserved
        </p>
      </div>
    </div>
  );
};
export default CopyRight;
