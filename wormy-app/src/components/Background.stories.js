

import React from 'react';
import { storiesOf } from '@storybook/react';
import Background from './Background'


const style = {
  width: '400px'
}




storiesOf('Background', module)

  .add('Background', () => <Background
    style={style}


  />)