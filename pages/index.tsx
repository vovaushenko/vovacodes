import type { NextPage } from 'next';
import React from 'react';
import DummyComponent from '../components/DummyComponent/DummyComponent';
import { useActions } from '../hooks/useActions';

const Home: NextPage = () => {
  const { changeTheme } = useActions();

  return (
    <div>
      <DummyComponent dummyText="Hello" />

      <button onClick={() => changeTheme()}>Change theme!</button>
    </div>
  );
};

export default Home;
