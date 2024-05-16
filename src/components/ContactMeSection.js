import React from "react";
import {
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useSubmit } from "./useSubmit";
import useSubmit from "../hooks/useSubmit";
import * as Yup from "yup";

const ContactMeSection = () => {
  const initialValues = {
    firstName: "",
    email: "",
    type: "",
    comment: "",
  };

  const onSubmit = async (values) => {
    const response = await submit(values);
    if (response.type === "success") {
      alertContext.onOpen({
        message: `Successfully submitted form for ${values.firstName}`,
        type: "success",
      });
      formik.resetForm();
    }
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    type: Yup.string().required("Type is required"),
    comment: Yup.string().required("Comment is required"),
  });

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
  });

  return (
    <VStack id="contactme-section" spacing={8}>
      <Heading>Contact Me</Heading>
      <form onSubmit={formik.handleSubmit}>
        <FormControl
          isInvalid={formik.touched.firstName && formik.errors.firstName}
        >
          <FormLabel>First Name</FormLabel>
          <Input {...formik.getFieldProps("firstName")} />
          <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.email && formik.errors.email}>
          <FormLabel>Email</FormLabel>
          <Input {...formik.getFieldProps("email")} />
          <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={formik.touched.type && formik.errors.type}>
          <FormLabel>Type</FormLabel>
          <Input {...formik.getFieldProps("type")} />
          <FormErrorMessage>{formik.errors.type}</FormErrorMessage>
        </FormControl>

        <FormControl
          isInvalid={formik.touched.comment && formik.errors.comment}
        >
          <FormLabel>Comment</FormLabel>
          <Textarea {...formik.getFieldProps("comment")} />
          <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
        </FormControl>

        <Button type="submit" isLoading={isLoading}>
          Submit
        </Button>
      </form>
    </VStack>
  );
};

export default ContactMeSection;
