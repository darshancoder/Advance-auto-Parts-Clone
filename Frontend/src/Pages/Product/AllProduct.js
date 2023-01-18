import React from "react";
import FilterPanel from "../../Components/Products/FilterPanel";
import Navigation from "../../Components/Products/Navigation";
import Products from "../../Components/Products/Products";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Sorting from "../../Components/Products/Sorting";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/products/action";
const AllProduct = () => {
  const products_data = useSelector((store) => store.products);
  // console.log(products_data);
  const { products } = products_data;
  // console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Box
      // border="1px solid red"
      px={{ base: "1rem", sm: "1rem", md: "1rem", lg: "2.5rem" }}
    >
      <Navigation />
      <Box
        // border="1px solid pink"
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Sorting />
        <Flex gap="15px" mt="0.5rem">
          <FilterPanel />
          <Products />
        </Flex>
      </Box>

      <Accordion
        defaultIndex={[0]}
        allowMultiple
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
      >
        <AccordionItem>
          <Heading as="h5" size="sm">
            <AccordionButton boxShadow="rgb(55 55 55 / 16%) 0px 4px 8px">
              <Box as="span" flex="1" textAlign="left">
                <Heading as="h5" py="10px" size="sm" flex="1" textAlign="left">
                  Refine Results(5437)
                </Heading>
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </Heading>
          <AccordionPanel pb={4} px="0px">
            <Sorting />
            <FilterPanel />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex
        gap="15px"
        mt="0.5rem"
        display={{ base: "block", sm: "block", md: "block", lg: "none" }}
      >
        <Products />
      </Flex>
    </Box>
  );
};

export default AllProduct;
