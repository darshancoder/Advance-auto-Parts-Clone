import React from "react";
import { Box, Text, Image, Button, Heading, Input } from "@chakra-ui/react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import "./Home.css";
import {
  FaBoxOpen,
  FaCar,
  FaDollarSign,
  FaRecycle,
  FaSave,
  FaShuttleVan,
  FaStar,
  FaUser,
} from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const fadeImages = [
  {
    url1: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/flyer-lg.jpg",
    caption1: "Sales Flyer",
    url2: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/landing/battery/diehard/HP-Category-Grid-DieHard-Gold-95x95.jpg",
    caption2: "Batteries",
    url3: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-Brakes.jpg",
    caption3: "Brake Pads & Shoes",
    url4: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-FRAM-Oil-and-Filter.jpg",
    caption4: "Oil Change Bundles",
    url5: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/hm-topcat-wipers.jpg",
    caption5: "Wipers",
    url6: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/brake-rotors.jpg",
    caption6: "Roters & Drums",
  },
  {
    url1: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/alternator.png",
    caption1: "Alternators",
    url2: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/spark-plugs.jpg",
    caption2: "Spark Plugs",
    url3: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2018/07/air-filter.jpg",
    caption3: "Engine Air Filters",
    url4: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/04-CQ-Radiator.jpg",
    caption4: "Radiators",
    url5: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-Brake-Caliper-wBox.jpg",
    caption5: "Brake calipers",
    url6: "https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/home/TC-ShocksStruts.jpg",
    caption6: "Shocks & Struts",
  },
];

const Home = () => {
  return (
    <Box>

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
            <Input
              placeholder="Enter Year/Make/Model/Engine"
              marginTop="30px"
              background="white"
            />
            <Input
              placeholder="Enter License Plate"
              marginTop="30px"
              background="white"
            />
            <Input
              placeholder="Enter Vin"
              marginTop="30px"
              background="white"
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <Heading marginTop="30px" marginLeft="10px">
          TOP CATEGORIES
        </Heading>
        <Box className="slide-container">
          <Slide>
            {fadeImages.map((fadeImage, index) => (
              <Box className="each-fade" key={index}>
                <Box className="image-container">
                  <Box
                    width="230px"
                    height="230px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url1} />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption1}
                    </Heading>
                  </Box>
                  <Box
                    width="230px"
                    height="230px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url2} />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption2}
                    </Heading>
                  </Box>
                  <Box
                    width="230px"
                    height="230px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url3} />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption3}
                    </Heading>
                  </Box>
                  <Box
                    width="230px"
                    height="230px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url4} />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption4}
                    </Heading>
                  </Box>
                  <Box
                    width="230px"
                    height="230px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url5} />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption5}
                    </Heading>
                  </Box>{" "}
                  <Box
                    width="230px"
                    height="230px"
                    border="1px solid rgb(214, 213, 213)"
                  >
                    <Image src={fadeImage.url6} />
                    <Heading fontSize="20px" textAlign="center">
                      {fadeImage.caption6}
                    </Heading>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slide>
        </Box>
      </Box>

      <Box display="flex" gap="20px" marginTop="50px" marginLeft="20px">
        <Box
          width="205px"
          height="220px"
          border="1px solid"
          borderRadius="10px"
          background="#1E1E1E"
        >
          <FaCar className="iconH" />
          <Heading
            color="#FFCC00"
            fontSize="20px"
            width="200px"
            marginTop="10px"
            marginLeft="10px"
          >
            Free in Store Services
          </Heading>
          <Text color="white" marginLeft="10px" width="170px">
            Personalized care including battery testing, installation, oil
            recycling , wiper installation and more!
          </Text>
        </Box>
        <Box
          width="205px"
          height="220px"
          border="1px solid"
          borderRadius="10px"
          background="#1E1E1E"
        >
          <FaShuttleVan className="iconH" />
          <Heading
            color="#FFCC00"
            fontSize="20px"
            width="150px"
            marginTop="10px"
            marginLeft="10px"
          >
            Advance Same Day
          </Heading>
          <Text color="white" marginLeft="10px" width="170px">
            Free in store or curbside pickup . Plus delivery available in
            selected Markets
          </Text>
        </Box>
        <Box
          width="205px"
          height="220px"
          border="1px solid"
          borderRadius="10px"
          background="#1E1E1E"
        >
          <FaCar className="iconH" />
          <Heading
            color="#FFCC00"
            fontSize="20px"
            width="200px"
            marginTop="10px"
            marginLeft="10px"
          >
            Speed Perks
          </Heading>
          <Text color="white" marginLeft="10px" width="170px">
            Get points for every purchase. Reddem your points for rewards
          </Text>
        </Box>
        <Box
          width="205px"
          height="220px"
          border="1px solid"
          borderRadius="10px"
          background="#1E1E1E"
        >
          <FaUser className="iconH" />
          <Heading
            color="#FFCC00"
            fontSize="20px"
            width="150px"
            marginTop="10px"
            marginLeft="10px"
          >
            Hiring Now: In Store & Corporate
          </Heading>
          <Text color="white" marginLeft="10px" width="170px">
            Be seen, heard & value. Careers start and thrive here Apply Now{" "}
          </Text>
        </Box>
        <Box
          width="205px"
          height="220px"
          border="1px solid"
          borderRadius="10px"
          background="#1E1E1E"
        >
          <FaDollarSign className="iconH" />
          <Heading
            color="#FFCC00"
            fontSize="20px"
            width="200px"
            marginTop="10px"
            marginLeft="10px"
          >
            Rebates and SweepStakes
          </Heading>
          <Text color="white" marginLeft="10px" width="170px">
            Find out about rebate and sweepstake offers . Submit your rebate
            online and more!
          </Text>
        </Box>
        <Box
          width="205px"
          height="220px"
          border="1px solid"
          borderRadius="10px"
          background="#1E1E1E"
        >
          <FaUser className="iconH" />
          <Heading
            color="#FFCC00"
            fontSize="20px"
            width="200px"
            marginTop="10px"
            marginLeft="10px"
          >
            Need a Certified Technician
          </Heading>
          <Text color="white" marginLeft="10px" width="170px">
            We have approved Professionals to approve any problem you have
          </Text>
        </Box>
      </Box>

      <Heading marginTop="40px" marginLeft="20px">
        UNDER THE HOOD SAVINGS
      </Heading>

      <Box display="flex" marginLeft="20px" gap="10px" marginTop="20px">
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://www.diehard.com/wp-content/uploads/2022/04/tools-header.jpg"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
            Save on New Die Hard Tools
          </Heading>
          <Text
            fontSize="20px"
            width="324px"
            textAlign="center"
            marginTop="10px"
          >
            Get the Reliable and dependable tools built to Last.
          </Text>
        </Box>
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://static.wixstatic.com/media/d63349_3f77d8d009f049a7b2832a4e5f6d6287~mv2.png/v1/fill/w_712,h_672,al_c,lg_1,q_90,enc_auto/product-antifreeze-with-cor-guard.png"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
            Prestone: Get a $5 Gift Card
          </Heading>
          <Text
            fontSize="20px"
            width="324px"
            textAlign="center"
            marginTop="10px"
          >
            By Mail, when you buy any Prestone Platinum Anti-freeze
          </Text>
        </Box>
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://lucasoil.com/Lucas-Fuel-Treatment/images/Fuel-Treatment-Group-v2.png"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
            Hot Deal: 2 For $11{" "}
          </Heading>
          <Text
            fontSize="20px"
            width="324px"
            textAlign="center"
            marginTop="20px"
          >
            Increase your MPG with Lucas fuel Treatment. Must Buy 2
          </Text>
        </Box>
        <Box
          width="320px"
          height="400px"
          border="1px solid rgb(226, 224, 224)"
          borderRadius="20px"
        >
          <Image
            width="330px"
            height="250px"
            borderTopLeftRadius="20px"
            borderTopRightRadius="20px"
            src="https://cdn2.webdamdb.com/1280_QuIbPlohGN21.jpg"
          />
          <Heading textAlign="center" fontSize="24px" width="300px">
            Starting at $21.99
          </Heading>
          <Text
            fontSize="20px"
            width="324px"
            textAlign="center"
            marginTop="20px"
          >
            Carquest Standard Brake pads. Reliable brakes at a grat Price.
          </Text>
        </Box>
      </Box>

      <Heading marginTop="40px" marginLeft="20px">
        TOP SELLERS
      </Heading>
      <Box className="outline"></Box>

      <Box display="flex" marginTop="20px" gap="20px" marginLeft="20px">
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3313/thumb/12452851_slh_23452635_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $4.49
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(30)</Text>
            </Box>
            <Text fontWeight="bold">Splash</Text>
            <Text>Splash 20-F Blue</Text>
          </Box>
        </Box>

        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3232/thumb/7630016_gum_800001364_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $7.29
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(50)</Text>
            </Box>
            <Text fontWeight="bold">GumOut</Text>
            <Text>Regane Complete Fuel System</Text>
          </Box>
        </Box>
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3222/thumb/7060386_wes_w20014_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $6.99
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(1170)</Text>
            </Box>
            <Text fontWeight="bold">Carquest Wearever</Text>
            <Text>DOT 3 Brake Fluid</Text>
          </Box>
        </Box>
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3321/thumb/11495179_ftl_op112emi_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $4.49
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(198)</Text>
            </Box>
            <Text fontWeight="bold">Floo Tool</Text>
            <Text>Standard Duty 7 Quart drain Pan</Text>
          </Box>
        </Box>
      </Box>

      <Box
        width="98%"
        height="238px"
        borderRadius="20px"
        background="#FFCC00"
        marginTop="60px"
        marginLeft="20px"
        display="flex"
        gap="140px"
      >
        <Box>
          <Image
            marginLeft="160px"
            paddingTop="50px"
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/02/speedPerks.png"
          />
          <Text
            marginLeft="140px"
            width="445px"
            marginTop="10px"
            fontSize="16px"
          >
            The upgraded App is here. View and use your Perks, Bucks and Gas
            rewards easily right from the home screen. Download Now!
          </Text>
        </Box>
        <Box display="flex" gap="50px">
          <Image
            marginTop="-40px"
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/12/homepage-phone2.png"
          />
          <Image
            width="99px"
            height="99px"
            marginTop="60px"
            textAlign="center"
            src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2022/12/homepage-appicon.png"
          />
        </Box>
        <Box></Box>
      </Box>

      <Box display="flex" marginTop="30px" gap="15px" marginLeft="20px">
        <Box
          width="660px"
          height="100px"
          border="1px solid"
          gap="16px"
          background="#1E1E1E"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          borderBottom="1px solid yellow"
          display="flex"
        >
          <Box>
            <FaBoxOpen className="iconB" />
          </Box>
          <Box>
            <Heading color="#FFCC00" marginTop="10px" fontSize="24px">
              Find the Perfect Battery
            </Heading>
            <Text fontSize="16px" color="white">
              Our NEW DieHard Battery Recommender Tool gives a Personalized
              recommendation.
            </Text>
          </Box>
        </Box>
        <Box
          width="660px"
          height="100px"
          border="1px solid"
          gap="16px"
          background="#1E1E1E"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          borderBottom="1px solid yellow"
          display="flex"
        >
          <Box>
            <FaSave className="iconB" />
          </Box>
          <Box>
            <Heading color="#FFCC00" marginTop="10px" fontSize="24px">
              Save at the Pump
            </Heading>
            <Text fontSize="16px" color="white">
              Speed Perk Members can now save on Gas at participatin Shell
              Stations
            </Text>
          </Box>
        </Box>
      </Box>

      <Heading marginTop="40px" marginLeft="20px">
        MAY WE SUGGEST
      </Heading>
      <Box className="outline"></Box>

      <Box display="flex" marginTop="20px" gap="20px" marginLeft="20px">
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3313/thumb/12452851_slh_23452635_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $4.49
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(30)</Text>
            </Box>
            <Text fontWeight="bold">Splash</Text>
            <Text>Splash 20-F Blue</Text>
          </Box>
        </Box>

        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3232/thumb/7630016_gum_800001364_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $7.29
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(50)</Text>
            </Box>
            <Text fontWeight="bold">GumOut</Text>
            <Text>Regane Complete Fuel System</Text>
          </Box>
        </Box>
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3222/thumb/7060386_wes_w20014_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $6.99
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(1170)</Text>
            </Box>
            <Text fontWeight="bold">Carquest Wearever</Text>
            <Text>DOT 3 Brake Fluid</Text>
          </Box>
        </Box>
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3321/thumb/11495179_ftl_op112emi_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $4.49
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(198)</Text>
            </Box>
            <Text fontWeight="bold">Floo Tool</Text>
            <Text>Standard Duty 7 Quart drain Pan</Text>
          </Box>
        </Box>
      </Box>

      <Heading marginTop="40px" marginLeft="20px">
        CUSTOMER FAVORITES
      </Heading>
      <Box className="outline"></Box>

      <Box display="flex" marginTop="20px" gap="20px" marginLeft="20px">
        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3313/thumb/12452851_slh_23452635_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $4.49
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(30)</Text>
            </Box>
            <Text fontWeight="bold">Splash</Text>
            <Text>Splash 20-F Blue</Text>
          </Box>
        </Box>

        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3232/thumb/7630016_gum_800001364_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $7.29
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(50)</Text>
            </Box>
            <Text fontWeight="bold">GumOut</Text>
            <Text>Regane Complete Fuel System</Text>
          </Box>
        </Box>

        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3222/thumb/7060386_wes_w20014_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $6.99
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(1170)</Text>
            </Box>
            <Text fontWeight="bold">Carquest Wearever</Text>
            <Text>DOT 3 Brake Fluid</Text>
          </Box>
        </Box>

        <Box
          width="320px"
          height="125px"
          border="1px solid rgb(180, 179, 179)"
          borderRadius="15px"
          display="flex"
          boxSizing="border-box"
        >
          <Box>
            <Image
              src="https://shop.advanceautoparts.com/wcsstore/CVWEB/staticproductimage/N3321/thumb/11495179_ftl_op112emi_pri_thmb.jpg"
              height="71px"
              width="71px"
              marginTop="20px"
              marginLeft="10px"
            />
          </Box>
          <Box>
            <Text color="#CC0033" fontWeight="bold" marginTop="20px">
              $4.49
            </Text>
            <Box display="flex">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <Text>(198)</Text>
            </Box>
            <Text fontWeight="bold">Floo Tool</Text>
            <Text>Standard Duty 7 Quart drain Pan</Text>
          </Box>
        </Box>
      </Box>

      <Box
        height="50px"
        border="1px solid"
        marginTop="50px"
        w="97%"
        marginLeft="14px"
        background="#1E1E1E"
        display="flex"
      >
        <Box>
          <FaRecycle className="iconR" />
        </Box>

        <Box>
          <Text color="yellow" fontSize="20px" marginTop="8px" marginLeft="4px">
            Advance
          </Text>
        </Box>
        <Box>
          <Text color="white" fontSize="15px" marginTop="10px" marginLeft="8px">
            Oil and Battery Recycling
          </Text>
        </Box>
        <Box>
          <Button
            marginTop="5px"
            marginLeft="8px"
            background="#FFCC00"
            fontWeight="bold"
          >
            Find my Store
          </Button>
        </Box>
      </Box>

      <Text fontSize="16px" textAlign="center" marginTop="30px">
        *Restrictions apply: See coupon and promotion offer details
      </Text>

    
    </Box>
  );
};

export default Home;
