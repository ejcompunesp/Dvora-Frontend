import React from "react";

import { routes as dashRoutes } from "../../views/dashboard/routes";

import { SidebarContainer } from "./styles/menus";
import { Link } from "react-router-dom";

export default function Siderbar() {
  return (
    <SidebarContainer>
      <ul>
        {dashRoutes.map((route, idx) => {
          const isActive = route.active(route.path);
          if (isActive) {
            return (
              <li key={idx}>
                {!route.invisible &&
                  <Link to={route.path} className="active">
                    {" "}
                    {route.icon}
                  </Link>
                }
              </li>
            );
          }
          return (
            <div key={idx}>
              {!route.invisible &&
                <li >
                  <Link to={route.path}> {route.icon}</Link>
                </li>
              }
            </div>
          );
        })}
      </ul>
    </SidebarContainer>
  );
}
