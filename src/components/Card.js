import React from "react";
import { VStack, Heading, Text, Image } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, imageUrl }) => {
  return (
    <VStack spacing={4}>
      <Image src={imageUrl} alt={title} />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </VStack>
  );
};

export default Card;
