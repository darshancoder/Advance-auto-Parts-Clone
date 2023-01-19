import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiAlertCircle } from "react-icons/fi";
import { FaTruckPickup } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import EmptyStars from "./EmptyStars";
import Rating from "./Rating";
const Card = ({ item }) => {
  // console.log(item)
  const { img, price, brand, desc, reviews, stars } = item;
  // console.log(typeof stars);

  let star_arr = [];
  for (let i = 1; i <= stars; i++) {
    star_arr.push(i);
  }
  console.log(star_arr);
  return (
    <Box
      px="15px"
      border="2px solid"
      borderColor="#dcdcdc"
      // borderTopLeftRadius="45px"
      borderRadius="10px"
    >
      <Flex direction="column" justify="center" align="center">
        <Image src={img} alt={brand} w="auto" />
      </Flex>
      <Heading as="h4" size="md" color="#cc0033">
        ${price}
      </Heading>
      <Text>
        <b>{brand} </b>
      </Text>
      <Text>
        <span>{desc} </span>
      </Text>
      <Flex align="center" gap="10px" mb="20px">
        <Flex>
          {/* {stars > 0 ? (
            star_arr.map((star) => {
              return <AiFillStar fontSize="1rem" color="#ede138" />;
            })
          ) : (
            <EmptyStars />
          )} */}
          <Rating value={stars} />
        </Flex>
        <Link fontSize="13px" textDecor="underline">
          <b>No Reviews</b>
        </Link>
      </Flex>
      <Link color="#969696" fontSize="13px" textDecor="underline">
        30 Day Replacement If Defective
      </Link>
      <Flex
        bg="#fffbed"
        w="100%"
        border="1px dashed red"
        borderRadius="7px"
        pb="15px"
        px="15px"
        align="center"
        gap="10px"
        pt="3px"
        mt="10px"
      >
        <FiAlertCircle color="red" />
        <Link fontSize="13px" textDecor="underline">
          <b>Add A Vehicle to Check Fitment</b>
        </Link>
      </Flex>

      <Flex mt="100px" direction="column" gap="10px">
        <Text>
          <b>How Would You Like To Get This Item?</b>
        </Text>
        <Flex
          align="center"
          border="2px solid"
          borderColor="#e7e7e7"
          borderRadius="7px"
          gap="10px"
          px="10px"
        >
          <FaTruckPickup fontSize="20px" color="#dadada" />
          <Box>
            <b style={{ fontSize: "13px" }}>Store Pickup</b>
            <Text fontSize="13px">Not Available For This Item</Text>
          </Box>
        </Flex>
        <Flex
          align="center"
          border="2px solid"
          borderColor="#e7e7e7"
          borderRadius="7px"
          gap="10px"
          px="10px"
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
          px="10px"
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
      </Flex>
      <Flex>
        <Button
          colorScheme="yellow"
          bgColor="#ffcc00"
          size="md"
          w={{ base: "100%", sm: "100%", md: "90%", lg: "70%" }}
          m="auto"
          my="15px"
        >
          Add to Cart
        </Button>
      </Flex>
    </Box>
  );
};
// Filter: Standard, Meets or Exceeds
export default Card;
