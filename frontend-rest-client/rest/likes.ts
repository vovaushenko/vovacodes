import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
/**
 * @EXPORTS
 */
export { getAllLikesFromDB, persistNewLikeToDB };

/**
 *@api will make GET request to /api/reviews/
 *@function getAllSubmittedReviews
 *@returns {object} - promise with success and product fields
 */
const getAllLikesFromDB = (): Promise<
  AxiosResponse<{ success: boolean; totalLikes: number }>
> => {
  return makeRequest({
    url: '/api/likes/',
    method: 'GET',
  });
};

/**
 *@api will make POST request to /api/like
 *@function persistNewLikeInDB
 *@returns {object} - promise with success status
 */
const persistNewLikeToDB = (): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/likes',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });
};
