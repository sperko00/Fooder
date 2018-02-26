import React from 'react';
import '../../styles/review/review.css';
import '../../styles/review/revTwo.css';
import restImg from '../../images/rest.jpg';
export class ReviewPartTwo extends React.Component{
    constructor(props)
    {
        super(props);
        this.getStars = this.getStars.bind(this);
    }

    getStars(rate)
    {
        let fulls = Math.floor(rate);
        let empties = 0,halfs = 0;
        if(rate - Math.floor(rate) >= 0.5)
        {
            halfs = 1;
            empties = 4 - fulls;
        }
        else
            empties = 5 - fulls;
       
        let x = [];
        for(let i=0;i<fulls;i++)
        {
            x.push( <i key = {i} className="fa fa-star rev-star"></i>);
        }
        for(let i = 5;i<halfs+5;i++)
        {
            x.push( <i key = {i} className="fa fa-star-half-o rev-star"></i>);
        }
        for(let i = 10;i<empties+10;i++)
        {
            x.push( <i key = {i} className="fa fa-star-o rev-star"></i>);
        }
        
        return x;
    }

    render()
    {
        return(
            <div className="rev-two">
                <div className="rev-image-wrap">
                    <img className="rev-img" src={restImg} />
                </div>
                <div className="rev-rest-name">
                    RESTORAN 1
                </div>
                <hr className="rev-sep"/>
                <div className="rev-name">
                <h4 className="rev-naslov">Unesite vaše ime: </h4>
                   <input className="rev-name-input" type="text" placeholder="Vaše ime"/>
                </div>
                <div className="rev-stars">
                <h4 className="rev-naslov">Odaberite željenu ocjenu: </h4>
                    {this.getStars(0)}
                </div>
                
                <div className="rev-comment">
                <h4 className="rev-naslov" >Unesite komentar: </h4>
                <textarea className="rev-comment-input" placeholder="Ovjde unesite vaš komentar..."></textarea>
                </div>
            </div>
        )
    }
}