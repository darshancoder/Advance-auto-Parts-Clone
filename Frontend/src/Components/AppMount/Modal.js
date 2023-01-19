import {
    Button,
    Modal,
    Image,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    Heading,
    Text,
    Input,
  } from "@chakra-ui/react";
  import React, { useState, useEffect } from "react";
  
  function MyComponent() {
    const [show, setShow] = useState(true);
    const { onClose } = useDisclosure();
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        setShow(false);
      }, 5000);
  
      return () => clearTimeout(timeout);
    }, []);
  
    if (!show) {
      return null;
    }
  
    return (
      <>
        <Modal isOpen={show} onClose={onClose} width="900px">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader></ModalHeader>
            <Image
              src="https://s1.q4cdn.com/172833328/files/design/client-logo.svg"
              width="200px"
              height="60px"
              margin="auto"
            />
            <Heading  marginTop="20px" margin="auto" fontSize="30px" width="370px">
             WELCOME TO ADVANCE AUTO PARTS
            </Heading>
            <ModalCloseButton />
            <Heading width="300px" margin="auto" marginTop="40px">
              WANT 15% OFF YOUR ORDERS
            </Heading>
  
            <Text marginTop="30px" marginLeft="50px">
              Activate Discount by entering your email below
            </Text>
            <Input
              placeholder="E-mail Address"
              marginTop="40px"
              width="360px"
              border="1px solid"
              margin="auto"
            />
  
            <ModalFooter gap="10px">
              <Button variant="outline" background="#FFCC00">
                Activate My Discount
              </Button>
              
              <Button mr={3} onClick={onClose}>
                Not At The Moment
              </Button>
            </ModalFooter>
           
          </ModalContent>
        </Modal>
      </>
    );
  }
  
  export default MyComponent;
  