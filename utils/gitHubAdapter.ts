import axios from 'axios';

const BASE_GITHUB_API_URL = 'https://api.github.com';

const extractProjectsUrls = (text: string) => {
  const recentProjects = text
    .split('\n---\n\n')[0]
    .split('Last projects:\n  ')[1];

  const markDownLinkPattern = /(\[[\w ]+\])(\(https:\/\/github.com\/JorgePasco1\/[\w-]+\))/gi;
  let matches = markDownLinkPattern.exec(recentProjects);
  const links = [];
  do {
    links.push(matches[2].slice(1, -1));
  } while ((matches = markDownLinkPattern.exec(recentProjects)));

  return links;
};

export const getRecentProjects = async () => {
  const profileReadmeUrl = `${BASE_GITHUB_API_URL}/repos/jorgepasco1/jorgepasco1/contents/README.md`;

  const response = await axios.get(profileReadmeUrl);
  const data = await response.data;
  const content = data.content;
  const decoded = Buffer.from(content, 'base64').toString('utf-8');

  const projectUrls = extractProjectsUrls(decoded);
  return projectUrls;
};
