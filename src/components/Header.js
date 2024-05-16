import React, { useState, useEffect } from "react";
import { Box, HStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 200);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos, visible]);

  // Define social media links
  const socials = [
    { name: "LinkedIn", icon: faLinkedin, url: "https://www.linkedin.com/" },
    { name: "GitHub", icon: faGithub, url: "https://github.com/" },
    { name: "Twitter", icon: faTwitter, url: "https://twitter.com/" },
  ];

  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      p={4}
      bg="black"
      color="white"
      transition="transform 0.3s ease"
      transform={visible ? "translateY(0)" : "translateY(-200px)"}
    >
      {/* Render social media links */}
      <HStack spacing={4}>
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={social.icon} size="lg" />
          </a>
        ))}
      </HStack>
    </Box>
  );
};

export default Header;
