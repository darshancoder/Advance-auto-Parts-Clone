import React from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Link,
  Center,
  RadioGroup,
  Divider,
  Input,
  Button,
  ButtonGroup,
  Spacer,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
  Select,
} from "@chakra-ui/react";
import { FcHome, FcShop } from "react-icons/fc";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
const SinglecartItem = () => {
  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Box>
        <Box p="5px">
          <Divider border={"1px solid black"} />
          <Flex>
            <Box id="cartimagebox" mh="254px">
              <Image
                mw="123px"
                mh="123px"
                src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/thumb/12585621_osy_odxagm65m_pri_thmb.jpg"
                alt="particular cart item image not found"
              />
            </Box>
            <Box id="cartmidbox" h="254px" ml="1">
              <Text fontWeight={"bold"}>
                Odyssey Battery Odyssey 65M Extreme Series 12V Battery: 65M
                Group Size, 930 CCA, 1070 CA, 135 RC
              </Text>
              <Text>Part No: ODX-AGM65M</Text>
              <Flex
                border={"1px solid grey"}
                fontWeight={"bold"}
                color={"red"}
                mt="3"
              >
                <Box p="1">Price</Box>
                <Spacer />
                <Box p="1">$14.58</Box>
              </Flex>
              <Box>
                <Flex mt="20px">
                  <Box>Qty:</Box>
                  <Box ml="2">
                    <NumberInput
                      size="md"
                      maxW={24}
                      defaultValue={1}
                      max={5}
                      min={1}
                    >
                      <NumberInputField />
                      <NumberInputStepper>
                        <NumberIncrementStepper />
                        <NumberDecrementStepper />
                      </NumberInputStepper>
                    </NumberInput>
                  </Box>
                </Flex>
              </Box>
              <Box mt="3">
                <Link>
                  <Text>Remove</Text>
                </Link>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box id="cartrightbox" h="254px">
        <RadioGroup>
          <Box bg="rgb(242, 242, 242)" borderRadius="5" p="10px">
            <Flex pt="7px" maxWidth="100%">
              <Text fontWeight="bold" mb="1">
                <Radio value="pickstore" fontWeight="bold" colorScheme="yellow">
                  In-Store Pickup
                </Radio>
              </Text>
              <Spacer />
              <Text fontSize={"30px"}>
                <FcShop />
              </Text>
            </Flex>
            <Text ml="22">Ready in 30 min. Curbside Available.</Text>
          </Box>

          <Box bg="rgb(242, 242, 242)" mt="2" borderRadius="5" p="10px">
            <Flex pt="7px" maxWidth="100%">
              <Text fontWeight="bold" mb="1">
                <Radio
                  value="homedeliver"
                  fontWeight="bold"
                  colorScheme="yellow"
                >
                  Ship to Home
                </Radio>
              </Text>
              <Spacer />
              <Text fontSize={"30px"}>
                <FcHome />
              </Text>
            </Flex>
            <Text ml="22">
              Ships within 1 business day, arrives in 3-4 days
            </Text>
          </Box>
        </RadioGroup>
      </Box>
    </Stack>
  );
};

export { SinglecartItem };
