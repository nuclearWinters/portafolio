import React from 'react';
import { NavLink } from "react-router-dom"

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <NavLink onClick={props.click} to="/">Inicio</NavLink>
        </li>
        <li>
          <NavLink onClick={props.click} to="/precios">Precios</NavLink>
        </li>
        <li>
          <NavLink onClick={props.click} to="/laguna-milagros">Laguna Milagros</NavLink>
        </li>
        <li>
          <NavLink onClick={props.click} to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default sideDrawer;