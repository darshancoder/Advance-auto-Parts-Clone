import React, { useState } from "react";
import FilterPanel from "../../Components/Products/FilterPanel";
import Navigation from "../../Components/Products/Navigation";
import { Box, Flex, Heading } from "@chakra-ui/react";
import Sorting from "../../Components/Products/Sorting";
import { useDispatch, useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { useEffect } from "react";

import Loading from "../../Components/Products/Loading";
import ProductsList from "../../Components/Products/ProductsList";
import { getAllProducts } from "../../Redux/products/action";
import Pagination from "../../Components/Products/Pagination";
import Navbar from "../../Components/Navbar/Navbar";
const AllProduct = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.product);
  // console.log(data);

  const isLoading = false;
  const description =
    "Oxygen and the gas in your tank are what fuels your car's engine. The intake sucks air into your engine so that gasoline can combust and power your vehicle to whatever destination is next. Because air is always full of dust, smog, and other debris, the air filter is what protects the inside of your car's engine from harmful pollutants outside.We carry high quality replacement air filters from Carquest, Purolator, K&N®, ACDelco, and Motorcraft®. Buy air filters online or visit your local Advance Auto Parts store and have one of our knowledgeable Team Members help you.";

  useEffect(() => {
    dispatch(getAllProducts(page));
  }, [dispatch, page]);

  const handlePageChange = (val) => {
    setPage(page + val);
  };
  // if (isLoading) {
  //   return <h1>loading.....</h1>;
  // }
  return (
    <Box
      // border="1px solid red"
      px={{ base: "1rem", sm: "1rem", md: "1rem", lg: "2.5rem" }}
    >
      <Navbar />
      <Navigation description={description} />
      <Box
        // border="1px solid pink"
        display={{ base: "none", sm: "none", md: "none", lg: "block" }}
      >
        <Sorting data={data} />
        <Flex gap="15px" mt="0.5rem">
          <FilterPanel />
          <ProductsList data={data} isLoading={isLoading} />
        </Flex>
      </Box>
      {/* FOR RESPONSIVE DESIGN */}
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
                  Refine Results({data?.length})
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
        <ProductsList data={data} isLoading={isLoading} />
      </Flex>
      <Pagination handlePageChange={handlePageChange} page={page} />
    </Box>
  );
};

export default AllProduct;
