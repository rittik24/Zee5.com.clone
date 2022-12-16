import {
  Box,
  Heading,
  FormControl,
  Input,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
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
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  //   on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Button disabled if any one of the data is missing in the form
    if (
      formData.title === "" ||
      formData.poster === "" ||
      formData.trailer === "" ||
      formData.description === ""
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  };

  //   on submit
  const handleSubmit = () => {
    // console.log(formData);
    setLoading(true);
    addReq_Products(formData)
      .then((res) => {
        setLoading(false);
        alert("Product added successfully");
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        alert("Network request for adding product failed");
      });
    setFormData(initState);
  };

  return (
    <Box border="none">
      <Heading as="h2" size="md">
        Add Product
      </Heading>

      {/* Form- Product Description to add product */}
      <FormControl>
        <FormHelperText color="red">
          All fields are mandatory to add a product.
        </FormHelperText>
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
          onClick={handleSubmit}
          colorScheme="green"
          isLoading={loading}
          loadingText="SUBMITTING"
          disabled={isDisabled}
        >
          ADD PRODUCT
        </Button>
      </FormControl>
    </Box>
  );
};

export default AddProductForm;
