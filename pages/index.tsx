import type { NextPage } from 'next';
import React from 'react';
import DummyComponent from '../components/DummyComponent/DummyComponent';

const Home: NextPage = () => {
  return (
    <div>
      <DummyComponent dummyText="Hello" />
    </div>
  );
};

export default Home;
