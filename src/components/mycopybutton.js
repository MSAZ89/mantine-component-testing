import { CopyButton, Button } from '@mantine/core';

export default function MyCopyButton(props) {
  return (
    <CopyButton value={props.copy}>
      {({ copied, copy }) => (
        <>
            <Button variant={props.variant} color={copied ? 'teal' : 'blue'} onClick={copy}>
            {copied ? 'Copied Text!' : "Copy Text"}
            </Button>
        </>
      )}
    </CopyButton>
  );
}