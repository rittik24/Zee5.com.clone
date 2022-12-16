import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

import React from "react";

const UserDetails = () => {
  const isActive = true;

  return (
    // main container
    <Flex
      border="0px solid red"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingInline="2%"
      bgColor="green.900"
      py="1%"
    >
      {/* Admin Prof-pic */}
      <Box>
        <Avatar
          size="xl"
          name="Aniket Pandey"
          src="https://avatars.githubusercontent.com/u/107461782?v=4"
        >
          <AvatarBadge boxSize="25px" bg={isActive ? "green.500" : "tomato"} />
        </Avatar>
      </Box>

      <Spacer />

      {/* User description */}
      <Box color="yellow" textAlign="center">
        <Heading as="h3" size="md">
          Aniket Pandey
        </Heading>
        <Text>User ID : user1001</Text>
      </Box>

      <Spacer />

      {/* Logout Button */}
      <Button colorScheme="red">Logout</Button>
    </Flex>
  );
};

export default UserDetails;
