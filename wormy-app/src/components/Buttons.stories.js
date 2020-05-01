import React from 'react';
import { storiesOf } from '@storybook/react';
import Buttons from './Buttons';



const style = {
  backgroundColor: '#c1708c',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 25px',
}


const style2 = {
  backgroundColor: '#c1708c',
  color: 'white',
  borderRadius: '5px',
  padding: '5px 5px',
}



storiesOf('Buttons', module)

  .add('Amazon', () => <Buttons
    label="Amazon"
    style={style}


  />)

  .add('Apple', () => <Buttons
    label="Apple Books"
    style={style}


  />)

  .add('Barnes', () => <Buttons
    label="Barnes"
    style={style}


  />)

  .add('Go', () => <Buttons
    label="Go"
    style={style2}


  />)