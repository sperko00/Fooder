import React from 'react';
import '../../styles/review/review.css';
import '../../styles/review/revFinish.css';
import {Success} from '../preview/successComponent';

export class ReviewFinish extends React.Component{

    render()
    {
        return(
            <div className="rev-finish">
                <Success />
                <p className="rev-finish-message">Vaša recenzija je zaprimljena. <br /><b>HVALA VAM!</b></p>
                
            </div>
        )
    }
}