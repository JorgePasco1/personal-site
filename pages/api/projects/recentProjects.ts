import { NextApiResponse, NextApiRequest } from 'next';

import { getRecentProjects } from '../../../utils/gitHubAdapter';

const recentProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const projects = await getRecentProjects();

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data: projects }));
  }
};

export default recentProjects;
