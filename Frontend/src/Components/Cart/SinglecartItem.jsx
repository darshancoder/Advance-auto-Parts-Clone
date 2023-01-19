import React from "react";
import {
  Box,
  Stack,
  Text,
  Image,
  Flex,
  Link,
  Center,
  Divider,
  Input,
  Button,
  ButtonGroup,
  Spacer,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Radio,
} from "@chakra-ui/react";
const SinglecartItem = () => {
  return (
    <Stack direction={["column", "row", "row", "row", "row", "row"]}>
      <Box>
        <Box p="5px">
          <Divider border={"1px solid black"} />
          <Flex>
            <Box id="cartimagebox" mw="123px" mh="254px" border={"solid red"}>
              <Image
                mw="123px"
                mh="123px"
                src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/thumb/12585621_osy_odxagm65m_pri_thmb.jpg"
                alt="particular cart item image not found"
              />
            </Box>
            <Box id="cartmidbox" w="681px" h="254px" border={"solid yellow"}>
              <Text fontWeight={"bold"}>
                Odyssey Battery Odyssey 65M Extreme Series 12V Battery: 65M
                Group Size, 930 CCA, 1070 CA, 135 RC
              </Text>
              <Text>Part No: ODX-AGM65M</Text>
              <Flex fontWeight={"bold"} color={"red"} m="1">
                <Box>Price</Box>
                <Spacer />
                <Box>$14.58</Box>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box id="cartrightbox" w="393px" h="254px" border={"solid green"}></Box>
    </Stack>
  );
};

export { SinglecartItem };
