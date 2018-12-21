import * as React from 'react';
import Slider from 'react-slick';

import './Slide.scss';

interface PosterSlide {
  data: Array<{
    img: string
  }>
}

const PosterSlide = ({data}: PosterSlide) => {
  let settings = {
    dots: true,
    autoplay: true,
    className: 'poster-slide',
    dotsClass: 'dots'
  };
  return (
    <Slider {...settings}>
      {data.map(({img}, index) => (
        <div key={index}>
          <img className="img" src={img} alt=""/>
        </div>
      ))}
    </Slider>
  );
};

export default PosterSlide;
