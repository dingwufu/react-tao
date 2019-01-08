import * as React from 'react';
import Slider from 'react-slick';
import './ImageSlider.scss';

interface P {
  onClose: () => void
}
interface S {
  index: number
}
class ImageSlider extends React.Component<P, S> {
  state = {
    index: 1
  };
  changeIndex = (index: number) => {
    this.setState({
      index: index + 1
    });
  }
  render() {
    const setting = {
      className: 'content',
      afterChange: this.changeIndex,
    };
    return (
      <div className="image-slider" onClick={this.props.onClose}>
        <div className="index">
          {this.state.index} / 6
        </div>
        <div className="image-slider-wrap" onClick={e => e.stopPropagation()}>
          <Slider {...setting}>
            <div className="item">
              <img src="./source/image/asset1.jpeg" alt=""/>
            </div>
            <div className="item">
              <img src="./source/image/asset2.jpeg" alt=""/>
            </div>
            <div className="item">
              <img src="./source/image/asset3.jpeg" alt=""/>
            </div>
            <div className="item">
              <img src="./source/image/asset4.jpeg" alt=""/>
            </div>
            <div className="item">
              <img src="./source/image/asset5.jpeg" alt=""/>
            </div>
            <div className="item">
              <img src="./source/image/asset6.jpeg" alt=""/>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default ImageSlider;
