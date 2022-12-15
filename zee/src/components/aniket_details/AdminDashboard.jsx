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
        border="0px solid yellow"
        color="white"
        direction={{ base: "column", sm: "column", md: "column", lg: "column" }}
        justifyContent="center"
        alignItems="top"
      >
        <Box h="100%" position="sticky" top="10%" zIndex="1">
          <Heading mb="30px" as="h2" size="lg" color="blue.500">
            Admin Dashboard
          </Heading>
          <AdminDetails />
        </Box>
        <Box h="100%">
          <AdminContent />
        </Box>
      </Flex>
    </Box>
  );
};

export default AdminDashboard;
