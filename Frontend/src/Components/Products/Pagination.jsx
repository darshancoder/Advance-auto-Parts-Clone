import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
const Pagination = ({ handlePageChange, page }) => {
  return (
    <Flex
      w="50%"
      m="auto"
      justify={"center"}
      align="center"
      my="2rem"
      gap="10px"
      //   border="1px solid red"
    >
      <Button
        // variant="ghost"
        disabled={page == 1}
        onClick={() => handlePageChange(-1)}
      >
        <AiOutlineArrowLeft />
      </Button>
      <Text>{page}</Text>
      <Button
        variant="ghost"
        disabled={page == 1}
        onClick={() => handlePageChange(+1)}
      >
        <AiOutlineArrowRight />
      </Button>
      {/* <Button disabled={true}>hbdfjdfj</Button> */}
    </Flex>
  );
};

export default Pagination;
