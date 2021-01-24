import axios from 'axios';
import { useState, SyntheticEvent, MutableRefObject } from 'react';
import { FormState } from '../utils/enums';

const useContactForm = (
  formRef: MutableRefObject<any>,
  formState: typeof FormState,
  setFormState: Function
) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSendClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      return formRef.current.reportValidity();
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
