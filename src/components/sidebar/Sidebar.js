import React from "react";
import classNames from "classnames";
import "antd/dist/antd.css";
import "./Sidebar.css";
import { useHistory } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import { GiAbstract063, GiJigsawPiece } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";

function Sidebar(props) {
  const { sidebarOpen } = props;
  const history = useHistory();
  const goDashboard = () => history.push("/");
  const goComponents = () => history.push("/components");
  const goFragments = () => history.push("/fragments");

  return (
    <div className={classNames("sidebar", { nonVisible: !sidebarOpen })}>
      <div className="logo d-flex justify-content-between">
        <div className="logo-name">
          <img
            src="https://cdn.glitch.com/af45ea57-cc17-431c-a29e-191393077cfe%2Flogo.4dbbacd2.svg?v=1597420315594"
            alt=""
          />
          Accelerate
        </div>
      </div>
      <div className="vertical-menu">
        <ul>
          <li>
            <a id="dashboard" href="/" onClick={goDashboard}>
              <FaTachometerAlt className="icon-container" />
              <span>Dashboard</span>
            </a>
          </li>
          <li>
            <a id="components" href="/components" onClick={goComponents}>
              <GiAbstract063 className="icon-container" />
              <span>Components</span>
            </a>
          </li>
          <li>
            <a id="fragments" href="/fragments" onClick={goFragments}>
              <GiJigsawPiece className="icon-container" />
              <span>Fragments</span>
            </a>
          </li>
          <li>
            <a id="settings" href="/">
              <IoSettingsOutline className="icon-container" />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
