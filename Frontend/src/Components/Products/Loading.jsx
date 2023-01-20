import React from "react";
import { Spinner } from "@chakra-ui/react";
const Loading = () => {
  return (
    <Spinner mx="auto" mt="40px" thickness="4px" speed="0.60s" size="xl" />
  );
};

export default Loading;
