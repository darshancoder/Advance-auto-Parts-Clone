import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  sortByBrandAsc,
  sortByBrandDesc,
  sortByMostPopular,
  sortByPriceAsc,
  sortByPriceDesc,
  sortByTopRated,
} from "../../Redux/products/action";

const Sorting = () => {
  const description = "abcdj";
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.product);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (sort === "priceAsc") {
      dispatch(sortByPriceAsc());
    }
    if (sort === "priceDesc") {
      dispatch(sortByPriceDesc());
    }
    if (sort === "brandAsc") {
      dispatch(sortByBrandAsc());
    }
    if (sort === "brandDesc") {
      dispatch(sortByBrandDesc());
    }
    if (sort === "mostpopular") {
      dispatch(sortByMostPopular());
    }
    if (sort === "toprated") {
      dispatch(sortByTopRated());
    }
    if (sort === "") {
      dispatch(getAllProducts());
    }
  }, [sort, dispatch]);

  return (
    <>
      <Flex justify="space-between" align="center">
        <Heading
          as="h4"
          size="md"
          display={{ base: "none", sm: "none", md: "none", lg: "block" }}
        >
          {data?.length} Results
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
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Best Match</option>
            <option value="mostpopular">Most Popular</option>
            <option value="toprated">Top Rated</option>
            <option value="priceAsc">Price (Low to High)</option>
            <option value="priceDesc">Price (High to Low)</option>
            <option value="brandAsc">Brand(A-Z)</option>
            <option value="brandDesc">Brand(Z-A)</option>
          </Select>
        </Flex>
      </Flex>
      <Box borderBottom="4px solid" borderColor="gray.100" pb="1.5rem"></Box>
    </>
  );
};

export default Sorting;
