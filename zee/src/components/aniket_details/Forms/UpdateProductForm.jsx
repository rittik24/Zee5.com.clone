import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { patchReq_Products } from "../utils";

const initState = {};

const UpdateProductForm = () => {
  const [formData, setFormData] = useState(initState);
  const [id, setID] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  //   on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   on submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    patchReq_Products(id, formData)
      .then((res) => {
        setLoading(false);
        alert("Details updated successfully");
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        alert("Network update request failed");
      });

    setFormData(initState);
    setID("");
  };

  return (
    <Box border="none">
      <Heading as="h2" size="md">
        Update Product
      </Heading>

      {/* Form- Product Description to update product */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <Text color="red">Product ID is mandatory to update a product.</Text>

        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="id"
            placeholder="ID..."
            onChange={(e) => setID(e.target.value)}
          />
        </Box>

        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="title"
            placeholder="title..."
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="poster"
            placeholder="poster url..."
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="trailer"
            placeholder="trailer url..."
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Box mb="20px">
          <Input
            variant="flushed"
            type="text"
            name="description"
            placeholder="description..."
            onChange={(e) => handleChange(e)}
          />
        </Box>
        <Button
          type="submit"
          colorScheme="blue"
          isLoading={loading}
          loadingText="SUBMITTING"
          disabled={id === ""}
        >
          UPDATE
        </Button>
      </form>
    </Box>
  );
};

export default UpdateProductForm;
