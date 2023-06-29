import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import React from "preact";
import { StateUpdater } from "preact/hooks";
type Props = {
  mode: "v1" | "v4" | "nil";
  setMode: StateUpdater<"v1" | "v4" | "nil">;
};

export default function Mode({ mode, setMode }: Props) {
  return (
    <RadioGroup
      onChange={(v) =>
        v === "v1" || v === "v4" || v === "nil" ? setMode(v) : setMode("v4")
      }
      value={mode}
    >
      <Stack direction="row">
        <Radio value="v1">v1</Radio>
        <Radio value="v4">v4</Radio>
        <Radio value="nil">nil</Radio>
      </Stack>
    </RadioGroup>
  );
}
