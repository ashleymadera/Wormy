import React from 'react';
import { storiesOf } from '@storybook/react';
import Search from './Search';



const style = {
  border: 'none',
  height: '30px',
  width: '300px',
  borderRadius: '10px'
}

storiesOf('Search', module)

  .add('Search', () => <Search
    style={style}
  />)
