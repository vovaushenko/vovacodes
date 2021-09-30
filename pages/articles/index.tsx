import React from 'react';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import PortfolioLayout from '../../components/Portfolio/PortfolioLayout/PortfolioLayout';
import { wrapper } from '../../store';
import { bindActionCreators, Dispatch } from 'redux';
import { loadLatestArticles } from '../../store/action-creators/articles-action-creators';
import { connect } from 'react-redux';
import AllDevToArticles from '../../components/Portfolio/AllDevToArticles/AllDevToArticles';

interface ServerProps {
  title: string;
}

/**
 *Renders articles page with the list of latest dev.to articles
 *@important this page pre-fetches and pre-generates data on server. "loadLatestArticles" is dispatched on server to fetch the list of latest  articles from the DEV.TO API. Later articles are globally available through redux store
 *@function ArticlesPage
 *@param {string} title - title of page
 *@returns {JSX.Element} - Rendered Clock component
 */

const ArticlesPage: NextPage<ServerProps> = ({ title }) => {
  return (
    <PortfolioLayout title={title}>
      <AllDevToArticles />
    </PortfolioLayout>
  );
};

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    await store.dispatch(loadLatestArticles());

    return {
      props: {
        title: 'Vova Ushenko | Articles',
      },
      revalidate: 3600,
    };
  }
);

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    news: bindActionCreators(loadLatestArticles, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(ArticlesPage);
