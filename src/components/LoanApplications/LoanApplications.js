import React from "react";
import StatusButtons from "./StatusButtons";
import CreditScore from "./CreditScore";

function LoanApplications() {
  return (
    <div className="table-responsive">
      <table
        class="table table-bordered table-borderless table-hover"
        id="dataTable"
        width="100%"
        cellspacing="0"
      >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Amount</th>
            <th scope="col">Credit Score</th>
            <th scope="col">Status</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>50,000</td>
            <td>
              <CreditScore score={800} />
            </td>
            <td>pending</td>
            <td>
              <StatusButtons status="pending" />
            </td>
          </tr>
          <tr>
            <td>Mark</td>
            <td>550,000</td>
            <td>
              <CreditScore score={720} />
            </td>
            <td>approved</td>
            <td>
              <StatusButtons status="approved" />
            </td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>30,000</td>
            <td>
              <CreditScore score={500} />
            </td>
            <td>rejected</td>
            <td>
              <StatusButtons status="rejected" />
            </td>
          </tr>
          <tr>
            <td>Larry</td>
            <td>100,000</td>
            <td>
              <CreditScore score={350} />
            </td>
            <td>pending</td>
            <td>
              <StatusButtons status="pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default LoanApplications;
