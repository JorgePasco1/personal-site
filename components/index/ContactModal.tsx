import { useState, useRef } from 'react';
import { FormState } from '../../utils/enums';
import useContactForm from '../../hooks/useContactForm';

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

const ContactModal: React.FC<ContactModalProps> = ({
  triggerButton,
}: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  const [formState, setFormState] = useState(FormState.WAITING);
  const formRef = useRef(null);

  const {
    userName,
    setUserName,
    userEmail,
    setUserEmail,
    userMessage,
    setUserMessage,
    handleSendClick,
  } = useContactForm(formRef, FormState, setFormState);

  return (
    <Modal
      closeIcon
      open={open}
      trigger={triggerButton}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      dimmer="blurring"
      role="dialog"
      data-testid="contactModalComponent"
    >
      <Header content="Let's get in touch 🙌" />
      <Modal.Content>
        <Ref innerRef={formRef}>
          <Form
            ref={formRef}
            success={formState === FormState.SUCCESS}
            error={formState === FormState.ERROR}
            loading={formState === FormState.LOADING}
            role="form"
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
