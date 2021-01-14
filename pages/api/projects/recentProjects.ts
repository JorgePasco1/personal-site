import { NextApiResponse, NextApiRequest } from 'next';
import { baseGitHubApiUrl } from '../constants';
import axios from 'axios';

const recentProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const profileReadmeUrl = `${baseGitHubApiUrl}/repos/jorgepasco1/jorgepasco1/contents/README.md`;

    const response = await axios.get(profileReadmeUrl);
    const data = await response.data;
    console.log(data);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ data }));
  }
};

export default recentProjects;
