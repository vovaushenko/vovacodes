import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
import { INewsApiResponse } from '../../types/redux/news-reducer-types';
/**
 * @EXPORTS
 */
export { getLatestNews };

/**
 *@api will make GET request to NEWS_API https://newsapi.org/v2/ https://newsapi.org/docs/get-started
 *@function getAllSubmittedReviews
 *@returns {object} - promise with success and product fields
 */
const getLatestNews = (): Promise<AxiosResponse<INewsApiResponse>> => {
  return makeRequest({
    url: `${process.env.NEWS_URL_QUERY}=${process.env.NEWS_API_KEY}`,
    method: 'GET',
  });
};
