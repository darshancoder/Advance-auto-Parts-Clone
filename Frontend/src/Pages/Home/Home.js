import React, { useState } from "react";
import { Box, Text, Image, Button, Heading } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Home.css";
import { FaCar, FaHamburger, FaSearch } from "react-icons/fa";

const Home = () => {
  return (
    <Box>
      <Box className="Top-Bar">
        <Text id="Top-Bar-Text">SAVE 15% ONLINE ONLY</Text>
      </Box>
      <Box className="Navigation">
        <Box>
          <Image className="logo" src="Auto-Parts-logo.svg" />
        </Box>

        {/* <Box>
        <Input />
      </Box>
      <Box>2</Box>
      <Box>3</Box> */}
        <Box className="searchBar">
          <Box className="searchBox">
            <Box className="carBox">
              <Box>
                <FaCar className="car" />
              </Box>

              <Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    // rightIcon={<ChevronDownIcon />}
                    background=" #FFCCOO"
                  >
                    Add a Vehicle
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
              <Box>
                <FaSearch />
              </Box>
            </Box>
          </Box>
          <Box>
            {" "}
            <FaSearch className="iconS" />
          </Box>
          <Box>3</Box>
          <Box>4</Box>
        </Box>
      </Box>

      <Box className="hoverLine">
        <FaHamburger />
        <Box marginTop="10px">Shop All</Box>
        <Box marginTop="10px">Replacement Parts</Box>
        <Box marginTop="10px">Performance Parts</Box>
        <Box marginTop="10px">Accessories</Box>
        <Box marginTop="10px">Oil And Fluids</Box>
        <Box marginTop="10px" color="red.300">
          Special Offers
        </Box>
        <Box marginTop="10px">Order LookUp</Box>
      </Box>

      <Box className="Valvoline">
        <Box>
          <Heading
            fontSize="48px"
            width="600px"
            marginTop="50px"
            marginLeft="20px"
          >
            Valvoline Oil Change Bundles
          </Heading>
          <Heading
            fontSize="20px"
            marginTop="20px"
            marginLeft="20px"
            width="600px"
          >
            Full Synthetic Starting at $39.99 + FREE Gumout Regane Fuel System
            Cleaner
          </Heading>

          <Button background="#FFCC00" marginLeft="25px" marginTop="20px">
            Bundle & Save
          </Button>
        </Box>
        <Box>
          <Image
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/11/Redesign_HP-Hero-eSpot-DESKTOP-745X308_Winter_2022.jpg"
            height="320px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
