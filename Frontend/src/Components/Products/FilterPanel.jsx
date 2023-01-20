import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  CheckboxGroup,
  Stack,
  Checkbox,
  Flex,
  Text,
} from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";
const FilterPanel = () => {
  return (
    <Box
      // border="1px solid red"
      w={{ base: "100%", sm: "100%", md: "100%", lg: "30%" }}
      // mt="0.5rem"
      boxShadow="rgba(13, 1, 1, 0.1) 0px 4px 12px"
      //   display={{ base: "none", sm: "none", md: "none", lg: "block" }}
    >
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Heading as="h5" py="10px" size="sm" flex="1" textAlign="left">
                Shipping & pickup
              </Heading>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={10}>
            <CheckboxGroup
              colorScheme="green"
              //   defaultValue={["naruto", "kakashi"]}
            >
              <Stack spacing={1} direction={"column"}>
                <Checkbox value="naruto">
                  Fast & Free In-Store Pickup (3605)
                </Checkbox>
                <Checkbox value="sasuke">Ship to Home (5633)</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Heading as="h5" py="10px" size="sm" flex="1" textAlign="left">
                Category
              </Heading>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={10}>
            <CheckboxGroup colorScheme="green">
              <Stack spacing={1} direction={"column"}>
                <Checkbox value="">Air Filter (3605)</Checkbox>
                <Checkbox value="">Small Engine Filter & Tune-Up (13)</Checkbox>
                <Checkbox value="">Filters (9)</Checkbox>
                <Checkbox value="">Air Filter Wrap (1)</Checkbox>
                <Checkbox value="">Performance Air Filter (410)</Checkbox>
                <Checkbox value="">Crankcase Breather (2)</Checkbox>
                <Checkbox value="">Cabin Air Filter (1)</Checkbox>
                <Checkbox value="">Oil Filter (1)</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Heading as="h5" py="10px" size="sm" flex="1" textAlign="left">
                Product ratings
              </Heading>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={10}>
            <CheckboxGroup
              colorScheme="green"
              //   defaultValue={["naruto", "kakashi"]}
            >
              <Stack spacing={1} direction={"column"}>
                <Checkbox>
                  <Flex justify="center" gap="5px" align="center">
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    (719)
                  </Flex>
                </Checkbox>
                <Checkbox value="">
                  <Flex justify="center" gap="5px" align="center">
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    (500)
                  </Flex>
                </Checkbox>
                <Checkbox value="">
                  <Flex justify="center" gap="5px" align="center">
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    (300)
                  </Flex>
                </Checkbox>
                <Checkbox value="">
                  <Flex justify="center" gap="5px" align="center">
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    (200)
                  </Flex>
                </Checkbox>
                <Checkbox value="">
                  <Flex justify="center" gap="5px" align="center">
                    <AiFillStar fontSize="1rem" color="#fdcd0e" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    <AiFillStar fontSize="1rem" color="#dadada" />
                    (200)
                  </Flex>
                </Checkbox>
                <Checkbox value="">Not Yet Rated (3450)</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Heading as="h5" py="10px" size="sm" flex="1" textAlign="left">
                Brand
              </Heading>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={10}>
            <CheckboxGroup
              colorScheme="green"
              //   defaultValue={["naruto", "kakashi"]}
            >
              <Stack spacing={1} direction={"column"}>
                <Checkbox value="">ACDelco (59)</Checkbox>
                <Checkbox value="">Ajusa (28)</Checkbox>
                <Checkbox value="">Carquest (56)</Checkbox>
                <Checkbox value="">Champion (45)</Checkbox>
                <Checkbox value="">Fram (10)</Checkbox>
                <Checkbox value="">Haldex (7)</Checkbox>
                <Checkbox value="">Omix (33)</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton>
              <Heading as="h5" py="10px" size="sm" flex="1" textAlign="left">
                Price
              </Heading>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={10}>
            <CheckboxGroup
              colorScheme="green"
              //   defaultValue={["naruto", "kakashi"]}
            >
              <Stack spacing={1} direction={"column"}>
                <Checkbox value="">Less than $10 (233)</Checkbox>
                <Checkbox value="">$10 - $24.99 (1473)</Checkbox>
                <Checkbox value="">$25 - $49.99 (852)</Checkbox>
                <Checkbox value="">$50 - $99.99 (2806)</Checkbox>
                <Checkbox value="">$100 and up (1025)</Checkbox>
              </Stack>
            </CheckboxGroup>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Box px="1rem">
        <Flex gap="8px" direction="column">
          <Heading
            mt="10px"
            as="h4"
            py="10px"
            size="md"
            flex="1"
            textAlign="left"
          >
            Related Parts
          </Heading>
          <Text>Air Filter Housing</Text>
          <Text>Filters - Performance</Text>
          <Text>Air Filter Hardware</Text>
          <Text>Oval Tapered Air Filters</Text>
          <Text>Air Filter Oils & Cleaners</Text>
          <Text>Dual Flanged Oval Filters</Text>
          <Text>Air Filter Housing</Text>
        </Flex>
        <Flex gap="8px" direction="column">
          <Heading
            as="h4"
            py="10px"
            size="md"
            mt="10px"
            flex="1"
            textAlign="left"
          >
            Subcategories
          </Heading>
          <Text>Air Filter Wrap</Text>
          <Text>Small Engine Filter & Tune-Up</Text>
          <Text>Air Filter</Text>
          <Text>Filters</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default FilterPanel;
