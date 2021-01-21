import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <NavLink to="/" exact className="item" activeClassName="active">
          <i className="icon home large"></i> Home
        </NavLink>
        <NavLink to="/todos" className="item" activeClassName="active">
          <i className="icon list ul large"></i> Todos
        </NavLink>
        <NavLink to="/about" className="item" activeClassName="active">
          <i className="icon question circle large"></i> About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
