import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  },
  {
    name: 'Products',
    to: '/product-list',
    exact: false
  }

];

const MenuLink = ({ label, to, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
}

class Menu extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-default">
        
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>

      </div>
    );
  }

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return <MenuLink
          key={index}
          label={menu.name}
          to={menu.to}
          exact={menu.exact}
        />
      });
    }
    return result;
  }
}

export default Menu;