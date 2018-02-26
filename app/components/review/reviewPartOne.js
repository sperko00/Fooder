import React from 'react';
import '../../styles/review/review.css';
import '../../styles/review/revOne.css';
export class ReviewPartOne extends React.Component{

    render()
    {
        return(
            <div className="rev-one">
                <div className="rev-one-message">
                    <p>Kako bi mogli ostaviti renceziju, molimo vas da unesete kod koji ste dobili porukom nakon obavljene narudžbe. </p>

                </div>
                <div className="rev-one-code">
                   <input className="rev-code-input" type="text" placeholder="KG4F1"/>
                </div>
                <div className="rev-number">
                   <input className="rev-code-input" type="text" placeholder="Broj mobitela"/>
                </div>
            </div>
        )
    }
}