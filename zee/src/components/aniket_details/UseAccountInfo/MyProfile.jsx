import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

const MyProfile = () => {
  return (
    <Box>
      <Heading as="h2" size="md">
        My Profile
      </Heading>

      <List spacing={3} textAlign="left">
        <ListItem>Name : Aniket Pandey</ListItem>
        <ListItem>User ID : user1001</ListItem>
        <ListItem>E-mail : aniketpandey2912@gamil.com</ListItem>
        <ListItem>Age : 24 years</ListItem>
        <ListItem>DOB : 29-12-1997</ListItem>
      </List>
    </Box>
  );
};

export default MyProfile;
