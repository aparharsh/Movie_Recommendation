import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import './UserReview.css';

const settings =  {
    autoplay: false,
    centerMode: true,
    centerPadding: 20,
    duration: 300,
    overScan: 1,
    slidesToShow: 4
  };

const UserReview = (props) => {
    // console.log('URProps',props.data.data.moviePage.comments)
    const p = props.data.data.moviePage.comments.map((s, idx) => {
    
        let emo;
        
        switch(s.emoji){
            case 'negative':
                emo = '😓';
                break;
            case 'somewhat negative':
                emo='☹️';
                break;
            case 'neutral':
                emo='😄';
                break;
            case 'somewhat positive':
                emo='🤩';
                break;
            case 'positive':
                emo='🔥';
        };
        
        return(
            <div key={idx}>
                    <div className="URreviewBox">
                        <div className="URTexts">
                         {s.comment}
                        </div>
                        <div className="URRatings">
                            Rating : <Emoji symbol={emo} label={s.emoji}/>
                        </div>
                    </div>
                </div>
        )
    })

    return(
        <div className="URboxes">
            <div className="URHeader">User Reviews</div>
        <Slider {...settings}>
            
            {p}
            
        </Slider>
        </div>

    );
}

export default UserReview;

// Emoji function

class Emoji extends Component {
    render(){
    return(
    <span
        className="emoji1"
        role="img"
        aria-label={this.props.label ? this.props.label : ""}
    >
        {this.props.symbol}
    </span>
    )
    }
};