import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { FaTruckPickup } from "react-icons/fa";
import { FiAlertCircle } from "react-icons/fi";
// import { Link } from "react-router-dom";
import Rating from "../Products/Rating";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../Redux/cart/action";
const ProductDetails = ({ data }) => {
  const { desc, brand, price, reviews, stars } = data;
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const handleChangeQty = (val) => {
    setQty(qty + val);
  };

  const handleAddToCart = (data) => {
    dispatch(addProductToCart(data));
  };
  //   const reviews = 5;
  //   const stars = 3;
  //   const price = 23.45;
  return (
    <Box w="50%" border="1px solid red">
      <Heading mr="10px" display="inline" as="h2" size="xl">
        {brand}
      </Heading>
      <span style={{ fontSize: "30px" }}>{desc}</span>

      <Flex align="center" gap="10px" mb="20px">
        {/* <Flex> */}
        <Rating value={stars} />
        {/* </Flex> */}
        <Link fontSize="13px" textDecor="underline">
          <b>{reviews == 0 ? "No Reviews" : `(${reviews} Reviews)`}</b>
        </Link>
      </Flex>
      <Link color="#969696" fontSize="13px" textDecor="underline">
        30 Day Replacement If Defective
      </Link>
      <Heading as="h4" size="md" color="#cc0033">
        ${price}
      </Heading>
      <Flex
        bg="#fffbed"
        w="100%"
        border="1px dashed red"
        borderRadius="7px"
        // pb="15px"
        p="15px"
        align="center"
        gap="10px"
        // pt="3px"
        mt="10px"
      >
        <FiAlertCircle color="red" />
        <Link fontSize="13px" textDecor="underline">
          <b>Add A Vehicle to Check Fitment</b>
        </Link>
      </Flex>

      <Box my="20px">
        <b>How Would You Like To Get This Item?</b>
      </Box>
      <Box
        display={{ base: "block", sm: "block", md: "block", lg: "flex" }}
        gap="10px"
      >
        <Flex
          alignItems="center"
          justify="center"
          border="2px solid"
          borderColor="#e7e7e7"
          borderRadius="7px"
          gap="10px"
          //   px="10px"
          p="10px"
        >
          <FaTruckPickup fontSize="20px" color="#dadada" />
          <Box>
            <b style={{ fontSize: "13px" }}>Store Pickup</b>
            <Text fontSize="13px">Not Available For This Item</Text>
          </Box>
        </Flex>
        <Flex
          align="center"
          justify="center"
          border="2px solid"
          borderColor="#e7e7e7"
          borderRadius="7px"
          gap="10px"
          //   px="10px"
          p="10px"
        >
          <FaTruckPickup fontSize="20px" color="#dadada" />
          <Box>
            <b style={{ fontSize: "13px" }}>Same Day Home Delivery</b>
            <Text fontSize="13px">Not Available For This Item</Text>
          </Box>
        </Flex>
        <Flex
          align="center"
          border="2px solid"
          borderColor="#e7e7e7"
          bg="#f2f2f2"
          borderRadius="7px"
          gap="10px"
          p="10px"
        >
          <Box bg="#000" borderRadius="50%" p="5px">
            <BsBoxSeam color="#fff" fontSize="15px" />
          </Box>

          <Box>
            <b style={{ fontSize: "13px" }}>
              Home Delivery - <span style={{ color: "green" }}>Free</span> over
              $35
            </b>
            <Text fontSize="13px">Standard Delivery Available</Text>
          </Box>
        </Flex>
      </Box>
      <Flex align="center" justify="space-between" gap="20px">
        <Flex align="center" justify="center">
          <b>Qty:</b>
          <Button
            disabled={qty === 1}
            variant="link"
            onClick={() => handleChangeQty(-1)}
          >
            <AiOutlineMinusCircle />
          </Button>
          <Box>{qty}</Box>

          <Button variant="link" onClick={() => handleChangeQty(+1)}>
            <AiOutlinePlusCircle />
          </Button>
        </Flex>
        <Button
          colorScheme="yellow"
          bgColor="#ffcc00"
          size="md"
          w="100%"
          m="auto"
          my="15px"
          p="25px"
          onClick={() => handleAddToCart(data)}
        >
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductDetails;
