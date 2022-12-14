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

const AdminDetails = () => {
  const isActive = true;

  return (
    // main container
    <Flex
      border="0px solid red"
      bgColor="whiteAlpha.500"
      h="100%"
      justifyContent="center"
      alignItems="center"
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

      {/* Admin description */}
      <Box>
        <Heading as="h3" size="md">
          Aniket Pandey
        </Heading>
        <Text>Admin ID : admin1001</Text>
        <Text>Role : Full-Stack Web Developer</Text>
      </Box>

      <Spacer />

      {/* Logout Container */}
      <Button colorScheme="red">Logout</Button>
    </Flex>
  );
};

export default AdminDetails;
