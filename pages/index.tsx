import type { GetStaticProps, NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import Desktop from '../components/Desktop/Desktop';
import DesktopLayout from '../components/DesktopLayout/DesktopLayout';
import { wrapper } from '../store';
import { loadLatestNews } from '../store/action-creators/news-action-creators';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import Loader from '../components/Loader/Loader';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

interface ServerProps {
  title: string;
}

const Home: NextPage<ServerProps> = ({ title }) => {
  const { shouldIntroBeShown } = useTypedSelector((state) => state.ui);
  const [isLoading, setIsLoading] = useState(shouldIntroBeShown);
  const { notShowIntroAgain } = useActions();
  const LOADING_INTRO_DURATION = 6000;

  useEffect(() => {
    setTimeout(() => {
      notShowIntroAgain();
      setIsLoading(false);
    }, LOADING_INTRO_DURATION);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader
          isOnScreen={isLoading}
          loadingDuration={LOADING_INTRO_DURATION}
        />
      ) : (
        <DesktopLayout title={title}>
          <Desktop />
        </DesktopLayout>
      )}
    </>
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
