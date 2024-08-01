
/* import React, { useContext, useState } from 'react';
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

import { useSelector } from "react-redux";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link as ScrollLink } from 'react-scroll';


const NavBar = () => {
 

const { language, setLanguage } = useContext(LanguageContext);


 return (
  <>
    
      <Flex
        as="nav"
        bg={            
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
      

        <Box w="100%" alignContent="center" justifyContent="center">
          <Flex justify="center" alignItems="center">
            
  
              <Box>
                <Flex>
                
                  <ScrollLink to="about" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                      {language==='English'? 'About Me' : (language==='Español'? 'Sobre mi' : 'Sobre mim')}
                    </Button>
                    </ScrollLink>
                  
                  <ScrollLink to="projects" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                    {language==='English'? 'Projects' : (language==='Español'? 'Proyectos' : 'Projetos')}
                    </Button>
                    </ScrollLink>
                 
                  <ScrollLink to="skills" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                    {language==='English'? 'Skills' : (language==='Español'? 'Herramientas' : 'Ferramentas')}
                    </Button>
                    </ScrollLink>
                  
                  <ScrollLink to="contact" smooth={true} duration={500}>
                    <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
                    {language==='English'? 'Contact' : (language==='Español'? 'Contáctame' : 'Contato')}
                    </Button>
                    </ScrollLink>
                  
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
 */
import React, { useContext, useState } from 'react';
import { LanguageContext } from '../LanguageContext';
import {
  Button,
  Flex,
  Box,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  HStack,
  VStack
} from "@chakra-ui/react";
import { Link as ScrollLink } from 'react-scroll';
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Flex
      as="nav"
      bg="#034873"
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
      /* overflowX= 'hidden' */
    >
      <Box>
        {/* Icono de hamburguesa para dispositivos móviles */}
        {isMobile ? (
          <IconButton
            icon={isMobileMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
            bg="transparent"
            _hover={{ bg: "transparent" }}
          />
        ) : null}
      </Box>

      {/* Menú de navegación para pantallas grandes */}
      <HStack
        spacing="4"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        flex="1"
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
            {language === 'English' ? 'About Me' : (language === 'Español' ? 'Sobre mi' : 'Sobre mim')}
          </Button>
        </ScrollLink>
        <ScrollLink to="projects" smooth={true} duration={500}>
          <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
            {language === 'English' ? 'Projects' : (language === 'Español' ? 'Proyectos' : 'Projetos')}
          </Button>
        </ScrollLink>
        <ScrollLink to="skills" smooth={true} duration={500}>
          <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
            {language === 'English' ? 'Skills' : (language === 'Español' ? 'Herramientas' : 'Ferramentas')}
          </Button>
        </ScrollLink>
        <ScrollLink to="contact" smooth={true} duration={500}>
          <Button colorScheme="#009ED1" fontSize="1xl" mx="3">
            {language === 'English' ? 'Contact' : (language === 'Español' ? 'Contáctame' : 'Contato')}
          </Button>
        </ScrollLink>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mx="3" color="white" bg="transparent" border="1px solid white" _hover={{ bg: "transparent" }}>
            {language}
          </MenuButton>
          <MenuList>
            <MenuItem value='English' onClick={(e) => { setLanguage(e.target.value) }}>English</MenuItem>
            <MenuItem value='Español' onClick={(e) => { setLanguage(e.target.value) }}>Español</MenuItem>
            <MenuItem value='Português' onClick={(e) => { setLanguage(e.target.value) }}>Português</MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      {/* Menú de navegación desplegable para pantallas pequeñas */}
      {isMobile && isMobileMenuOpen && (
        <Box
          position="absolute"
          top="80px"
          left="0"
          right="0"
          bg="#034873"
          py="4"
          zIndex="999"
        >
          <VStack spacing="4" align="start" pl="4">
            <ScrollLink to="about" smooth={true} duration={500}>
              <Button colorScheme="#009ED1" fontSize="1xl" onClick={toggleMobileMenu}>
                {language === 'English' ? 'About Me' : (language === 'Español' ? 'Sobre mi' : 'Sobre mim')}
              </Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500}>
              <Button colorScheme="#009ED1" fontSize="1xl" onClick={toggleMobileMenu}>
                {language === 'English' ? 'Projects' : (language === 'Español' ? 'Proyectos' : 'Projetos')}
              </Button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500}>
              <Button colorScheme="#009ED1" fontSize="1xl" onClick={toggleMobileMenu}>
                {language === 'English' ? 'Skills' : (language === 'Español' ? 'Herramientas' : 'Ferramentas')}
              </Button>
            </ScrollLink>
            <ScrollLink to="contact" smooth={true} duration={500}>
              <Button colorScheme="#009ED1" fontSize="1xl" onClick={toggleMobileMenu}>
                {language === 'English' ? 'Contact' : (language === 'Español' ? 'Contáctame' : 'Contato')}
              </Button>
            </ScrollLink>
            <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} mx="3" color="white" bg="transparent" border="1px solid white" _hover={{ bg: "transparent" }}>
            {language}
          </MenuButton>
          <MenuList>
            <MenuItem value='English' onClick={(e) => { setLanguage(e.target.value) }}>English</MenuItem>
            <MenuItem value='Español' onClick={(e) => { setLanguage(e.target.value) }}>Español</MenuItem>
            <MenuItem value='Português' onClick={(e) => { setLanguage(e.target.value) }}>Português</MenuItem>
          </MenuList>
        </Menu>
          </VStack>
        </Box>
      )}
    </Flex>
  );
};

export default NavBar;

