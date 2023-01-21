import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
// import ImageSlider from "./ImageSlider";
const img_arr = [
  {
    id: 1,
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/thumb/12419626_fdv_fda8755a_alt1_pri_thmb.jpg",
  },
  {
    id: 2,
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/12419626_fdv_fda8755a_alt2_pri_larg.jpg",
  },
  {
    id: 3,
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/large/12419626_fdv_fda8755a_alt3_pri_larg.jpg",
  },
  {
    id: 4,
    img: "https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/2/thumb/12419626_fdv_fda8755a_alt5_pri_thmb.jpg",
  },
];
const ProductImage = ({ data }) => {
  const [mainImage, setMainImage] = useState(img_arr[0]);

  const { img, brand } = data;
  return (
    <Flex w="50%" border="5px solid pink">
      <Flex
        w="20%"
        direction="column"
        align="center"
        justify="center"
        border="1px solid red"
      >
        {img_arr.map((ele) => {
          return (
            <Image
              key={ele.id}
              w="100%"
              src={ele.img}
              alt="img"
              cursor="pointer"
              onClick={() => setMainImage(ele)}
              _hover={{ border: "2px solid #efcb3c" }}
              borderRadius="5px"
            />
          );
        })}
      </Flex>
      <Image
        w="100%"
        h="auto"
        // border="1px solid black"
        src={mainImage.img}
        alt={brand}
        objectFit="cover"
      />
    </Flex>
  );
};

export default ProductImage;
