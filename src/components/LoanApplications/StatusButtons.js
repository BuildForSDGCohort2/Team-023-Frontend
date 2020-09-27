import React from 'react';

function StatusButtons(props) {
  const { status } = props;

  if (status === "pending") {
    return (
      <div>
        <button class="btn btn-success btn-icon-split btn-sm mr-2">
          <span class="icon text-white-50">
            <i class="fa fa-check"></i>
          </span>
        </button>
        <button class="btn btn-danger btn-icon-split btn-sm">
          <span class="icon text-white-50">
            <i class="fa fa-times"></i>
          </span>
        </button>
      </div>
    );
  } else if(status === "approved") {
    return (
      <div>
        <button class="btn btn-success btn-icon-split btn-sm mr-2" disabled>
          <span class="icon text-white-50">
            <i class="fa fa-check"></i>
          </span>
        </button>
      </div>
    );
  } else if (status === "rejected") {
    return (
      <div>
        <button class="btn btn-danger btn-icon-split btn-sm mr-2" disabled>
          <span class="icon text-white-50">
            <i class="fa fa-times"></i>
          </span>
        </button>
      </div>
    );
  } else {
    return <div></div>
  }
}

export default StatusButtons;