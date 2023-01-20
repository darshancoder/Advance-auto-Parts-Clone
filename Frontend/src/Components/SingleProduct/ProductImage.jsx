import { Box, Image } from "@chakra-ui/react";
import React from "react";

const ProductImage = ({ data }) => {
  const { img, brand } = data;
  return (
    <Box w="60%" border="1px solid blue">
      <Image border="1px solid black" w="100%" src={img} alt={brand} />
    </Box>
  );
};

export default ProductImage;
