import { Box, Flex, Heading } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { getReq_AdminsData } from "./utils";

const Reports = () => {
  // get data
  const getAdminsData = async () => {
    let data = await getReq_AdminsData();
    console.log(data);
    return data;
  };

  //   useEffect(() => {
  //     getAdminsData();
  //   }, []);

  return (
    <Box h="100%">
      <Flex
        direction={{ base: "column", sm: "column", md: "column", lg: "column" }}
        border="0px solid yellow"
        color="white"
        justifyContent="center"
        alignItems="top"
      >
        {/* Box-1 - Postion - sticky because I want Reports Page to display continuously */}
        <Box
          h="100%"
          position="sticky"
          //bgColor="black" //important - it will hide the content moving up on scroll
          textAlign="center"
          zIndex="2"
          top={{ base: "7%", sm: "8%", md: "11%", lg: "12%", xl: "10%" }}
          pt={{ base: "20px", sm: "25px", md: "18px", lg: "12px", xl: "10px" }}
        >
          <Heading mb="30px" as="h2" size="lg" color="blue.500">
            Reports
          </Heading>
        </Box>
      </Flex>
    </Box>
  );
};

export default Reports;
