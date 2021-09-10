import catchErrors from '../../middleware/catchErrors';
import { NextApiRequest, NextApiResponse } from 'next';
import { StatusCodes } from 'http-status-codes';
import sgMail from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/helpers/classes/mail';
/**
 * @EXPORTS
 */
export { sendEmail };

/**
 * Send email via sendgrid
 * @POST /api/contact
 * @function sendEmail
 * @param {NextApiRequest} req  Next API request. { name, email, message } will be in request, collected from contact form.
 * @param {NextApiResponse} res  Next API response
 * @returns {undefined}
 */
const sendEmail = catchErrors(
  async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
    const { name, email, message } = req.body;

    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const msg: MailDataRequired = {
      to: process.env.GOOGLE_EMAIL_ADDRESS!,
      from: process.env.GOOGLE_EMAIL_ADDRESS!,
      subject: `Message from ${name}`,
      html: `<h1>${name}</h1>\n 
			<h3>left message:</h3> \n
      <h4><i>${message}</i></h4>\n
      <h3>Contact info</h3>
      <h2>Email - ${email}</h2>
    `,
    };

    await sgMail.send(msg);

    res.status(StatusCodes.OK).json({
      success: true,
    });
  }
);
