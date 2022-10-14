import {Tabs, Text } from '@mantine/core';
import { IconAppWindow } from '@tabler/icons';
import MyButtons from './mybuttons';
import Cardgrid from './cardgrid';
import MyTimeline from './mytimeline';
import MyDrawer from './mydrawer';
import MyStepper from './mystepper';
import MyHoverCardGrid from './myhovercardgrid';

export default function MyTabs() {
  return (
    <Tabs orientation='vertical' className='flex-container' color="light" variant="outline" defaultValue="home">
      <Tabs.List grow position="center">
        <Tabs.Tab value="home" icon={<IconAppWindow size={18} />}>Home</Tabs.Tab>
        <Tabs.Tab value="buttons" icon={<IconAppWindow size={18} />}>Buttons</Tabs.Tab>
        <Tabs.Tab value="cardgrid" icon={<IconAppWindow size={18} />}>Card Grid</Tabs.Tab>
        <Tabs.Tab value="timeline" icon={<IconAppWindow size={18} />}>Timeline</Tabs.Tab>
        <Tabs.Tab value="drawer" icon={<IconAppWindow size={18} />}>Drawer</Tabs.Tab>
        <Tabs.Tab value="hovercard" icon={<IconAppWindow size={18} />}>Hover Card</Tabs.Tab>
        <Tabs.Tab value="stepper" icon={<IconAppWindow size={18} />}>Stepper</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel className="tab-content" value="home" pt="xs">
        <Text size="md">Testing some Mantine components in create-react-app.</Text>
      </Tabs.Panel>

      <Tabs.Panel className="tab-content" value="buttons" pt="xs">
        <Text size="md">Buttons</Text>
        <MyButtons/>
      </Tabs.Panel>

      <Tabs.Panel className="tab-content" value="cardgrid" pt="xs">
        <Text size="md">Card Grid</Text>
        <Cardgrid />
      </Tabs.Panel>

      <Tabs.Panel className="tab-content" value="timeline" pt="xs">
        <Text size="md">Timeline</Text>
        <MyTimeline />
      </Tabs.Panel>

      <Tabs.Panel className="tab-content" value="drawer" pt="xs">
        <Text size="md">Drawer</Text>
        <MyDrawer />
      </Tabs.Panel>
      
      <Tabs.Panel className="tab-content" value="hovercard" pt="xs">
        <Text size="md">Hover Card</Text>
        <MyHoverCardGrid/>
      </Tabs.Panel>

      <Tabs.Panel className="tab-content" value="stepper" pt="xs">
        <Text size="md">Stepper</Text>
        <MyStepper />
      </Tabs.Panel>

    </Tabs>
  );
}