import { Box, Flex, Heading } from "@chakra-ui/react";
import React, { useEffect } from "react";
import AdminContent from "./AdminContent";
import AdminDetails from "./AdminDetails";
import { getReq_Products } from "./utils";

const AdminDashboard = () => {
  // get data
  const getData = async () => {
    let data = await getReq_Products();
    console.log(data);
    return data;
  };

  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <Box h="100%">
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
          textAlign="center"
          zIndex="2"
          top={{ base: "7%", sm: "8%", md: "11%", lg: "12%", xl: "10%" }}
          pt={{ base: "20px", sm: "25px", md: "18px", lg: "12px", xl: "10px" }}
        >
          <Heading mb="30px" as="h2" size="lg" color="blue.500">
            Admin Dashboard
          </Heading>
          <AdminDetails />
        </Box>

        {/* Box-2 - Having All forms CRUD */}
        <Box h="100%">
          <AdminContent />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
