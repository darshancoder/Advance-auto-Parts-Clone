import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../../Components/SingleProduct/ProductDetails";
import ProductImage from "../../Components/SingleProduct/ProductImage";

const getSingleProduct = (id) => {
  return axios.get(`http://localhost:8080/airfilters`, {
    params: {
      id: id,
    },
  });
};

const SingleProduct = () => {
  const [data, setData] = useState({});
  // const { brand, price } = data;
  console.log(data);

  const { id } = useParams();
  // const { cartItems } = useContext(CartContext);
  // console.log(cartData);

  useEffect(() => {
    handleGetProducts(id);
  }, [id]);

  const handleGetProducts = (id) => {
    getSingleProduct(id)
      .then((res) => {
        // console.log(res.data);
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Flex
      w="85%"
      justify="space-between"
      align="center"
      m="auto"
      border="1px solid violet"
      mt="8rem"
    >
      <ProductImage data={data} />
      <ProductDetails data={data} />
    </Flex>
  );
};

export default SingleProduct;
