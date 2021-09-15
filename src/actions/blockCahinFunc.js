import { setAlert } from './alert';
import {  BALANCE } from './types';

export const buy = (
  web3,
  contract,
  accounts,
) => async dispatch => {
  

  await contract.methods
    .airDrop()
    .send({ from: accounts[0] })
    .on('transactionHash', tx => {
      console.log(tx);
      dispatch(setAlert(`Transaction is pending`, 'dark'));
    })
    .on('receipt', async receipt => {
      console.log(receipt);
      const tA = await contract.methods
        .balanceOf('0x3ed4966c537bAf24B2c63aa1Ff63b61e71EcACA7')
        .call();
      const totalbalance = parseFloat(web3.utils.fromWei(tA));
      console.log(totalbalance);
      dispatch({
        type: BALANCE,
        payload: (totalbalance),
      });

      dispatch(setAlert(`Transaction is SuccessFull`, 'success'));
    });    
};
