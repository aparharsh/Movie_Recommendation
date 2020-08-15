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
    return(
        <div className="URboxes">
            <div className="URHeader">User Reviews</div>
        <Slider {...settings}>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                     {props.data.review[0]}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.review[1]}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.review[2]}    
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.review[3]}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.review[4]}
                        </div>
                        <div className="URRatings">
                            Rating
                        </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                    {props.data.review[5]}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
        </Slider>
        </div>

    );
}

export default UserReview;