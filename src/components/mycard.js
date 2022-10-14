import { Card, Image, Text, Badge, Button, Group, SimpleGrid } from '@mantine/core';

export default function MyCard(props) {

  let variant = props.variant;

  if(variant === "side"){
    return (
        <Card shadow="sm" p="sm" radius="sm">
            <SimpleGrid 
            cols={2} 
            spacing="xl"
            breakpoints={[
                { maxWidth: 980, cols: 2, spacing: 'xl' },
                { maxWidth: 755, cols: 2, spacing: 'xl' },
                { maxWidth: 600, cols: 1, spacing: 'xl' },
            ]}>
                <div>
                    <Group position="center" mt="md" mb="xs">
                        <Text weight={500}>{props.title}</Text>
                        <Badge variant="gradient" gradient={{ from: 'blue', to: 'blue' }}>
                            {props.badgetext}
                        </Badge>
                    </Group>
                    <Text size="sm" color="dimmed">
                        {props.content}
                    </Text>
                    <Button variant="dark" color="blue" fullWidth mt="md" radius="md">
                        {props.bookingtext}
                    </Button>
                </div>
                <div>
                    <Card.Section>
                        <Image
                        src={props.imageurl}
                        height={160}
                        alt="missing image alt"
                        />
                    </Card.Section>
                </div>
            </SimpleGrid>
        </Card>
      );
  }
  else if (variant === "stacked"){
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
            <Card.Section>
                <Image
                src={props.imageurl}
                height={160}
                alt="missing image alt"
                />
            </Card.Section>
    
            <Group position="center" mt="md" mb="xs">
                <Text weight={500}>{props.title}</Text>
                <Badge variant="gradient" gradient={{ from: 'blue', to: 'blue' }}>
                    {props.badgetext}
                </Badge>
            </Group>
    
            <Text size="sm" color="dimmed">
                {props.content}
            </Text>
    
            <Button variant="dark" color="blue" fullWidth mt="md" radius="md">
                {props.bookingtext}
            </Button>
        </Card>
      );
  }
}