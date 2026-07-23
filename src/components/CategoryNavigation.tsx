import { Link } from "react-router-dom";
import { navigationMenus } from "../data/navigation";

function CategoryNavigation() {
  return (
    <ul className="li">
      {navigationMenus.map((menu) => (
        <li className="lists dropdown" key={menu.label}>
          {menu.label}
          <ul className="dropdown-menu" style={menu.alignEnd ? { left: "auto", right: "0" } : undefined}>
            {menu.groups.map((group) => (
              <li className="dropdown-group" key={group.heading}>
                <h6 className="dropdown-header">{group.heading}</h6>
                {group.items.map((item) => <Link className="dropdown-item" key={item.path} to={item.path}>{item.label}</Link>)}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default CategoryNavigation;
