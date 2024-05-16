import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

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
      {/* Add your header content here */}
    </Box>
  );
};

export default Header;
