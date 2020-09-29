import React from 'react';
import LogoIcon from '../../logo-icon.png';

function Sidebar() {
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        {/* <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div> */}
        <div className="sidebar-brand-icon">
          {/* <i className="fa fa-laugh-wink"></i> */}
          <img src={LogoIcon} alt="Logo icon" width="40px" />
        </div>
        <div className="sidebar-brand-text mx-3">LoanDistro</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Period</div>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <span>Today</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <span>Last week</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <span>Last month</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link collapsed" href="/">
          <span>Last year</span>
        </a>
      </li>

      <hr className="sidebar-divider d-none d-md-block" />
    </ul>
  );
}

export default Sidebar;
