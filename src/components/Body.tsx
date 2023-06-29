import { Box, Divider } from "@chakra-ui/react";
import React from "preact";
import UUID from "./Body/UUID";

type Props = {
  UUIDs: string[];
};

export default function Body({ UUIDs }: Props) {
  return (
    <Box pt={8}>
      <Divider />
      {UUIDs.map((uuid) => (
        <UUID key={uuid} uuid={uuid} />
      ))}
    </Box>
  );
}
