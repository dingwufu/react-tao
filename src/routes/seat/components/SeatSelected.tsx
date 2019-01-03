import * as React from 'react';
import './SeatSelected.scss';

interface P {
  data?: any
}
const SeatSelected = ({data}: P) => {
  return (
    <div className="seat-selected">
      <ul className="list">
        <li className="item movie-ticket">
          <div className="seat-detail">
            <div className="pos">5排03座</div>
            <div className="price">
              <i className="icon-tag">卡</i> 33元
            </div>
          </div>
          <i className="icon-close"/>
        </li>
        <li className="item movie-ticket">
          <div className="seat-detail">
            <div className="pos">5排03座</div>
            <div className="price">33元</div>
          </div>
          <i className="icon-close"/>
        </li>
      </ul>
      <div className="buy-btn">33元 确认选座</div>
    </div>
  );
};

export default SeatSelected;
