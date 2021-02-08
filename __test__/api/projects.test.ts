import { createMocks, RequestMethod } from 'node-mocks-http';
import { mocked } from 'ts-jest/utils';
import { gitHubProjectsResponse } from '../utils/mockExternalApiResponses';

import { ProjectInfo } from '../../utils/types';
import recentProjects from '../../pages/api/projects/recentProjects';
import { getRecentProjects } from '../../proxies/gitHubProxy';
import { getImageLink } from '../../proxies/s3Proxy';

jest.mock('../../proxies/s3Proxy');
jest.mock('../../proxies/gitHubProxy');
const mockedGetRecentProjects = mocked(getRecentProjects, true);
const mockedGetImageLink = mocked(getImageLink, true);

describe('getRecentProjects', () => {
  it('should return 405 message when request method is other than GET', async () => {
    const wrongMethods: RequestMethod[] = ['POST', 'PUT', 'DELETE', 'OPTIONS'];

    wrongMethods.forEach(async (method) => {
      const { req, res } = createMocks({
        method,
      });
      await recentProjects(req, res);
      expect(res._getStatusCode()).toBe(405);
    });
  });

  it('should return 200 and the correct number of projects with full info', async () => {
    mockedGetRecentProjects.mockReturnValue(
      Promise.resolve(gitHubProjectsResponse)
    );
    mockedGetImageLink.mockReturnValue(
      Promise.resolve('https://example.s3.aws.com/test/test.png')
    );

    const { req, res } = createMocks({
      method: 'GET',
    });

    await recentProjects(req, res);
    expect(res._getStatusCode()).toBe(200);
    const { data } = JSON.parse(res._getData());
    expect(data).toHaveLength(gitHubProjectsResponse.length);
    data.forEach((project: ProjectInfo) => {
      expect(project).toHaveProperty('html_url');
      expect(project).toHaveProperty('description');
      expect(project).toHaveProperty('name');
      expect(project).toHaveProperty('imageLink');
    });
  });

  it('should return 500 when something goes wrong with the request', async () => {
    mockedGetRecentProjects.mockReturnValue(Promise.reject());
    mockedGetImageLink.mockReturnValue(Promise.reject());
    const { req, res } = createMocks({
      method: 'GET',
    });

    await recentProjects(req, res);
    expect(res._getStatusCode()).toBe(500);
  });
});
