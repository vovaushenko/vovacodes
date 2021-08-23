import React from 'react';
import styled from 'styled-components';

export interface DummyProps {
  dummyText: string;
}

const DummyComponent = ({ dummyText }: DummyProps): JSX.Element => {
  return (
    <DummyContainer>
      <h1>Hello! 👋 I am Dummy Component</h1>
      <h2>{dummyText}</h2>
      <p>Check my story in storybook! And then delete me 💸</p>
    </DummyContainer>
  );
};

const DummyContainer = styled.article`
  background-color: red;
`;

export default DummyComponent;
