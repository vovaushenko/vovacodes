import { AxiosResponse } from 'axios';
import { makeRequest } from '../makeRequest';
import { IComment } from '../../types/redux/comments-reducer-types';
/**
 * @EXPORTS
 */
export { getAllApprovedCommentsFromDB, persistNewCommentToDB };

/**
 *@api will make GET request to /api/comments
 *@function getAllApprovedCommentsFromDB
 *@returns {object} - promise with success and product fields
 */
const getAllApprovedCommentsFromDB = (): Promise<
  AxiosResponse<{ success: boolean; total: number; comments: IComment[] }>
> => {
  return makeRequest({
    url: '/api/comments/',
    method: 'GET',
  });
};

/**
 *@api will make POST request to /api/comments
 *@function persistNewCommentToDB
 *@returns {object} - promise with success status
 */
const persistNewCommentToDB = (newComment: {
  author: string;
  comment: string;
}): Promise<AxiosResponse<{ success: boolean }>> => {
  return makeRequest({
    url: '/api/comments',
    method: 'POST',
    data: newComment,
    headers: { 'Content-Type': 'application/json' },
  });
};
