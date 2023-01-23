import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Flex,
  Grid,
  useToast,
} from "@chakra-ui/react";
import { Box, Image, Text, SimpleGrid, Button } from "@chakra-ui/react";
import {
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../../../Redux/products/action";
import { useSelector, useDispatch } from "react-redux";

function Dashboard() {
  const [product, setProduct] = useState({});
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { data } = useSelector((store) => store.products);
  console.log(data)
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const handleformData = ({ target }) => {
    let val = target.value;
    if (target.name === "price") {
      val = +target.value;
    }
    setProduct({ ...product, [target.name]: val });
  };
  const handleSubmit = () => {
    dispatch(updateProduct(product._id, product));
    onClose();
    toast({
      title: "Product updated",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Box>
      <SimpleGrid
        templateColumns={{
          base: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={4}
      >
        {data &&
          data.map((item, index) => (
            <Grid
              border="1px"
              borderColor="lightblue"
              alignItems={"center"}
              justifyContent={"center"}
              key={index}
            >
              <Box m={6}>
                <div>
                  <Image
                    src={item.img}
                    alt={`Picture of ${item.brand}`}
                    roundedTop="lg"
                  />
                  <Text as="b" color="black">
                    {" "}
                    {item.brand.slice(0, 20)}...{" "}
                  </Text>{" "}
                  <br />
                  <Text as="b" color="grey">
                    Category: {item.category}
                  </Text>
                  <Text color="grey">Brand: {item.brand.slice(0, 10)}</Text>
                  <Text color="grey">Price: {item.offer_price}₹</Text>
                  <Flex>
                    <Button
                      marginTop={5}
                      colorScheme="red"
                      variant="outline"
                      onClick={() => {
                        dispatch(deleteProduct(item._id));
                        toast({
                          title: "Product Deleted",
                          status: "info",
                          duration: 2000,
                          isClosable: true,
                          position: "top",
                        });
                      }}
                    >
                      Delete
                    </Button>

                    <Button
                      onClick={() => {
                        onOpen();
                        setProduct(item);
                      }}
                      marginTop={5}
                      marginLeft="5"
                      colorScheme="blue"
                      variant="outline"
                    >
                      Update
                    </Button>
                  </Flex>
                </div>
              </Box>
            </Grid>
          ))}

        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add A Product</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel> Image URL</FormLabel>
                <Input
                  onChange={handleformData}
                  ref={initialRef}
                  type="url"
                  name="imageUrl"
                  value={product.imageUrl}
                />
              </FormControl>
              <FormControl>
                <FormLabel> name</FormLabel>
                <Input
                  onChange={handleformData}
                  ref={initialRef}
                  placeholder="Product Name"
                  name="name"
                  value={product.name}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Category</FormLabel>
                <Input
                  onChange={handleformData}
                  name="category"
                  placeholder="like: Mackup,hair.."
                  value={product.category}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Brand</FormLabel>
                <Input
                  onChange={handleformData}
                  placeholder="Brand Name"
                  name="brand"
                  value={product.brand}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input
                  onChange={handleformData}
                  placeholder="In ₹ "
                  value={product.price}
                  name="price"
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;