import axios from 'axios';
import { ProjectInfo } from '../utils/types';
import { BASE_GITHUB_API_URL } from '../utils/constants';

const GH_ACCESS_TOKEN = process.env.GH_ACCESS_TOKEN;

const extractProjectsUrls = (text: string): Array<string> => {
  const recentProjects = text
    .split('\n---\n\n')[0]
    .split('Latest projects:\n  ')[1];

  const markDownLinkPattern = /(\[[\w ]+\])(\(https:\/\/github.com\/JorgePasco1\/[\w-]+\))/gi;
  let matches = markDownLinkPattern.exec(recentProjects);
  const links = [];
  do {
    links.push(matches[2].slice(1, -1));
  } while ((matches = markDownLinkPattern.exec(recentProjects)));

  return links.map((link) => link.split('https://github.com/')[1]);
};

export const getRecentProjectsUrls = async (): Promise<Array<string>> => {
  const profileReadmeUrl = `${BASE_GITHUB_API_URL}/repos/jorgepasco1/jorgepasco1/contents/README.md`;

  const response = await axios.get(profileReadmeUrl, {
    headers: {
      Authorization: `Bearer ${GH_ACCESS_TOKEN}`,
    },
  });
  const data = await response.data;
  const content = data.content;
  const decoded = Buffer.from(content, 'base64').toString('utf-8');

  const projectUrls = extractProjectsUrls(decoded);
  return projectUrls;
};

export const getProjectInfo = async (repoUrl: string): Promise<ProjectInfo> => {
  const response = await axios.get(repoUrl, {
    headers: {
      Authorization: `Bearer ${GH_ACCESS_TOKEN}`,
    },
  });
  const data = await response.data;
  const { html_url, description, name } = data;
  return { html_url, description, name };
};

export const getRecentProjects = async (): Promise<Array<ProjectInfo>> => {
  const projectNames = await getRecentProjectsUrls();

  const apiRepoUrls = projectNames.map(
    (name) => `${BASE_GITHUB_API_URL}/repos/${name}`
  );

  const result = await Promise.all(
    apiRepoUrls.map(async (url) => {
      const info = await getProjectInfo(url);
      return info;
    })
  );
  return result;
};
