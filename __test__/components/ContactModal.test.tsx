import React from 'react';
import axios from 'axios';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mocked } from 'ts-jest/utils';

import ContactModal from '../../components/index/ContactModal';

jest.mock('axios');
const mockedAxios = mocked(axios, true);
const successMessage = "I'll be in touch soon!";
const errorMessage =
  'Something went wrong sending your message. Please try again.';

describe('ContactModal', () => {
  beforeEach(() => {
    const TriggerButton = <button>Trigger</button>;
    render(<ContactModal triggerButton={TriggerButton} />);
  });

  it('renders ContactModal Component after clicking trigger button without crashing', () => {
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByRole('dialog')).toBeInTheDocument();
    expect(screen.queryByRole('form')).toBeInTheDocument();
  });

  it.skip('display Success message when sending email succeeds', async () => {
    mockedAxios.post.mockImplementationOnce(
      (): Promise<unknown> => {
        return Promise.resolve();
      }
    );

    userEvent.click(screen.getByRole('button'));
    fireEvent(
      screen.getByPlaceholderText('Your name'),
      new InputEvent('Jorge')
    );
    fireEvent(
      screen.getByPlaceholderText('Your email'),
      new InputEvent('jorgepascosoto@gmail.com')
    );
    fireEvent(
      screen.getByPlaceholderText('Your message'),
      new InputEvent('The test ran succesfully')
    );

    await userEvent.click(await screen.findByText('Send'));

    const success = await screen.findByText(successMessage);
    const error = await screen.findByText(errorMessage);
    screen.debug();
    expect(success).toBeVisible();
    expect(error).not.toBeVisible();
  });

  it.skip('display Error message when sending email fails', async () => {
    mockedAxios.post.mockImplementationOnce(
      (): Promise<unknown> => {
        return Promise.reject(new Error());
      }
    );
    userEvent.click(screen.getByRole('button'));
    userEvent.click(screen.getByText('Send'));

    const success = await screen.findByText(successMessage);
    const error = await screen.findByText(errorMessage);
    expect(error).toHaveStyle('display: block');
    expect(success).toHaveStyle('display: none');
  });
});
