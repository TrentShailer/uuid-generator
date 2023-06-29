import { useState } from "preact/hooks";
import { Divider, Text } from "@chakra-ui/react";

type Props = {
  uuid: string;
};

export default function UUID({ uuid }: Props) {
  const [text, setText] = useState(uuid);

  const OnClick = () => {
    setText("Copied");
    navigator.clipboard.writeText(uuid);
    setTimeout(() => {
      setText(uuid);
    }, 1000);
  };

  return (
    <>
      <Text
        onClick={OnClick}
        cursor="pointer"
        lineHeight="4rem"
        textAlign="center"
        fontSize="2xl"
      >
        {text}
      </Text>
      <Divider />
    </>
  );
}
