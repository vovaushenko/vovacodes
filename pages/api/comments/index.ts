import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { connectWithDB } from '../../../backend/config/helpers';
import { onError } from '../../../middleware/onError';
import {
  getAllApprovedComments,
  postNewComment,
} from '../../../backend/controllers/commentsController';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

connectWithDB();

handler.get(getAllApprovedComments).post(postNewComment);

export default handler;
