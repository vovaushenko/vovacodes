import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Desktop from '../components/Desktop/Desktop';
import DesktopLayout from '../components/DesktopLayout/DesktopLayout';

interface ServerProps {
  title: string;
}

const Home: NextPage<ServerProps> = ({ title }) => {
  return (
    <DesktopLayout title={title}>
      <Desktop />
    </DesktopLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Vova Ushenko | Portfolio',
    },
  };
};

export default Home;
