import { useState, useRef, SyntheticEvent } from 'react';
import axios from 'axios';

import {
  Form,
  Input,
  TextArea,
  Button,
  Header,
  Modal,
  Icon,
  Message,
  Ref,
} from 'semantic-ui-react';

type ContactModalProps = {
  triggerButton: React.HTMLProps<HTMLButtonElement>;
};

enum FormState {
  WAITING = 'waiting',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const ContactModal = ({ triggerButton }: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState(FormState.WAITING);
  const formRef = useRef(null);

  // Form values
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const handleSendClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (!formRef.current.checkValidity()) {
      return formRef.current.reportValidity();
    }

    setFormState(FormState.LOADING);
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

  return (
    <Modal
      closeIcon
      open={open}
      trigger={triggerButton}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      dimmer="blurring"
    >
      <Header content="Let's get in touch 🙌" />
      <Modal.Content>
        <Ref innerRef={formRef}>
          <Form
            ref={formRef}
            success={formState === FormState.SUCCESS}
            error={formState === FormState.ERROR}
            loading={formState === FormState.LOADING}
          >
            <Form.Group widths="equal">
              <Form.Field
                name="name"
                control={Input}
                label="Your name"
                placeholder="Your name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
              <Form.Field
                name="email"
                key="userEmailContainer"
                control={Input}
                label="Your email"
                placeholder="Your email"
                type="email"
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Field
              name="message"
              control={TextArea}
              rows={8}
              placeholder="Your message"
              required
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              label="Your message"
            />
            <Button.Group>
              <Button onClick={() => setOpen(false)}>Cancel</Button>
              <Button.Or />
              <Button
                positive
                icon
                labelPosition="right"
                onClick={(e) => handleSendClick(e)}
              >
                Send
                <Icon name="send" />
              </Button>
            </Button.Group>
            <Message
              error
              header="Oops! ⚠️"
              content="Something went wrong sending your message. Please try again."
            />
            <Message
              success
              header="Great! 👌"
              content="I'll be in touch soon!"
            />
          </Form>
        </Ref>
      </Modal.Content>
    </Modal>
  );
};

export default ContactModal;
