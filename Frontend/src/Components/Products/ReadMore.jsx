import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/products/action";

const ReadMore = ({ description }) => {
  // const products_data = useSelector((store) => store.products);
  // // console.log(products_data);
  // const {
  //   products: { description },
  // } = products_data;
  // // console.log(description);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <Box mt="15px">
      <p>
        {isReadMore && description !== undefined
          ? description.slice(0, 350) + "...."
          : description}
      </p>
      {description !== undefined && description.length > 350 && (
        <button
          style={{ fontWeight: "bold", color: "#266fae" }}
          onClick={toggleReadMore}
        >
          {isReadMore ? "Read More" : "Read Less"}
        </button>
      )}
      <Box borderBottom="2px solid #ffcc00" my="1rem"></Box>
    </Box>
  );
};

export default ReadMore;
