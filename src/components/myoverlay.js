import { useState } from 'react';
import { Button, Group, Box, Overlay } from '@mantine/core';

export default function MyOverlay(props) {
  const [visible, setVisible] = useState(true);

  return (
    <>
        <Group position="center">
            <Button onClick={() => setVisible((v) => !v)}>Toggle overlay</Button>
        </Group>
        <br/>
        <Box sx={{ height: "100%", position: 'relative' }}>
            {visible && <Overlay opacity={0.7} color="slategrey" blur={5} />}
            {props.content}
        </Box>
    </>
  );
}