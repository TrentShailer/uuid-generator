import { Button } from "@chakra-ui/react";
import React from "preact";
type Props = {
  Regenerate: Function;
};

export default function Regenerate({ Regenerate }: Props) {
  return (
    <Button w={64} onClick={Regenerate}>
      Regenerate
    </Button>
  );
}
