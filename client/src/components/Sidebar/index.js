import React from "react";
import Logo from "../../assets/logo.png";

const Sidebar = () => {
  return (
    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
      <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="menu"
        >
          <a class="navbar-brand" href="/loginsignup">
            <img src={Logo} height="125" alt="h2h" loading="lazy" />
          </a>
          <li>
            <ul
              class="collapse show nav flex-column ms-1"
              id="submenu1"
              data-bs-parent="#menu"
            >
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  <i class="fa fa-pencil fa-fw me-3"></i>
                  <span class="d-none d-sm-inline">Write</span>
                </a>
              </li>
              <li class="w-100">
                <a href="/" class="nav-link px-0">
                  <i class="fa fa-board fa-fw me-3"></i>
                  <span class="d-none d-sm-inline">Board</span>
                </a>
              </li>
              <li class="w-100">
                <a href="#" class="nav-link px-0">
                  <i class="fa fa-heart fa-fw me-3"></i>
                  <span class="d-none d-sm-inline">Responses</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
