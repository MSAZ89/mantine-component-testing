import { useState } from 'react';
import { Modal, Button, Group } from '@mantine/core';

export default function MyModal(props) {

const [opened, setOpened] = useState(false);

  return (
    <>
    <Modal overlayOpacity={0.75} size="75%" centered withCloseButton={props.withCloseButton} opened={opened} onClose={() => setOpened(false)} title={props.title}>
      {props.content}
    </Modal>
    <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Modal</Button>
    </Group>
    </>
  );
}