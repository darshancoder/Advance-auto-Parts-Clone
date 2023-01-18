import { Grid, GridItem } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/products/action";
import Card from "./Card";

const Products = () => {
  const products_data = useSelector((store) => store.products);
  console.log(products_data);
  const {
    products: { data },
  } = products_data;
  // console.log(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <Grid
      templateColumns={{
        base: "repeat(1, 1fr)",
        sm: "repeat(1, 1fr)",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={"10px"}
      w="100%"
      // border="2px solid violet"
    >
      {data &&
        data.map((item) => {
          return (
            <GridItem key={item.id} w="auto">
              <Card item={item} />
            </GridItem>
          );
        })}
      {/* <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem>
      <GridItem w="auto">
        <Card />
      </GridItem> */}
    </Grid>
  );
};

export default Products;
