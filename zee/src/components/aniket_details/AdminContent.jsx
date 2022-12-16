import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import AddProductForm from "./Forms/AddProductForm";
import DeleteProductForm from "./Forms/DeleteProductForm";
import UpdateProductForm from "./Forms/UpdateProductForm";

const AdminContent = () => {
  return (
    <>
      <Box border="0px solid blue" textAlign="center">
        <Box
          border="2px solid white"
          m="15px auto"
          borderRadius="10px"
          w={{ base: "80%", sm: "70%", md: "70%", lg: "50%" }}
          p={{ base: "10px", sm: "15px", md: "20px", lg: "20px" }}
        >
          <AddProductForm />
        </Box>

        <Box
          border="2px solid white"
          m="15px auto"
          borderRadius="10px"
          w={{ base: "80%", sm: "70%", md: "70%", lg: "50%" }}
          p={{ base: "10px", sm: "15px", md: "20px", lg: "20px" }}
        >
          <UpdateProductForm />
        </Box>

        <Box
          border="2px solid white"
          m="15px auto"
          borderRadius="10px"
          w={{ base: "80%", sm: "70%", md: "70%", lg: "50%" }}
          p={{ base: "10px", sm: "15px", md: "20px", lg: "20px" }}
        >
          <DeleteProductForm />
        </Box>
      </Box>
    </>
  );
};

export default AdminContent;
