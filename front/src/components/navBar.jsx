import React, { useEffect, useState } from "react";
import {
  Button,
  Flex,
  Box,
  Image,
  Avatar,
  AvatarGroup,
  useMediaQuery,
  Progress
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
/* import Vamos from "../../assets/logoblanco.png"; */
/* import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar"; */
import { useSelector } from "react-redux";



const NavBar = () => {
  /* const { currentUser } = useSelector((state) => state);
  const [navBackground, setNavBackground] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 640px)");
  const location = useLocation();

  const handleScroll = () => {
    const offset = window.scrollY;
    setNavBackground(offset > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 if (!verificationComplete) {
  return <div><Progress size='lg' isIndeterminate /></div>;
}else{ */
 return (
  <>
    {/* {isMobile ? (
      <MobileNavbar />
    ) : ( */}
      <Flex
        as="nav"
        bg={
          /* location.pathname === "/"
            ? navBackground
              ? "#009ED1"
              : "transparent"
            : */ 
            
            "#034873"
        }
        alignItems="center"
        justify="space-between"
        h="80px"
        w="100%"
        position="fixed"
        top="0"
        left="0"
        zIndex="999"
        px="4"
        transition="background 0.5s ease"
      >
        {/* <Box>
         <Link to="/">
                <Image src={Vamos} alt="Vamos" w="150px" />
         </Link>
        </Box> */}

        <Box w="100%" alignContent="center" justifyContent="center">
          <Flex justify="center" alignItems="center">
            
  
              <Box>
                <Flex>
                {/* <Link to="/"> */}
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      Home
                    </Button>
                  {/* </Link> */}

                  {/* <Link to="/about"> */}
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      About Me
                    </Button>
                  {/* </Link> */}

                  {/* <Link to="/questions"> */}
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      Projects
                    </Button>
                  {/* </Link> */}
                  {/* <Link to="/questions"> */}
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      Skills
                    </Button>
                  {/* </Link> */}
                  {/* <Link to="/questions"> */}
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      Contact
                    </Button>
                  {/* </Link> */}
                </Flex>
              </Box>
            
          </Flex>
        </Box>

       {/*  <Box>
          <AvatarGroup spacing="1rem" mx="20px">
             <ViewOptionPerfil/> 
          </AvatarGroup>
        </Box> */}
      </Flex>
  </>
);
}
;

export default NavBar;
