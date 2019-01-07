import { ISeat } from '../interface';
import { ADD_SEAT, REMOVE_SEAT } from '../constants';

const seats = (state = [], action: any) => {
  switch (action.type) {
    case ADD_SEAT:
      return [
        ...state,
        action.seat,
      ];
    case REMOVE_SEAT:
      return state.filter((seat: ISeat) => seat.id !== action.id);
    default:
      return state;
  }
};

export default seats;
