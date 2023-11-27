import { NavLink, Outlet } from "react-router-dom";

export function AdminLayout() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <NavLink className={"nav-link"} to={"/"}>
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={"nav-link"} to={"/products"}>
                  Products
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={"nav-link"} to={"/contact"}>
                  Contacts
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className={"nav-link"} to={"/login"}>
                  Connexion
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Outlet></Outlet>
      </div>
    </>
  );
}
