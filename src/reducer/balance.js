import { CONTRACT_BALANCE, BALANCE } from '../actions/types';

const initialState = {
  contractBalance: 0,
  balance: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case BALANCE:
      return {
        ...state,
        balance: payload,
      };
    case CONTRACT_BALANCE:
      return {
        ...state,
        contractBalance: payload,
      };
    default:
      return state;
  }
}
