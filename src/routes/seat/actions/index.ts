import { ISeat } from '../interface';
import { ADD_SEAT, REMOVE_SEAT } from '../constants';

export const addSeat = (seat: ISeat) => {
  return {
    type: ADD_SEAT,
    seat
  };
};

export const removeSeat = (id: string) => {
  return {
    type: REMOVE_SEAT,
    id
  };
};
