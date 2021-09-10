import { NextApiRequest, NextApiResponse } from 'next';
import catchErrors from '../../middleware/catchErrors';
import { StatusCodes } from 'http-status-codes';
import Like, { ILike } from '../models/likes';
import { APIfeatures } from '../../utils/apiFeatures';

/**
 * @EXPORTS
 */
export { addNewLike, getAllLikes };

/**
 * Add new like
 * @POST /api/likes
 * @function addNewLike
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @returns {undefined}
 */
const addNewLike = catchErrors(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const newLike: ILike = await Like.create({});

    res.status(StatusCodes.OK).json({
      success: true,
      newLike,
    });
  }
);

/**
 * Get all likes
 * @GET /api/likes
 * @function getAllLikes
 * @param {NextApiRequest} req  Next API request
 * @param {NextApiResponse} res  Next API response
 * @return {undefined}
 */
const getAllLikes = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const features = new APIfeatures(
    Like.find({}),
    req.query as {
      [key: string]: string;
    }
  ).sort();

  const allLikes = await features.query;

  res.status(StatusCodes.OK).json({
    success: true,
    totalLikes: allLikes.length,
    likes: allLikes,
  });
};
