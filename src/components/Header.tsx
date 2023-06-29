import React from "preact";
import Mode from "./Header/Mode";
import Regenerate from "./Header/Regenerate";
import { StateUpdater } from "preact/hooks";
import { Flex } from "@chakra-ui/react";

type Props = {
  Regenerate: Function;
  mode: "v1" | "v4" | "nil";
  setMode: StateUpdater<"v1" | "v4" | "nil">;
};

export default function Header(props: Props) {
  return (
    <Flex wrap="wrap" justifyContent={"space-around"} dir="row" gap={4}>
      <Regenerate Regenerate={props.Regenerate} />
      <Mode mode={props.mode} setMode={props.setMode} />
    </Flex>
  );
}
