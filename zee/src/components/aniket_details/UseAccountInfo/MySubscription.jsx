import { Box, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";

const MySubscription = () => {
  return (
    // to fill the screen kept h=28.5vmax
    <Box h="100vmax" bgColor="gray.900" px="1%" py="2%">
      <Heading as="h2" size="md" textAlign="center">
        My Subscription
      </Heading>
      <List spacing={3} textAlign="left" py="2%">
        <ListItem>Plan : Premium HD</ListItem>
        <ListItem>Subscription ID : ZEE1643110015</ListItem>
        <ListItem>Validity : 12 months</ListItem>
        <ListItem>Starting Date : 1 Juanuary, 2022</ListItem>
        <ListItem>Ending Date : 31 December, 2022</ListItem>
        <ListItem>E-mail : aniketpandey2912@gmail.com</ListItem>
      </List>
    </Box>
  );
};

export default MySubscription;
