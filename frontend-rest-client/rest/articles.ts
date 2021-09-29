import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
import { DevToApiResponse } from '../../types/redux/articles-reducer-types';
/**
 * @EXPORTS
 */
export { getAllLatestArticles };

/**
 *@api will make GET request to DEV_TO_API https://dev.to/api/articles/me/published to fetch all articles
 *@function getAllLatestArticles
 *@returns {object} - promise with success and product fields
 */
const getAllLatestArticles = (): Promise<AxiosResponse<DevToApiResponse>> => {
  return makeRequest({
    url: `https://dev.to/api/articles/me/published`,
    method: 'GET',
    headers: {
      'api-key': process.env.DEV_TO_API_KEY,
    },
  });
};
