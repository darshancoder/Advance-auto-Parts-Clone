import {
  Button,
  FormControl,
  FormLabel,
  Img,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { authLogin } from "../../Redux/auth/action";
import { AUTH_LOGIN_RESET } from "../../Redux/auth/actionTypes";
// import { getCart } from "../../Redux/cart/action";

const initialState = {
  email: "",
  password: "",
};
function Login() {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState(initialState);
  const authState = useSelector((state) => state.auth);
  // console.log("authState: ", authState);
  const dispatch = useDispatch();

  

  React.useEffect(() => {
    onOpen();
    if (authState.userLogin.message === "User does not exist") {
      toast({
        title: authState.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    if (authState.userLogin.message === "Password is incorrect") {
      toast({
        title: authState.message,
        status: "warning",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
    }
    if (authState.userLogin.message === "Login successful") {
      // dispatch(getCart());
      toast({
        title: "Login Successfully",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      dispatch({ type: AUTH_LOGIN_RESET });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [dispatch, onOpen, navigate, authState, toast]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    dispatch(authLogin(formData));
  };
   
  if(authState.data.isAuthenticated) {
    return <Navigate to={'/'}/>
  }
  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose} size={{ base: "sm", md: "lg" }}>
        <ModalOverlay
          onClick={() => {
            navigate("/");
          }}
        />
        <ModalContent>
          <ModalHeader>Login / Start Shopping</ModalHeader>
          <Img src="https://www.clipartkey.com/mpngs/m/139-1397258_ecommerce-solutions-e-commerce-png.png" />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type={"email"}
                placeholder="email"
                name="email"
                onChange={handleChange}
                autoComplete={"off"}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type={"password"}
                placeholder="password"
                name="password"
                onChange={handleChange}
                autoComplete={"off"}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button _hover={{bg:"green"}} onClick={handleSubmit} bg={"red.500"} color={"white"} mr={3}>
              Login
            </Button>
            <Button
              onClick={() => {
                onClose();
                navigate("/");
              }}
              bg={"red"}
              color={"white"}
              _hover={{bg:"red"}}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Login;