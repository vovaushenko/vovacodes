import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Custom Error Handling Middleware for catching errors in api route controllers
 * @function
 * @import this function in any controller and wrap it
 * @returns error catching boundary for route controllers
 * @shares the error message with the client by sending it as the body of the 500 response
 */

type NextController = (
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) => Promise<unknown>;

export default function catchErrorsFrom(controller: NextController) {
  return async (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<unknown> => {
    return controller(req, res).catch((error) => {
      console.error(error);
      return res
        .status(500)
        .json({ success: 'fail', error: error.message || error });
    });
  };
}
