import { ThemeIcon, RingProgress, Text, Center, Group } from '@mantine/core';
import { IconCheck, IconX } from '@tabler/icons';

export default function MyRingProgress() {
  return (
    <Group position="center">
      <RingProgress
        size={170}
        thickness={16}
        label={
          <Text size="xs" align="center" px="xs" sx={{ pointerEvents: 'none' }}>
            Storage
          </Text>
        }
        sections={[
          { value: 50, color: 'cyan', tooltip: 'Documents – 50 GB' },
          { value: 24, color: 'orange', tooltip: 'Apps – 24 GB' },
          { value: 26, color: 'grape', tooltip: 'Other – 26 GB' },
        ]}
      />
      <RingProgress
        size={170}
        thickness={8}
        label={
          <Text size="sm" align="center" px="xs" sx={{ pointerEvents: 'none' }}>
            Storage
          </Text>
        }
        sections={[
          { value: 25, color: 'blue', tooltip: 'Documents – 25 GB' },
          { value: 25, color: 'lime', tooltip: 'Apps – 25 GB' },
          { value: 35, color: 'yellow', tooltip: 'Other – 35 GB' },
          { value: 15, color: 'red', tooltip: 'Update Files – 15 GB' },
        ]}
      />

      <RingProgress
        sections={[{ value: 40, color: 'blue' }]}
        label={
          <Text color="blue" weight={700} align="center" size="xl">
            40%
          </Text>
        }
      />

      <RingProgress
        sections={[{ value: 100, color: 'teal' }]}
        label={
          <Center>
            <ThemeIcon color="teal" variant="light" radius="xl" size="xl">
              <IconCheck size={22} />
            </ThemeIcon>
          </Center>
        }
      />

      <RingProgress
        sections={[{ value: 0, color: 'red' }]}
        label={
          <Center>
            <ThemeIcon color="red" variant="light" radius="xl" size="xl">
              <IconX size={22} />
            </ThemeIcon>
          </Center>
        }
      />
    </Group>
  );
}