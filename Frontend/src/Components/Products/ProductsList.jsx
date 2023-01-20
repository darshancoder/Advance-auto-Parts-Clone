import { Grid, GridItem } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import { getAllProducts } from "../../Redux/products/action";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Loading from "./Loading";

const ProductsList = ({ data, isLoading }) => {
  // const { id } = useParams();
  // console.log(params);
  // console.log(getAllProducts());
  // if (isLoading) {
  //   return <Loading />;
  // }
  // const [search, setSearch] = useState("");
  // const [sort, setSort] = useState("");
  // const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.product);
  // const [currentPage, setCurrentPage] = useState(1);
  // console.log(data);
  // const data = posts;
  // useEffect(() => {
  //   dispatch(getAllProducts());
  //   // console.log(fetchPosts());
  // }, [dispatch]);

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
      {data?.map((item) => {
        return (
          <GridItem key={item.id} w="auto">
            <Link to={`/products/${item.id}`}>
              <Card item={item} />
            </Link>
          </GridItem>
        );
        // console.log(item);
      })}
    </Grid>
  );
};

export default ProductsList;
