import React, { useState } from "react";
import { Box, Text, Image, Button, Heading } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Home.css";
import { FaCar, FaHamburger, FaSearch } from "react-icons/fa";

import React from "react";
import { Box, Text, Image, Button, Heading} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import "./Home.css";
import {
  FaBoxOpen,
  FaCar,
  FaDollarSign,
  FaHamburger,
  FaSearch,
} from "react-icons/fa";

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
                    rightIcon={<ChevronDownIcon />}
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

      <Box className="aboveSignUp-Box">
        <Box className="div" marginTop="18px" marginLeft="10px">
          <Box>
            <FaDollarSign id="iconD" />
          </Box>
          <Box>
            <Heading fontSize="25px" marginLeft="8px">
              Rain X: $15 Gift Card
            </Heading>
            <Text>
              By Mail on 2 Rain-X Silicon AdvantEdge Maximum Performance Beam
              wiper Blades
            </Text>
          </Box>
        </Box>

        <Box className="div" marginTop="18px">
          <Box>
            <FaBoxOpen id="iconD" />
          </Box>
          <Box>
            <Heading fontSize="25px" marginLeft="8px">
              Die Hard: $15 Gift Card
            </Heading>
            <Text>By Mail When you buy any Die-Hard Automotive Battery</Text>
          </Box>
        </Box>
        <Box className="div" marginTop="18px">
          <Box>
            <FaCar id="iconD" />
          </Box>
          <Box>
            <Heading fontSize="25px" marginLeft="8px">
              Sylvania: $15 Gift Card
            </Heading>
            <Text>
              By Mail on Sylvania Silver Star ULTRA Twin pack or 2 Single Pack
              Headlights
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="signUpBox">
        <Box display="flex" gap="20px">
          <Box>
            <FaCar className="iconSC" />
          </Box>
          <Box>
            <Heading fontSize="32px" marginTop="20px">
              It all Starts Here
            </Heading>
            <Text fontSize="20px">Add your Vehicle to see Exact Fit Parts</Text>
          </Box>
          <Box display="flex" gap="10px">
            <Input placeholder="Enter Year/Make/Model/Engine" marginTop="30px" background="white" />
            <Input placeholder="Enter License Plate" marginTop="30px" background="white" />
            <Input placeholder="Enter Vin" marginTop="30px" background="white" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
