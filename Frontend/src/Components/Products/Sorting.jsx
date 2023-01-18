import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import React from "react";

const Sorting = () => {
  return (
    <>
      <Flex justify="space-between" align="center">
        <Heading
          as="h4"
          size="md"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          5633 Results
        </Heading>
        <Flex
          // border="2px solid red"
          w={{ base: "100%", sm: "100%", md: "100%", lg: "20%" }}
          justify="space-between"
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          alignItems="center"
        >
          <Text textAlign="left">SORT BY</Text>
          <Select
            size="md"
            w={{ base: "100%", sm: "100%", md: "100%", lg: "70%" }}
            focusBorderColor="yellow.300"
          >
            <option value="option1">Best Match</option>
            <option value="option2">Most Popular</option>
            <option value="option3">Top Rated</option>
            <option value="option4">Price (Low to High)</option>
            <option value="option5">Price (High to Low)</option>
            <option value="option6">Brand(A-Z)</option>
            <option value="option7">Brand(Z-A)</option>
          </Select>
        </Flex>
      </Flex>
      <Box borderBottom="4px solid" borderColor="gray.100" pb="1.5rem"></Box>
    </>
  );
};

export default Sorting;
