import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Form,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { patchReq_Products } from "../utils";

const initState = {};

const UpdateProductForm = () => {
  const [formData, setFormData] = useState(initState);
  const [id, setID] = useState("");
  const [loading, setLoading] = useState(false);

  //   on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   on submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initState);
    setID("");
    patchReq_Products(id, formData)
      .then((res) => {
        setLoading(false).then((res) => alert("Details updated successfully"));
      })
      .catch((err) => {
        console.log(err);
        alert("Network update request failed");
      });
  };

  return (
    <Box border="none">
      <Heading as="h2" size="md">
        Update Product
      </Heading>

      {/* Form- Product Description to update product */}
      <form onSubmit={(e) => handleSubmit(e)}>
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
          disabled={id === ""}
        >
          UPDATE
        </Button>
      </form>
    </Box>
  );
};

export default UpdateProductForm;
