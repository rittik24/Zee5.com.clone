import { Box, Divider, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import AddProductForm from "./Forms/AddProductForm";
import DeleteProductForm from "./Forms/DeleteProductForm";
import UpdateProductForm from "./Forms/UpdateProductForm";

const AdminContent = () => {
  return (
    <>
      <Box border="0px solid blue">
        <Box
          w="50%"
          m="15px auto"
          border="2px solid white"
          p="20px"
          borderRadius="10px"
        >
          <AddProductForm />
        </Box>

        <Box
          w="50%"
          m="15px auto"
          border="2px solid white"
          p="20px"
          borderRadius="10px"
        >
          <UpdateProductForm />
        </Box>

        <Box
          w="50%"
          m="15px auto"
          border="2px solid white"
          p="20px"
          borderRadius="10px"
        >
          <DeleteProductForm />
        </Box>
      </Box>
    </>
  );
};

export default AdminContent;
