import { Box, ChakraProvider, Container } from "@chakra-ui/react";
import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import theme from "./Theme";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { v4 as uuidv4, v1 as uuidv1, NIL as uuidNIL } from "uuid";

const GenerateUUID = (mode: "v1" | "v4" | "nil") => {
  switch (mode) {
    case "v1":
      return uuidv1();
    case "v4":
      return uuidv4();
    case "nil":
      return uuidNIL;
  }
};

export function App() {
  const [mode, setMode] = useState<"v1" | "v4" | "nil">("v4");
  const [UUIDs, setUUIDs] = useState<string[]>([]);

  useEffect(() => {
    Regenerate();
  }, []);

  useEffect(() => {
    Regenerate();
  }, [mode]);

  const Regenerate = () => {
    const uuids: string[] = [];
    for (let i = 0; i < 5; i++) {
      uuids.push(GenerateUUID(mode));
      if (mode === "nil") break;
    }

    setUUIDs(uuids);
  };

  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.lg">
        <Box pt={4} minH="calc(100vh - 60px)">
          <Header mode={mode} setMode={setMode} Regenerate={Regenerate} />
          <Body UUIDs={UUIDs} />
        </Box>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

render(<App />, document.getElementById("app"));
