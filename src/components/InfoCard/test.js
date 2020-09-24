import React from 'react';
import InfoCard from './index';

const InfoCardTest = ()=>(
    <div>
        <InfoCard heading={"Total Applications"} amount={4056} type={"totalApplications"}/>
        <InfoCard heading={"Approved"} amount={4056} type={"approved"}/>
        <InfoCard heading={"rejected"} amount={4056} type={"rejected"}/>
        <InfoCard heading={"toal amount loaned"} amount={4056} type={"totalAmountLoaned"}/>
    </div>
)

export default InfoCardTest;