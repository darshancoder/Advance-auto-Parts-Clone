import {
  Heading,
  HStack,
  Stack,
  Stat,
  StatHelpText,
  StatLabel
} from "@chakra-ui/react";
import React from "react";

export default function Stats(props) {
  console.log(props);
  return (
    <Stat mt={5}>
      <Heading my={2} as="h4" fontSize="20px">
        Submitted Result
      </Heading>
      <Stack
        p={4}
        borderWidth="3px"
        borderRadius="md"
        direction="column"
        align="flex-start"
      >
        <HStack>
          <StatLabel>Name: {props.Firstname}</StatLabel>
          <StatLabel>{props.Lastname}</StatLabel>
        </HStack>
        <StatHelpText>Email: {props.Email}</StatHelpText>
        <StatHelpText>Mobile Number: {props.Mobile}</StatHelpText>
        <StatHelpText> Address: {props.Address}</StatHelpText>
        <StatHelpText> City: {props.City}</StatHelpText>
        <StatHelpText> State: {props.state}</StatHelpText>
        <StatHelpText> Zip Code: {props.zip}</StatHelpText>
      </Stack>
    </Stat>
  );
}
