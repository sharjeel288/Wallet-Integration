import React, { Fragment } from 'react';
import text from './logo1.jpg';

export default () => (
  <Fragment>
    <div className='logo'>
      <Fragment>
        <img
          src={text}
          style={{ width: '400px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
      </Fragment>
    </div>
  </Fragment>
);

/*
 <Fragment>
        <img
          src={spinner}
          style={{ width: '100px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
      </Fragment>
      
      <Fragment>
        <img
          src={text}
          style={{ width: '100px', margin: 'auto', display: 'block' }}
          alt='Loading...'
        />
      </Fragment>

*/
