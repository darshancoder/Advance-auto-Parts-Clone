import React from "react";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
} from "@chakra-ui/react";
import ReadMore from "./ReadMore";
const Navigation = ({ description }) => {
  return (
    <Box my="10px">
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href="#">Docs</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading as="h3" size="md">
        Air Filters
      </Heading>
      <ReadMore description={description} />
    </Box>
  );
};

export default Navigation;
