const seats = (state = [], action: any) => {
  switch (action.type) {
    case 'ADD_SEAT':
      return [
        ...state,
        action.seat,
      ];
    case 'REMOVE_SEAT':
      return state.filter((seat: any) => seat.id !== action.id);
    default:
      return state;
  }
};

export default seats;
