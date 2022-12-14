import { Box, Heading, FormControl, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { Form } from "react-router-dom";
import { addReq_Products } from "../utils";

const initState = {
  title: "",
  poster: "",
  trailer: "",
  description: "",
};

const AddProductForm = () => {
  const [formData, setFormData] = useState(initState);

  //   on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  //   on submit
  const handleSubmit = () => {
    // console.log(formData);
    addReq_Products(formData);
    setFormData(initState);
  };

  return (
    <Box border="none">
      <Heading as="h2" size="md">
        Add Product
      </Heading>

      {/* Form- Product Description to add product */}
      <FormControl>
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
        <Button type="submit" onClick={handleSubmit} colorScheme="green">
          ADD PRODUCT
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddProductForm;
