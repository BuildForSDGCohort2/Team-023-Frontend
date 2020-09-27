import React from 'react';

function CreditScore(props) {
  const { score } = props;

  if (750 <= score) {
    return <span class="badge badge-success">excellent</span>;
  } else if (650 <= score && score <= 749) {
    return <span class="badge badge-info">good</span>;
  } else if (500 <= score && score <= 649) {
    return <span class="badge badge-warning">average</span>;
  } else if (score <= 499) {
    return <span class="badge badge-danger">poor</span>;
  } else {
    return <div></div>
  }
}

export default CreditScore;