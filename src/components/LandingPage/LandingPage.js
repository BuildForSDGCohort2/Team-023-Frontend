import React from 'react';
import Logo from '../../logo.png';

function LandingPage() {
  return (
    <div>
      <header className="py-5 mb-5" style={{ backgroundColor: "#4D65F1" }}>
        <div className="container h-100">
          <div className="row h-100 align-items-center">
            <div className="col-lg-12 text-center">
              <img src={Logo} alt="Logo" width="150px" className="img-fluid" />
              <h1 className="display-4 text-white mb-2">Easy loans management solution</h1>
              <p className="lead mb-5 text-white-50">Need lower customer acquisition costs, accurate lead qualificaton, easy principal/interest recovery? Expand your target market and get access to critical loans data without a tech team.
            </p>
              <a className="btn btn-outline-light btn-lg" href="/">Signup</a>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-8 mb-5">
            <h2>What We Do</h2>
            <hr />
            <p>LoanDistro is a plug-and-play loans management solution for microfinance and loans service providers. Create an account in under a minute and have a service that increases your access to qualified loanees and a dashboard that shows you critical loans performance data at a glance. We do the legwork for you.</p>
            <p>Our systems automatically rate and qualify every loan applicant saving you time, huge paper work and complex processing. It pays out approved loans and debits loanees bank accounts when it's time to collect so you don't have to chase them around.</p>
            <a className="btn btn-primary" href="/">Create an account</a> or <a className="" href="/">Login</a> if you already have one
          </div>
          <div className="col-md-4 mb-5">
            <h2>Contact Us</h2>
            <hr />
            <address>
              <strong>LoanDistro</strong>
              <br />Lekki/Epe Express Way
              <br />Lekki, Lagos
              <br />
            </address>
            <address>
              <a href="tel:+2348012345678">+2348012345678</a>
              <br />
              <a href="mailto:support@loandistro.ng">support@loandistro.ng</a>
            </address>
          </div>
        </div>
      </div>
      <footer class="py-3 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white">Copyright &copy; LoanDistro 2020</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage;