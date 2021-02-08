import { SendGridResponse } from '../../utils/types';

export const sendGridResponse = [
  {
    statusCode: 202,
    body: '',
    headers: {
      server: 'nginx',
      date: 'Sun, 07 Feb 2021 22:17:04 GMT',
      'content-length': '0',
      connection: 'close',
      'x-message-id': '0612PM9GRdqlIubT3Exl5Q',
      'access-control-allow-origin': 'https://sendgrid.api-docs.io',
      'access-control-allow-methods': 'POST',
      'access-control-allow-headers':
        'Authorization, Content-Type, On-behalf-of, x-sg-elas-acl',
      'access-control-max-age': '600',
      'x-no-cors-reason':
        'https://sendgrid.com/docs/Classroom/Basics/API/cors.html',
    },
  } as SendGridResponse,
  '',
];

export const gitHubProjectsResponse = [
  {
    html_url: 'https://github.com/JorgePasco1/natours',
    description:
      'Demo full-stack application to reserve Tours. Integrates login and payments with Stripe, among other functionalities.',
    name: 'natours',
  },
  {
    html_url: 'https://github.com/JorgePasco1/bulldozer-price-prediction',
    description:
      'Machine Learning project to predict the auction price of bulldozers.',
    name: 'bulldozer-price-prediction',
  },
  {
    html_url: 'https://github.com/JorgePasco1/heart-disease-classification',
    description:
      'Classification machine learning model that will predict the presence of a heart disease in a patient.',
    name: 'heart-disease-classification',
  },
];
