import React from 'react';
import { storiesOf } from '@storybook/react';
import Footer from './Footer';


const style = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  backgroundColor: '#c1708c',
  color: 'white',
  textAlign: 'center',
  height: '75px'
}

const style2 = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  color: 'white',
  textAlign: 'center',
}

storiesOf('Footer', module)

  .add('Footer', () => <Footer
    style={style} />)


  .add('Text', () => <Footer
    style={style2}
  />)

