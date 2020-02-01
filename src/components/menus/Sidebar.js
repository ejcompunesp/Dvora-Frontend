import React from "react";

import { routes as dashRoutes } from "../../views/dashboard/routes";

import { SidebarContainer } from "./styles/menus";
import { Link } from "react-router-dom";

export default function Siderbar() {
  console.log(dashRoutes);
  return (
    <SidebarContainer>
      <ul>
        {dashRoutes.map((route, idx) => {
          const isActive = route.active(route.path);
          console.log(isActive); 
          if (isActive) {
            
            return (
              <li key={idx}>
                <Link to={route.path} className="active">
                  {" "}
                  {route.icon}
                </Link>
              </li>
            );
          }
          return (
            <li key={idx}>
              <Link to={route.path} >
                {" "}
                {route.icon}
              </Link>
            </li>
          );
        })}
      </ul>
    </SidebarContainer>
  );
}
