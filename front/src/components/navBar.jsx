
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../LanguageContext'
import {
  Button,
  Flex,
  Box,
  Image,
  Avatar,
  AvatarGroup,
  useMediaQuery,
  Progress,
  Select,
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
/* import Vamos from "../../assets/logoblanco.png"; */
/* import MobileNavbar from "../navBar/mobileNavbar/mobileNavbar"; */
import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from 'react-scroll';


const NavBar = () => {
  /* const { currentUser } = useSelector((state) => state);
  ;
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


const { language, setLanguage } = useContext(LanguageContext);


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
                    
                  {/* </Link> */}

                  {/* <Link to="/about"> */}
                  <ScrollLink to="about" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      {language==='English'? 'About Me' : (language==='Español'? 'Sobre mi' : 'Sobre mim')}
                    </Button>
                    </ScrollLink>
                  {/* </Link> */}

                  {/* <Link to="/questions"> */}
                  <ScrollLink to="projects" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                    {language==='English'? 'Projects' : (language==='Español'? 'Proyectos' : 'Projetos')}
                    </Button>
                    </ScrollLink>
                  {/* </Link> */}
                  {/* <Link to="/questions"> */}
                  <ScrollLink to="skills" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                    {language==='English'? 'Skills' : (language==='Español'? 'Herramientas' : 'Ferramentas')}
                    </Button>
                    </ScrollLink>
                  {/* </Link> */}
                  {/* <Link to="/questions"> */}
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                    {language==='English'? 'Contact' : (language==='Español'? 'Contáctame' : 'Contato')}
                    </Button>
                    </ScrollLink>
                  {/* </Link> */}
                  {/* <Select  color="white"  placeholder='Language' mx="3" width='10rem'> 
  <option value='option1'>English</option>
  <option value='option2'>Español</option>
  <option value='option3'>Português</option>
</Select> */}
<Menu >
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mx="3" color="white" bg="transparent" border="1px solid white" _hover={{ bg: "transparent" }}>
    {language}
  </MenuButton >
  <MenuList >
    <MenuItem value='English' onClick={(e) => {setLanguage(e.target.value)}}>English</MenuItem>
    <MenuItem value='Español' onClick={(e) => {setLanguage(e.target.value)}}>Español</MenuItem>
    <MenuItem value='Português' onClick={(e) => {setLanguage(e.target.value)}}>Português</MenuItem>
  </MenuList>
</Menu>
                </Flex>
              </Box>
            
          </Flex>
        </Box>
      </Flex>
  </>
);
}
;

export default NavBar;
