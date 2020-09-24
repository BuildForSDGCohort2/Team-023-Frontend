import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content"></div>
      </div>
    </div>
  );
}

export default Dashboard;
