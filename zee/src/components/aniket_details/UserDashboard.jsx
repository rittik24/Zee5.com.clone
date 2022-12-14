import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./AdminDetails";

const UserDashboard = () => {
  return (
    <Box>
      <Heading>User Dashboard</Heading>
      <Sidebar />
    </Box>
  );
};

export default UserDashboard;
