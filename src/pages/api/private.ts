import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req });

  if (!session) {
    res.status(200).json({
      message: 'Need is login',
    });
  }

  res.status(200).json({
    message: 'This is private information.',
    name: 'John Doe',
    email: 'ex@gmail.com',
  });
};
