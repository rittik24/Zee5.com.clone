import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import UserContent from "./UserContent";
import UserDetails from "./UserDetails";

const UserDashboard = () => {
  return (
    <Box>
      <Flex
        direction={{ base: "column", sm: "column", md: "column", lg: "column" }}
        border="0px solid yellow"
        color="white"
        justifyContent="center"
        alignItems="top"
      >
        {/* Box-1 - Postion - sticky because I want admin image, Name & userId, Logout button to display continuously */}
        <Box
          h="100%"
          position="sticky"
          bgColor="black" //important - it will hide the content moving up on scroll
          zIndex="2"
          top={{ base: "7%", sm: "8%", md: "11%", lg: "12%", xl: "10%" }}
          pt={{ base: "20px", sm: "25px", md: "18px", lg: "12px", xl: "10px" }}
        >
          <Heading
            mb="30px"
            as="h2"
            size="lg"
            color="blue.500"
            textAlign="center"
            // bgColor="green.900"
          >
            User Dashboard
          </Heading>
          <Box>
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
