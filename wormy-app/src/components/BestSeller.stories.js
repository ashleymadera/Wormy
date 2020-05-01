import React from 'react';
import { storiesOf } from '@storybook/react'; import BestSeller from './BestSeller';


const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '250px',
  padding: '30px',
  margin: '0px 20px 20px 20px',
  backgroundColor: 'whitesmoke'
}


storiesOf('BestSeller', module)

  .add('Bestseller', () => <BestSeller
    style={style}

  />)
