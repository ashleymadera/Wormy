import React from 'react';
import { storiesOf } from '@storybook/react'; import BestSeller from './BestSeller';
import StoryRouter from 'storybook-react-router';

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
  .addDecorator(StoryRouter())
  .add('Bestseller', () => <BestSeller
    style={style}

    results={[{ book_image: 'https://i.imgur.com/8cIyLoo.png' }, { book_image: 'https://i.imgur.com/8cIyLoo.png' }]}

  />)
