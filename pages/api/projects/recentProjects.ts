import { NextApiResponse, NextApiRequest } from 'next';

import { getRecentProjects } from '../../../utils/gitHubAdapter';
import { getImageLink } from '../../../utils/s3Adapter';

const recentProjects = async (req: NextApiRequest, res: NextApiResponse) => {
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

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ data: projectsWithImage }));
    } catch (error) {
      console.log(error);
      res.statusCode = 500;
      res.end('Something went wrong');
    }
  }
};

export default recentProjects;
