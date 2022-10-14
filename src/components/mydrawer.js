import { useState } from 'react';
import { Drawer, Button, Group, SimpleGrid } from '@mantine/core';
import MyCard from './mycard';

export default function MyDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title=""
        padding="xl"
        size="xl"
        position="top"
        overlayColor={"#f3f3f3"}
      >

        <SimpleGrid 
        cols={3} 
        spacing="xl"
        className='mb-4'
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
            <div></div>
            <MyCard 
            imageurl="https://picsum.photos/450" 
            bookingtext="Continue for $9.99/mo"
            badgetext="Newly Added"
            content={<p>A popup subscription drawer. <br/>ESC to exit, click "No Thanks", or press the x in the top right corner.</p>}
            />
            <div></div>
        </SimpleGrid>
        <Group position="center"><Button size="xs" compact variant='default' onClick={() => setOpened(false)}>No Thanks</Button></Group>
      </Drawer>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Open Drawer</Button>
      </Group>
    </>
  );
}