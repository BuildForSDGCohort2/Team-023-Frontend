import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
import PageHeading from '../PageHeading/PageHeading';
import InfoCard from '../InfoCard/InfoCard';
import DonutChart from '../DonutChart/DonutChart';
import LineChart from '../LineChart/LineChart';
import LoanApplications from '../LoanApplications/LoanApplications';

function Dashboard() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Topbar />

          <div className="container-fluid">
            <PageHeading view="Dashboard" />

            <div className="row">
              <InfoCard
                text="Total Applications"
                value="4,620"
                icon="pencil"
                color="primary"
              />
              <InfoCard
                text="Approved"
                value="3,200"
                icon="check"
                color="success"
              />
              <InfoCard
                text="Rejected"
                value="2,560"
                icon="exclamation"
                color="danger"
              />
              <InfoCard
                text="Total amount loaned"
                value="1,300,000"
                icon="usd"
                color="primary"
              />
            </div>
            <div className="row">
              <div className="col-xl-8 col-lg-7">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Loan applications over time
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="chart-area">
                      <LineChart />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-5">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Loan amounts
                    </h6>
                  </div>

                  <div className="card-body">
                    <div className="chart-pie pt-4 pb-2">
                      <DonutChart />
                    </div>
                    <div className="mt-4 text-center small">
                      <span className="mr-2">
                        <i className="fa fa-circle text-primary"></i> Amount
                        disbursed
                      </span>
                      <span className="mr-2">
                        <i className="fa fa-circle text-success"></i> Amount
                        recovered
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12 col-lg-12">
                <div className="card shadow mb-4">
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Loan applications
                    </h6>
                  </div>
                  <div className="card-body">
                      <LoanApplications />
                  </div>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
