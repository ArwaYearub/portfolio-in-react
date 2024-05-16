import React from "react";
import { Avatar, VStack, Text } from "@chakra-ui/react";

const LandingSection = ({ greeting, bio1, bio2 }) => {
  return (
    <VStack spacing={4}>
      <Avatar size="xl" src="https://i.pravatar.cc/150?img=7" />
      <Text>{greeting}</Text>
      <Text>{bio1}</Text>
      <Text>{bio2}</Text>
    </VStack>
  );
};

export default LandingSection;
