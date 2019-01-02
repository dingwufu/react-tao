import * as React from 'react';
import Slider from 'react-slick';

import './Slide.scss';

interface PosterSlide {
  data: Array<{
    image: string
  }>
}

const PosterSlide = ({data}: PosterSlide) => {
  let settings = {
    dots: true,
    // autoplay: true,
    className: 'poster-slide',
    dotsClass: 'dots'
  };
  return (
    <Slider {...settings}>
      {data.map(({image}, index) => (
        <div key={image}>
          <img className="img" src={image} alt=""/>
        </div>
      ))}
    </Slider>
  );
};

export default PosterSlide;
