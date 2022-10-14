import { Tabs, Paper, Text } from '@mantine/core';
import { IconAppWindow } from '@tabler/icons';
import MyButtons from './mybuttons';
import Cardgrid from './cardgrid';

export default function MyTabs() {
  return (
    <Tabs color="light" variant="outline" defaultValue="home">
      <Tabs.List>
        <Tabs.Tab value="home" icon={<IconAppWindow size={18} />}>Home</Tabs.Tab>
        <Tabs.Tab value="buttons" icon={<IconAppWindow size={18} />}>Buttons</Tabs.Tab>
        <Tabs.Tab value="cardgrid" icon={<IconAppWindow size={18} />}>Card Grid</Tabs.Tab>
      </Tabs.List>

      <Paper shadow="sm" p="sm">
        <Tabs.Panel value="home" pt="xs">
          <Text size="md">Home</Text>
        </Tabs.Panel>

        <Tabs.Panel value="buttons" pt="xs">
          <Text size="md">Buttons</Text>
          <MyButtons/>
        </Tabs.Panel>

        <Tabs.Panel value="cardgrid" pt="xs">
          <Text size="md">Card Grid</Text>
          <Cardgrid />
        </Tabs.Panel>
      </Paper>

    </Tabs>
  );
}