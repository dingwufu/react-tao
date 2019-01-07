import * as React from 'react';
import { connect } from 'react-redux';
import { ISeat } from '../interface';
import { removeSeat } from '../actions';

import './SeatSelected.scss';

interface P {
  data: Array<ISeat>,
  onRemove: (id: string) => void,
}
const SeatSelected = ({data, onRemove}: P) => {
  return (
    <div className="seat-selected">
      <ul className="list">
        {data.map(seat => (
          <li key={seat.id} className="item movie-ticket">
            <div className="seat-detail">
              <div className="pos">{seat.rowIndex}排{seat.colIndex}座</div>
              <div className="price">
                <i className="icon-tag">卡</i> 33元
              </div>
            </div>
            <i className="icon-close" onClick={() => onRemove(seat.id)}/>
          </li>
        ))}
      </ul>
      <div className="buy-btn">33元 确认选座</div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    data: state
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onRemove: (id: string) => dispatch(removeSeat(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatSelected);
