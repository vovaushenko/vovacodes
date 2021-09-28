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
import { useMediaQuery } from '@react-hook/media-query';
import PortfolioLanding from '../components/Portfolio/PortfolioLanding/PortfolioLanding';
import PortfolioLayout from '../components/Portfolio/PortfolioLayout/PortfolioLayout';

interface ServerProps {
  title: string;
}

/**
 *Renders main index page with Windows OS Desktop
 *@important this page does have statically pre-generated data on server. "loadLatestNews" is dispatched on server to get latest news, and provide them in form of redux props.
 *Page has LOADING_INTRO_DURATION param which specifies the duration of initial loading animation.
 *@function Home
 *@param {string} title - title of page
 *@returns {JSX.Element} - Rendered Clock component
 */
const Home: NextPage<ServerProps> = ({ title }) => {
  const isOnMobile = useMediaQuery('only screen and (max-width: 768px)');
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
      <Loader isOnScreen={isLoading} loadingDuration={LOADING_INTRO_DURATION} />
      {isOnMobile ? (
        <PortfolioLayout title={'Vova Ushenko | Full-Stack Web Developer'}>
          <PortfolioLanding />
        </PortfolioLayout>
      ) : (
        <DesktopLayout
          title={title}
          entranceAnimationDelay={LOADING_INTRO_DURATION + 200}
        >
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
