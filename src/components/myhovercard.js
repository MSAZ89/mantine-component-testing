import { HoverCard, Button, Group } from '@mantine/core';

export default function MyHoverCard(props) {
  return (
    <Group position="center">
      <HoverCard className="hovercard" shadow="md">
        <HoverCard.Target>
          <Button>View Card</Button>
        </HoverCard.Target>
          <HoverCard.Dropdown>
            <div>
              {props.content}
            </div>
          </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
}