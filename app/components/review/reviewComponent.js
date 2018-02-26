import React from 'react';
import {ReviewPartOne} from '../review/reviewPartOne';
import {ReviewPartTwo} from '../review/reviewPartTwo';
import {ReviewFinish} from '../review/reviewFinish';
import '../../styles/review/review.css';

export class ReviewComponent extends React.Component{
    constructor(props)
    {
        super(props)
        this.state = {revState : 0}
        this.handleRevClose = this.handleRevClose.bind(this);
        this.handleRevAccept = this.handleRevAccept.bind(this);
    }
    handleRevAccept()
    {
        this.setState({revState : this.state.revState+1})
    }
    handleRevClose()
    {
        this.props.handleRevClose();
    }

    render()
    {
        console.log(this.state.revState);
        var active = null;
        var rev_heading = '';
        if(this.state.revState == 0)
        { active =  
            <div className="rev-active">
                <ReviewPartOne />
            </div>
            rev_heading = "UNOS KODA";
        }
        else if(this.state.revState == 1)
           { active =  
            <div className="rev-active">
                <ReviewPartTwo />
            </div>
            rev_heading = "VAŠA RECENZIJA";
        }
        else
        {active =  
        <div className="rev-active">
            <ReviewFinish />
        </div>
        rev_heading = "KRAJ";    
        }
        return(
            <div className="rev-wrap">
                <div className="rev-heading">
                    <h5 className="rev-h">{rev_heading}</h5>
                </div>

                {active}

                <div className={this.state.revState != 2 ? "rev-buttons" : "hide-buttons"}>
                    <button onClick= {this.handleRevClose} className = "rev-btn-close">ODUSTANI</button>
                    <button onClick= {this.handleRevAccept} className = "rev-btn-accept">DALJE</button>
                </div>
                <div className={this.state.revState == 2 ? "rev-finish-button" : "hide-buttons"}>
                    <button onClick= {this.handleRevClose} className = "rev-btn-accept">ZAVRŠI</button>
                </div>
                
            </div>
        )
    }
}