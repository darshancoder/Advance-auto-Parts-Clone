import { Box, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <Box>
      <Box className="Footer1">
        <Box marginLeft="120px" marginTop="40px">
          <Text fontWeight="bold" fontSize="16px">
            TOP REPLACEMENT PARTS
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Brake Pads & Shoes
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Brake Rotors
          </Text>
          <Text marginTop="20px" fontSize="16px">
            ALternators
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Water Pumps
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Show All
          </Text>
        </Box>
        <Box marginLeft="120px" marginTop="40px">
          <Text fontWeight="bold" fontSize="16px">
            POPULAR MAKES
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Ford Parts
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Honda Parts
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Chevrolet Parts
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Dodge Parts
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Show All
          </Text>
        </Box>
        <Box marginLeft="120px" marginTop="40px">
          <Text fontWeight="bold" fontSize="16px">
            {" "}
            ROUTINE MAINTENANCE PARTS
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Spark Plugs
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Car Batteries
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Oil Filters
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Motor Oil
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Show All
          </Text>
        </Box>
        <Box marginLeft="120px" marginTop="40px">
          <Text fontWeight="bold" fontSize="16px">
            SHOP BY
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Manufacturer Brand
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Vehicle Make/Model
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Performance Parts
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Lawn & Garden
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Boating & Marine
          </Text>
          <Text marginTop="20px" fontSize="16px">
            MotorCycle & ATV
          </Text>
        </Box>
      </Box>

      <Box className="Footer2">
        <Box marginLeft="100px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            {" "}
            CUSTOMER SUPPORT
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Contact Us
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Forgot Password
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Help Desk
          </Text>
          <Text marginTop="15px" fontSize="16px">
            InStore PickUp
          </Text>
          <Text marginTop="15px" fontSize="16px">
            InStore Services
          </Text>
          <Text marginTop="15px" fontSize="16px">
            {" "}
            Order Tracking
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Recall Information
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Return Policy
          </Text>
          <Text marginTop="15px" fontSize="16px">
            Same Day Delivery
          </Text>
          <Text marginTop="15px" fontSize="16px">
            UBER Driver Rewards
          </Text>
        </Box>
        <Box marginLeft="140px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            {" "}
            ABOUT US
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Affiliate Program
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Carrer Opportunities
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Corporate Information
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Gift Cards
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Investore Relations{" "}
          </Text>
          <Text marginTop="20px" fontSize="16px">
            2020 Annual Report{" "}
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Annual Meeting Matrrials{" "}
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Store Locator{" "}
          </Text>
        </Box>
        <Box marginLeft="120px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            {" "}
            PROFESSIONAL SHOPS
          </Text>
          <Text marginTop="20px" fontSize="16px">
            My Advance
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Online Parts Ordering
          </Text>
          <Text marginTop="20px" fontSize="16px">
            TechNet Professional
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Technical Training
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Parts & Products
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Promotion & Rewards
          </Text>
          <Text marginTop="20px" fontSize="16px">
            Find My Mechanic
          </Text>
        </Box>
        <Box marginLeft="120px" marginTop="40px" color="white">
          <Text
            fontWeight="bold"
            fontSize="16px"
            borderBottom="1px solid yellow"
          >
            FOLLOW US
          </Text>
          <Box display="flex" gap="10px">
            <FaFacebook className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              Facebook
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <FaTwitter className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              Twitter
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <FaInstagram className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              Instagram
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <FaPinterest className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              Pinterest
            </Text>
          </Box>
          <Box display="flex" gap="10px">
            <FaYoutube className="iconFollow" />
            <Text marginTop="25px" fontSize="18px">
              YouTube
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
