import "./AllProduct.css";
import { Box, Button, Flex, Spacer, Text, SkeletonText, Grid, Skeleton,AccordionItem,  Accordion,Select, } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../../Redux/products/action";





const AllProduct = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("category");
  let [page, setPage] = useState(1);
  const [price, setPrice] = useState([]);
  const [sort, setSort] = useState("offer_price");
  const [orderBy, setOrderBy] = useState("");
  const { data } = useSelector((store) => store.products);
  // console.log(data)
  let length;
  if (query === "") {
    length = 72;
  } else if (query === "cabin_air_filter") {
    length = 20;
  } else if (query === "air_filter") {
    length = 30;
  } else if (query === "air_tank_filter") {
    length = 20;
  }
  const [prevQuery, setPrevQuery] = useState(query);
  const {
    AllProducts: { loading },
  } = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    dispatch(
      getAllProducts({ category: query, page: page, price, sort, orderBy })
    );
    setPrevQuery(query);
  }, [dispatch, query, page, prevQuery, price, sort, orderBy]);

  if(loading){
    return <Grid
      w={{
        base: "100%",
        md: "90%",
        lg: "80%",
      }}
      m="auto"
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
      }}
      gap="10"
      p="10"
    >

      {new Array(20).fill(0).map((e, i) => (
        <Box w=" 100%" m="auto" boxShadow="lg" bg="white" key={i}>
          <Skeleton size="10" h="180px" />
          <SkeletonText
            w="80%"
            m="auto"
            mb="20px"
            mt="4"
            noOfLines={4}
            spacing="4"
          />
        </Box>
      ))}
    </Grid>
  
      }
 
  return (
    <div>
      <div id="productPage">
        {/* this is filter Div */}
        <div id="filterDiv">
          <Box className='so3'>
          <Accordion allowToggle>
            <AccordionItem>
              <Select
                placeholder=" Sort By Price"
                textAlign="center"
                onChange={({ target }) => {
                  if (target.value === "increasing") {
                    setSort("offer_price");
                    setOrderBy("asc");
                  } else {
                    setSort("offer_price");
                    setOrderBy("desc");
                  }
                }}
              >
                <option value="increasing">Low to High</option>
                <option value="decreasing">High to Low</option>
              </Select>
            </AccordionItem>
          </Accordion>
          </Box>
        </div>

        <div id="mainDiv">

            
                <div id="productList">
        {

          data?.map((e,i) => (
             <div id='singleProduct' key={e._id}>
              <Link to={`/products/${e._id}`}>

                  <img src={e.img} alt="" />
                  <h1 style={{ maxWidth: "35ch", textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap",fontSize: "large", fontWeight:"bolder" }} >{e.title}</h1>

                    <div id="productPrice">
                      <div id="productMrp">
                        <Text fontSize="xs" as="s" color='tomato'>Original Price:{e.original_price}{" "}</Text> <br />
                        <Text color="black" fontSize="sm" as='b'>Discount Price : ₹{" "} {e.offer_price}</Text> <br />
                        <Text color="black" fontSize="s"> Category : {" "} {e.category}</Text>
                      </div>
                    </div>
                    
                    <Text color="teal" fontSize="xs">Free Shipping</Text>

                    <div id="productButton">
                      <Button color="white"  variant='outline' className="btn1" width="100%">
                      {/* <Link to={`/product/${e._id}`}> SEE DETAILS</Link> */}
                      SEE DETAILS
                        </Button>
                    </div>

              </Link>
            </div>
            ))
        }
        </div>
        </div>
                    <Flex justifyContent="center" gap="30px" marginTop="30px">
                    <Button disabled={page === 1} onClick={() => setPage(page - 1)}  colorScheme=' rgb(219, 222, 16);' color="black">
            Prev
          </Button>
          <Button  colorScheme=' rgb(219, 222, 16);'  >{page}</Button>
          <Button  colorScheme=' rgb(219, 222, 16);' color="black"
            disabled={page === Math.ceil(length / 20)}
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
                    </Flex>
      </div>
    </div>
  )
}

export default AllProduct



      
 
 


//   {
//   "id": 1,
//   "category": "Mens",
//   "brand": "DENNISLINGO PREMIUM ATTIRE",
//   "title": "Striped Slim Fit Shirt",
//   "price": null,
//   "original_price": "₹2,499",
//   "offer_price": 77,
//   "type": "shirt",
//   "discount": "(21%)",
//   "image": "https://assets.ajio.com/medias/sys_master/root/20210403/AcbB/6068b6caf997dd7b64643def/dennislingo_premium_attire_green_striped_slim_fit_shirt.jpg"
// },