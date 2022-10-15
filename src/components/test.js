import { Accordion, Text } from '@mantine/core';

export default function Test() {
  return (
    <Accordion chevronPosition="left" transitionDuration={700} variant="filled" defaultValue="customization">
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel><Text size="md">Colors, fonts, shadows and many other parts are customizable to fit your design needs</Text></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel><Text size="md">Colors, fonts, shadows and many other parts are customizable to fit your design needs</Text></Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel><Text size="md">Colors, fonts, shadows and many other parts are customizable to fit your design needs</Text></Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}