import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { sendEmail } from '../../../backend/controllers/contactsController';
import { onError } from '../../../middleware/onError';

const handler = nc<NextApiRequest, NextApiResponse>({ onError });

handler.post(sendEmail);

export default handler;
