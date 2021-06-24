import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({
    message: 'This i PUBLIC information.',
    name: 'P John Doe',
    email: 'ex@gmail.com',
  });
};
