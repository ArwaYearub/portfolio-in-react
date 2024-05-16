import React from "react";
import { VStack, Heading, HStack, Image, Text } from "@chakra-ui/react";
import Card from "./Card";

const ProjectsSection = ({ projects }) => {
  return (
    <VStack id="projects-section" spacing={8}>
      <Heading>Featured Projects</Heading>
      <HStack spacing={8}>
        {projects.map((project, index) => (
          <Card key={index} {...project} />
        ))}
      </HStack>
    </VStack>
  );
};

export default ProjectsSection;
