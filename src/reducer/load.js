import {
  GET_WEB3,
  GET_CONTRACT,
  GET_ACCOUNTS,
  GET_NETWORK,
} from '../actions/types';

const initialState = {
  web3: null,
  contract: null,
  account: [],
  networkId: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WEB3:
      return {
        ...state,
        web3: payload,
      };
    case GET_CONTRACT:
      return {
        ...state,
        contract: payload,
      };
    case GET_ACCOUNTS:
      return {
        ...state,
        account: payload,
      };
    case GET_NETWORK:
      return {
        ...state,
        networkId: payload,
        loading: false,
      };

    default:
      return state;
  }
}
