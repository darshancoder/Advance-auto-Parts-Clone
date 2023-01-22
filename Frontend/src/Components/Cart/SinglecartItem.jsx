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
  useToast,
} from "@chakra-ui/react";
import { FcHome, FcShop } from "react-icons/fc";

import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import {
  getCart,
  removeProductFromCart,
  updateProductInCart,
} from "../../Redux/cart/action";
const SinglecartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const {
    brand,
    category,
    original_price,
    store_pickup,
    img,
    desc,
    offer_price,
  } = cartItem.productId;
  const quantity = cartItem.quantity;
  //console.log(quantity);
  const id = cartItem._id;
  // console.log(cartItem.productId);
  const toast = useToast();
  const handleQuantity = (qty) => {
    dispatch(updateProductInCart(cartItem._id, qty));
  };
  const handleDeleteCartItem = (id) => {
    dispatch(removeProductFromCart(id))
      .then(() => dispatch(getCart()))
      .then(() =>
        toast({
          title: "Product Removed",
          description: " Product Removed from Cart",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        })
      );
  };

  return (
    <Stack direction={{ base: "column", md: "row" }}>
      <Box w={{ base: "100%", md: "60%" }}>
        <Box p="5px">
          <Divider border={"1px solid black"} />
          <Flex gap={"10px"}>
            <Box id="cartimagebox" mh="254px">
              <Image mw="123px" mh="123px" src={img} alt={brand} />
            </Box>

            <Box
              id="cartmidbox"
              w={{ base: "60%", md: "60%" }}
              h="254px"
              ml="1"
            >
              <Text fontWeight={"bold"}>
                {brand} {desc}
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
                <Box p="1">${offer_price}</Box>
              </Flex>
              <Box>
                <Flex mt="20px">
                  <Box>Qty:</Box>
                  <Box ml="2">
                    <NumberInput
                      size="md"
                      maxW={24}
                      defaultValue={quantity}
                      max={5}
                      min={1}
                      onChange={(value) => handleQuantity(value)}
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
                <Button onClick={() => handleDeleteCartItem(id)}>Remove</Button>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Box>
      <Box id="cartrightbox" h="254px" w={{ base: "100%", md: "40%" }}>
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
