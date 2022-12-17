import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Heading,
  Text,
  Flex,
  Spacer,
  Link,
} from "@chakra-ui/react";
import React from "react";

const AdminDetails = () => {
  const isActive = true;

  return (
    // main container
    <Flex
      border="0px solid red"
      bgColor="red.900"
      h="100%"
      justifyContent="center"
      alignItems="center"
      paddingInline="2%"
      py="1%"
      direction={{
        base: "column",
        sm: "column",
        md: "row",
        lg: "row",
        xl: "row",
      }}
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

      {/* Reports */}
      <Link href="/admindashboard/admins">
        <Button colorScheme="blue">Reports</Button>
      </Link>

      {/* Keep it form now don't delete */}
      {/* <Flex gap="10px" w="-moz-fit-content"> */}
      {/* Logout Button */}
      {/* <Button colorScheme="red">Logout</Button> */}
      {/* </Flex> */}
    </Flex>
  );
};

export default AdminDetails;
