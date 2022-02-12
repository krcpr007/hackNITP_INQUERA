import {render} from '@testing-library/react';
import React from 'react';
import QueryCard from './QueryCard.js';

function Home() {

  return (
    <div>
      <QueryCard/>
      <br/>
      <QueryCard/>
    </div>
  );
  }


export default Home
