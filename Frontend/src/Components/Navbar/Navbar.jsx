import { ChevronDownIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import "./Navbar.css";
import { FaCar,FaCartPlus, FaSearch, FaUser } from "react-icons/fa";

function Navbar() {
  return (
    <Box>
      <Box className="Top-Bar">
        <Text id="Top-Bar-Text">SAVE 15% ONLINE ONLY</Text>
      </Box>
      <Box className="Navigation">
        <Box>
          <Image className="logo" src="Auto-Parts-logo.svg" />
        </Box>

        <Box className="searchBar">
          <Box className="searchBox">
            <Box className="carBox">
              <Box>
                <FaCar className="car" />
              </Box>

              <Box>
                <Menu>
                  <MenuButton
                  
                    rightIcon={<ChevronDownIcon />}
                    background=" #FFCCOO"
                    marginLeft="10px"
                    marginTop="10px"
                  >
                    Add a Vehicle
                    <ChevronDownIcon />
                  </MenuButton>
                  <MenuList>
                    <MenuItem color="red.600">Download</MenuItem>
                    <MenuItem color="red.600">Create a Copy</MenuItem>
                    <MenuItem color="red.600">Mark as Draft</MenuItem>
                    <MenuItem color="red.600">Delete</MenuItem>
                    <MenuItem color="red.600">Attend a Workshop</MenuItem>
                  </MenuList>
                </Menu>
              </Box>
            </Box>

            <Box>
              <Input
                placeholder="What part do you need Today?"
                width="595px"
                marginTop="5px"
                border="1px solid"
              />
            </Box>
          </Box>
          <Box>
            {" "}
            <FaSearch className="iconS" />
          </Box >
          <Box background="#4B4B4B" display="flex" width="390px">
          <Box className="chooseStore">
            <Box>
              <Image src="https://cdn-icons-png.flaticon.com/512/3731/3731741.png" className="iconL"/>
            </Box>
            <Box>
              <Text color="white" marginTop="8px" fontSize="15px">Choose a store</Text>
            </Box>
          </Box>
          <Box display="flex" className="chooseStore">
          <Box>
              <FaUser className="iconU" />
            </Box>
            <Box>
              <Text color="white" marginTop="8px" fontSize="15px">Account</Text>
            </Box>
          </Box>
          <Box display="flex" className="cart">
            <Box>
               <FaCartPlus className="iconC" />
            </Box>
            <Box>
              <Text color="white" >0</Text>
            </Box>
          </Box>
          </Box>
        </Box>
      </Box>

      <Box className="hoverLine">
        <HamburgerIcon className="iconHam" />
        <Box marginTop="10px">Shop All</Box>
        <Box className="divider"></Box>
        <Box marginTop="10px">Replacement Parts</Box>
        <Box className="divider"></Box>
        <Box marginTop="10px">Performance Parts</Box>
        <Box className="divider"></Box>
        <Box marginTop="10px">Accessories</Box>
        <Box className="divider"></Box>
        <Box marginTop="10px">Oil And Fluids</Box>
        <Box className="divider"></Box>
        <Box marginTop="10px" color="red.300">
          Special Offers
        </Box>
        <Box className="divider"></Box>
        <Box marginTop="10px">Order LookUp</Box>
        
      </Box>
    </Box>
  );
}

export default Navbar;
