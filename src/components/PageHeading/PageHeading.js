import React from "react";

function PageHeading(props) {
  const { view, period = "last month" } = props;
  
  if (view === "Dashboard") {
    return (
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          <span className="text-gray-600">Showing </span>{period}
        </h1>
        <a
          href="/"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fa fa-download text-white-50"></i> Generate Report
          </a>
      </div>
    );
  } else {
    return (
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">
          {view}
        </h1>
      </div>
    );
  }
}

export default PageHeading;