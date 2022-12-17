import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

const MyProfile = () => {
  return (
    // to fill the screen kept h=28.5vmax
    <Box h="100vmax" bgColor="gray.900" px="1%" py="2%">
      <Heading as="h2" size="md" textAlign="center">
        My Profile
      </Heading>

      <List spacing={3} textAlign="left" py="2%">
        <ListItem>Name : Aniket Pandey</ListItem>
        <ListItem>User ID : user1001</ListItem>
        <ListItem>E-mail : aniketpandey2912@gmail.com</ListItem>
        <ListItem>Age : 24 years</ListItem>
        <ListItem>DOB : 29-12-1997</ListItem>
      </List>
    </Box>
  );
};

export default MyProfile;
