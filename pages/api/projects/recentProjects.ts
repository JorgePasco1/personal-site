import { NextApiResponse, NextApiRequest } from 'next';

import { getRecentProjects } from '../../../proxies/gitHubProxy';
import { getImageLink } from '../../../proxies/s3Proxy';

const recentProjects = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'GET') {
    try {
      const projects = await getRecentProjects();
      const projectsWithImage = await Promise.all(
        projects.map(async (project) => {
          const imageLink = await getImageLink(project.name);
          return {
            ...project,
            imageLink,
          };
        })
      );

      res.status(200).json({ data: projectsWithImage });
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.end('Something went wrong');
    }
  }
};

export default recentProjects;
