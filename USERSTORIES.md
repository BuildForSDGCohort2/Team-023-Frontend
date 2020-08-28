## LoanDistro - User Stories

For an MVP we will have the following user stories for the _service provider_, _loanee_ and _admin_:

**As a microfinance and loans service provider, I should be able to**
1. signup and get a unique base URL pointing to all my resources e.g _uniquemfb.loandistro.com_
2. signin and be shown a dashboard that displays data over a period (say last week) including
    * number of loan applications
    * number of rejected applications
    * number of approved applications
    * total amount loaned within the period
    * percentage of loans recovered
    * percentage of loans outstanding
    * a trend in the number of applications within the period
    * a trend in amounts disbursed
    * a trend in amounts recovered
3. pick a different period (e.g last 30 days) to se above data with currrently selected period
4. click a button to display a list of current loan applications and their credit scores
5. click a button to approve or cancel a loan application on the list.

**As a new loan applicant I should be able to**
1. apply for a loan using a service providers unique URL e.g _uniquemfb.loandistro.com/apply_
2. be informed of the status of my loan application on multiple channels when there is a change.

**As an already existing loanee I should be able to**
1. login to a service provider's unique URL (e.g _uniquemfb.loandistro.com/login_) and be shown a mini dashboard displaying my loan data including
    * total loan amount
    * date of loan application
    * next repayment amount
    * next repayment date
    * a call-to-action to make repayment
    * a repayment schedule table showing Due date, Amount due and Status (paid or pending)
2. use the repayment call-to-action to repay an option of
    * next repayment amount
    * full repayment amount
    * custom amount
3. make repayment of selected amount by
    * using the debit/ATM card on record
    * adding a new debit/ATM card
4. add a new debit/ATM car and securely pay the next repayment

**As an admin I should be able to**
1. login to an admin dashboard and be shown important metrics including
    * number of service providers on the platform
    * number of loan applications on the platform
    * number of loans processed (approved)
    * total amount disbursed on platform