import type { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Desktop from '../components/Desktop/Desktop';
import DesktopLayout from '../components/DesktopLayout/DesktopLayout';
import { wrapper } from '../store';
import { loadLatestNews } from '../store/action-creators/news-action-creators';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

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

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(loadLatestNews());

    return {
      props: {
        title: 'Vova Ushenko | Portfolio',
      },
      revalidate: 3600,
    };
  }
);

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    news: bindActionCreators(loadLatestNews, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(Home);
