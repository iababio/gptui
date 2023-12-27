import { NextApiRequest, NextApiResponse } from 'next';

import { ensureHasValidSession } from '@/utils/server/auth';
import { getErrorResponseBody } from '@/utils/server/error';

import { listTools } from '@/agent/plugins/list';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!(await ensureHasValidSession(req, res))) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const tools = await listTools();
    res.status(200).json(tools);
  } catch (error) {
    console.error(error);
    const errorRes = getErrorResponseBody(error);
    res.status(500).json(errorRes);
  }
};

export default handler;
