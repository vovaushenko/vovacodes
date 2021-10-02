import { NextApiRequest, NextApiResponse } from 'next';
import { APIfeatures } from '../../utils/apiFeatures';
import Comment, { IComment } from '../models/comment';
import { StatusCodes } from 'http-status-codes';
import catchErrors from '../../middleware/catchErrors';

/**
 * @EXPORTS
 */
export { getAllApprovedComments, postNewComment };

/**
 * Get all comments
 * @GET /api/comments
 * @function getAllApprovedComments
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const getAllApprovedComments = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const features = new APIfeatures(
    Comment.find({ isApproved: true }),
    req.query as {
      [key: string]: string;
    }
  ).sort();

  const allComments = await features.query;

  res.status(StatusCodes.OK).json({
    success: true,
    total: allComments.length,
    comments: allComments,
  });
};

/**
 * Persist new comment
 * @POST /api/likes
 * @function postNewComment
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @returns {undefined}
 */
const postNewComment = catchErrors(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { comment, author } = req.body;
    const newComment: IComment = await Comment.create({
      comment,
      author,
    });

    res.status(StatusCodes.OK).json({
      success: true,
      newComment,
    });
  }
);
