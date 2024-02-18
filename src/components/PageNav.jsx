//  <link to="/">Home</link> Note: dont have feature to see visited link
//  <NavLink to="/">Home</NavLink> Note: will show visited links

import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
function PageNav() {
  console.log(styles);
  return (
    <nav className="style">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
