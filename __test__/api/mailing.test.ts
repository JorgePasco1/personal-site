import { createMocks, RequestMethod } from 'node-mocks-http';
import { mocked } from 'ts-jest/utils';
import { sendGridResponse } from '../utils/mockExternalApiResponses';

import sendContactEmail from '../../pages/api/mailing/sendEmail';
import sendEmail from '../../proxies/mailerProxy';

jest.mock('../../proxies/mailerProxy');
const mockedSendEmail = mocked(sendEmail, true);

describe('sendContactEmail', () => {
  it('should return 405 message when request method is other than POST', async () => {
    const wrongMethods: RequestMethod[] = ['GET', 'PUT', 'DELETE', 'OPTIONS'];

    wrongMethods.forEach(async (method) => {
      const { req, res } = createMocks({
        method,
      });
      await sendContactEmail(req, res);
      expect(res._getStatusCode()).toBe(405);
    });
  });

  it('should return 400 for POST request with incorrect body', async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        incorrectKey: { youAre: 'wrong' },
      },
    });

    await sendContactEmail(req, res);
    expect(res._getStatusCode()).toBe(400);
  });

  it('should return 200 and correct structure for POST request with correct body', async () => {
    mockedSendEmail.mockReturnValue(Promise.resolve(sendGridResponse));
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        contactDetails: {
          sender_name: 'Tester',
          sender_email: 'tester@acme.com',
          message: 'Hello there!',
        },
      },
    });

    await sendContactEmail(req, res);
    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData())).toEqual({
      message: 'success',
      response: sendGridResponse,
    });
  });

  it('should return 500 when something goes wrong with the request', async () => {
    mockedSendEmail.mockReturnValue(Promise.reject());
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        contactDetails: {
          sender_name: 'Tester',
          sender_email: 'tester@acme.com',
          message: 'Hello there!',
        },
      },
    });

    await sendContactEmail(req, res);
    expect(res._getStatusCode()).toBe(500);
  });
});
