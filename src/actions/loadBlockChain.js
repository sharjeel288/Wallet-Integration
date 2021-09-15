import {
  GET_WEB3,
  GET_CONTRACT,
  GET_ACCOUNTS,
  GET_NETWORK,
  BALANCE,
} from '../actions/types';
import Web3 from 'web3';

import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../Contract';

export const getWeb3 = () => dispatch => {
  return new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener('load', async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();
          // Acccounts now exposed
          const accounts = await web3.eth.getAccounts();
          const network = await web3.eth.net.getId();
          const tokenContract = new web3.eth.Contract(
            CONTRACT_ABI,
            CONTRACT_ADDRESS
          );
          dispatch({
            type: GET_WEB3,
            payload: web3,
          });

          dispatch({
            type: GET_CONTRACT,
            payload: tokenContract,
          })
          
          dispatch({
            type: GET_ACCOUNTS,
            payload: accounts,
          });
          dispatch({
            type: GET_NETWORK,
            payload: network,
          });
          //GET totalBalance
          const tA = await tokenContract.methods
            .balanceOf('0x3ed4966c537bAf24B2c63aa1Ff63b61e71EcACA7')
            .call();
          const totalbalance = parseFloat(web3.utils.fromWei(tA));
          console.log(totalbalance);
          dispatch({
            type: BALANCE,
            payload: (totalbalance),
          });

          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('Injected web3 detected.');

        const accounts = await web3.eth.getAccounts();
        const network = await web3.eth.net.getId();
        const tokenContract = new web3.eth.Contract(
          CONTRACT_ABI,
          CONTRACT_ADDRESS
        );
        dispatch({
          type: GET_WEB3,
          payload: web3,
        });
        dispatch({
          type: GET_CONTRACT,
          payload: tokenContract,
        });
        dispatch({
          type: GET_ACCOUNTS,
          payload: accounts,
        });
        dispatch({
          type: GET_NETWORK,
          payload: network,
        });

        //GET totalBalance

        resolve(web3);
      }
      // Fallback to localhost; use dev console port by default...
      else {
        const provider = new Web3.providers.HttpProvider(
          'https://rinkeby.infura.io/v3/93c22eb45bb244c3ac9cc478ddd0eb3c'
        );
        const web3 = new Web3(provider);
        console.log('No web3 instance injected, using Local web3.');

        resolve(web3);
      }
    });
  });
};
