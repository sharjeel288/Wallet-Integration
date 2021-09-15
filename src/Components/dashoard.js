import React, {  Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { buy } from '../actions/blockCahinFunc';
import Alert from './Layout/Alert';

const Client_Total_Capital = ({
  balance: { balance },
  buy,

  load: { web3, contract, account },
}) => {
  

  const onSubmit1 = e => {
    e.preventDefault();
    buy(web3, contract, account);
  };

  return (
    <Fragment>
      <nav className='navbar'>
      <h1 className='contant' style={{
        color:'white'
      }}>Smart Net</h1>
      </nav>
      <Alert />
      <div className='grid'>
        <article className='card product-item'>
          <form onSubmit={e => onSubmit1(e)}>
            <header className='card__header'>
              <h1 className='contant'>Air Drop</h1>
            </header>
            <div className='card__content'>
              <h1 className='product__title'>
                Remaining Airdrop Tokens
              </h1>
              <h1 className='product__title'>{balance} SNT</h1>
              
            </div>
            <div className='card__actions'>
              <button className='btn' type='submit'>
                Claim
              </button>
            </div>
            
          </form>
        </article>
      </div>
    </Fragment>
  );
};

Client_Total_Capital.propTypes = {
  load: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  balance: state.balance,
  load: state.load,
});

export default connect(mapStateToProps, { buy })(Client_Total_Capital);

/*

*/
