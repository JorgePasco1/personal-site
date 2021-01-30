import axios from 'axios';
import {
  useState,
  SyntheticEvent,
  MutableRefObject,
  Dispatch,
  SetStateAction,
} from 'react';
import { FormState } from '../utils/enums';

type useContactFormReturn = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  userEmail: string;
  setUserEmail: Dispatch<SetStateAction<string>>;
  userMessage: string;
  setUserMessage: Dispatch<SetStateAction<string>>;
  handleSendClick: (e: SyntheticEvent) => Promise<void>;
};

const useContactForm = (
  formRef: MutableRefObject<HTMLFormElement>,
  formState: typeof FormState,
  setFormState: Dispatch<SetStateAction<string>>
): useContactFormReturn => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSendClick = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setFormState(formState.LOADING);
    const contactDetails = {
      sender_name: userName,
      sender_email: userEmail,
      message: userMessage,
    };

    try {
      await axios.post('/api/mailing/sendEmail', {
        contactDetails,
      });
      setFormState(FormState.SUCCESS);
      setUserMessage('');
    } catch (e) {
      console.log(e);
      setFormState(FormState.ERROR);
    }

    setTimeout(() => setFormState(FormState.WAITING), 5000);
  };

  return {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userMessage,
    setUserMessage,
    handleSendClick,
  };
};

export default useContactForm;
