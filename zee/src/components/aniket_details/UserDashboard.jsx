import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import UserContent from "./UserContent";
import UserDetails from "./UserDetails";

const UserDashboard = () => {
  return (
    <Box>
      <Flex
        border="0px solid yellow"
        color="white"
        direction={{ base: "column", sm: "column", md: "column", lg: "column" }}
        justifyContent="center"
        alignItems="top"
        h="100%"
      >
        {/* Box-1 - Postion - sticky because I want admin image, Name & userId, Logout button to display continuously */}
        <Box h="100%" position="sticky" top="10%" zIndex="1">
          <Heading mb="30px" as="h2" size="lg" color="blue.500">
            User Dashboard
          </Heading>
          <Box my="20px">
            <UserDetails />
          </Box>
        </Box>

        {/* Box-2 */}
        <UserContent />
      </Flex>
    </Box>
  );
};

export default UserDashboard;
