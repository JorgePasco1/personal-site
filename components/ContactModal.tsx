import { useState } from 'react';
import { Button, Header, Modal } from 'semantic-ui-react';

type ContactModalProps = {
  triggerButton: React.HTMLProps<HTMLButtonElement>;
};

const ContactModal = ({ triggerButton }: ContactModalProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Modal
      closeIcon
      open={open}
      trigger={triggerButton}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header content="Archive Old Messages" />
      <Modal.Content>
        <p>
          Your inbox is getting full, would you like us to enable automatic
          archiving of old messages?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="red" onClick={() => setOpen(false)}>
          No
        </Button>
        <Button color="green" onClick={() => setOpen(false)}>
          Yes
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ContactModal;
