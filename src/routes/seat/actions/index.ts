export const addSeat = (seat: any) => {
  return {
    type: 'ADD_SEAT',
    seat
  };
};

export const removeSeat = (id: string) => {
  return {
    type: 'REMOVE_SEAT',
    id
  };
};
