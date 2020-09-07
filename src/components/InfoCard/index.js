import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt, faCheck, faClipboardList, faDollarSign} from '@fortawesome/free-solid-svg-icons'
import '../../styles/InfoCard.css'

const InfoCard = ({heading, amount, type})=>{
    return(
        
        <div className={
            type === "totalApplications"
                            ? 'info-card first-border'
                            : type === "approved"
                                ? 'info-card second-border'
                                : type === "rejected"
                                    ? 'info-card third-border'
                                    : type === "totalAmountLoaned"
                                        ? 'info-card fourth-border'
                                        : 'info-card first-border'
        }>
            <div className="info-card-row card-body">
                <div>
                    <div
                        className={
                            type === "totalApplications"
                            ? 'first-option'
                            : type === "approved"
                                ? 'second-option'
                                : type === "rejected"
                                    ? 'third-option'
                                    : type === "totalAmountLoaned"
                                        ? 'fourth-option'
                                        : 'first-option'

                            }
                    >
                        {heading}
                    </div>
                    <div className="amount">{amount}</div>
                </div>
                <div>
                    {type === "totalApplications" 
                    ? <div><FontAwesomeIcon icon={faPencilAlt} className="icons" size="lg"/></div>
                    : type === "approved"
                        ? <div><FontAwesomeIcon icon={faCheck} className="icons" size="lg" /></div>
                        : type === "rejected"
                            ? <div><FontAwesomeIcon icon={faClipboardList} className="icons" size="lg" /></div>
                            : type === "totalAmountLoaned"
                                ? <div><FontAwesomeIcon icon={faDollarSign} className="icons" size="lg" /></div>
                                : null
                    }
                </div>
            </div>
        </div>
    )
}
export default InfoCard;