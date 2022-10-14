import { Button, SimpleGrid } from '@mantine/core';
import { IconDatabase } from '@tabler/icons';
import MyCopyButton from './mycopybutton';

export default function MyButtons() {
  return (
    <>

        <SimpleGrid 
        cols={4} 
        spacing="xl"
        breakpoints={[
            { maxWidth: 980, cols: 3, spacing: 'md' },
            { maxWidth: 755, cols: 2, spacing: 'sm' },
            { maxWidth: 600, cols: 1, spacing: 'sm' },
        ]}>
          <Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>Indigo cyan</Button>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>Lime green</Button>
          <Button variant="gradient" gradient={{ from: 'teal', to: 'blue', deg: 60 }}>Teal blue</Button>
          <Button variant="gradient" gradient={{ from: 'orange', to: 'red' }}>Orange red</Button>
          <Button variant="gradient" gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}>Peach</Button>
          <Button variant="outline" leftIcon={<IconDatabase size={14} />} loading>
            Connecting to database
          </Button>
          <Button rightIcon={<IconDatabase size={14} />} loading>
            Connecting
          </Button>
          <MyCopyButton copy="This is copied text!" />
        </SimpleGrid>
    </>
  );
}