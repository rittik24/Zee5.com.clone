import {
  Alert,
  AlertIcon,
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { deleteReq_Products } from "../utils";

const DeleteProductForm = () => {
  const [id, setID] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //   on change
  const handleChange = (e) => {
    setID(e.target.value);
  };

  //   on submit
  const handleSubmit = () => {
    setLoading(true);
    deleteReq_Products(id)
      .then((res) => {
        setLoading(false);
        alert("Deleted successfully");
      })
      .catch((err) => {
        console.log("err");
        setLoading(false);
        setError(true);
        alert("Network request failed");
      });
    setID("");
  };

  return (
    <Box border="none">
      <Heading as="h2" size="md">
        Delete Product
      </Heading>

      <FormControl>
        <Text color="red">Product ID is mandatory to delete a product.</Text>
        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="title"
            placeholder="product ID..."
            onChange={(e) => handleChange(e)}
            isRequired
          />
        </Box>
        <Button
          type="submit"
          onClick={handleSubmit}
          colorScheme="red"
          isLoading={loading}
          loadingText="SUBMITTING"
          disabled={id === ""}
        >
          DELETE PRODUCT
        </Button>
      </FormControl>
    </Box>
  );
};

export default DeleteProductForm;
