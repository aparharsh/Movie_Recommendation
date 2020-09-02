import React from 'react';
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
    return(
        <div className="URboxes">
            <div className="URHeader">User Reviews</div>
        <Slider {...settings}>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                     {props.data.data.moviePage.comments[0].comment}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.data.moviePage.comments[1].comment}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.data.moviePage.comments[2].comment}    
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.data.moviePage.comments[3].comment}
                    </div>
                    <div className="URRatings">
                        Rating
                    </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                        {props.data.data.moviePage.comments[4].comment}
                        </div>
                        <div className="URRatings">
                            Rating
                        </div>
                </div>
            </div>
            <div>
                <div className="URreviewBox">
                    <div className="URTexts">
                    {props.data.data.moviePage.comments[4].comment}
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