import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { connectWithDB } from '../../../backend/config/helpers';
import {
  addNewLike,
  getAllLikes,
} from '../../../backend/controllers/likesController';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler.get(getAllLikes).post(addNewLike);

export default handler;
