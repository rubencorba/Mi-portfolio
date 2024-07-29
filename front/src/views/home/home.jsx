import React, { useContext, useState } from 'react';
import { LanguageContext } from '../../LanguageContext'

import { 
  Box, 
  Heading, 
  SimpleGrid, 
  Image, 
  Text, 
  Card,
  Flex,
  Textarea,
  Divider,
  AbsoluteCenter,
  Button,
  ButtonGroup,
  IconButton,
  FormControl,
  FormLabel,
  Input,
  
} from "@chakra-ui/react";
import {ArrowDownIcon, EmailIcon} from '@chakra-ui/icons'

import Equipaje from './paPerfilPortfolio.png';
import GitHubLogo from './logotipo-de-github.png';
import LinkeIndLogo from './linkedin.png';
import ImagenMail from './ImagenMail.png';
import HomeVamos from './homePageVamos.png';
import miniaturaCountries from './miniaturaCountries.jpg';
import miniaturaRyM from './fondoRickAndMorty.jpeg';
import miniaturaVamos from './pMiniaturaVamos.jpg';
import logos from './logoss.png';
import reactLogo from './reactLogo.png';
import reduxLogo from './redux.png';
import nodeLogo from './nodeLogo.png';
import expressLogo from './expressLogo.png';
import postgreLogo from './postgreLogo.png';
import mySqlLogo from './mySqlLogo.png';


/* import ThreeScene from './threeScene'; */


function Home() {


  const { language } = useContext(LanguageContext);


    return (
      <Flex
      direction="column"
      background='linear-gradient(to right, #2c5e7e, #05162b)'
    >
      <Flex
        h='100vh'
        /* position= 'relative' */
        direction={{ base: "column", md: "row" }}
        /* background='linear-gradient(to right, #4ab5e8, #0d5cb6)' */
        background='linear-gradient(to right, #2c5e7e, #05162b)'
        >
          {/* Sección de la imagen */}
        <Flex
          flex='1' // Ocupa todo el espacio disponible
          justifyContent='center' // Centra horizontalmente
          alignItems='center' // Centra verticalmente
        >
          <Image 
          src={Equipaje} 
          alt="Equipaje" 
          borderRadius='10px' 
          /* mt='2rem' */
          ml='10rem'
          width='300px'
          /> 
        </Flex>
           
            <Flex
            flex='1' 
          /* justifyContent='flex-start'  */
          justifyContent='center'
          alignItems='left' 
          /* mr='6rem' */
          direction="column"
            >
            <Heading
            
            color='white'
            textTransform='uppercase'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['xl', null, '4xl']}
            textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
            >
            {'<Rubén Corbalán/>'}
            {/* <Text
            fontSize='xl'
            mt='5rem'

            lineHeight='1.5'
            >Argentino con pasión por el desarrollo Web 👨‍💻 <br/><br/>

            Conversemos sobre cómo diseñar tu página web para que sea única <br/><br/>

            ✉ Mail: rubencorba@gmail.com
            </Text> */}
            </Heading>
            <Flex gap="1rem"  mt='2rem'>
            <Image 
          src={GitHubLogo} 
          alt="GitHubLogo" 
         
          
          
          width='50px'
          /> 
            <Image 
          src={LinkeIndLogo} 
          alt="LinkeIndLogo" 
          /* borderRadius='10px'  */
          
          /* ml='5rem' */
          width='50px'
          /> 
            <Image 
          src={ImagenMail} 
          alt="ImagenMail" 
          /* borderRadius='10px'  */
          
          /* ml='5rem' */
          width='60px'
          /> 
          <ButtonGroup size='lg' isAttached variant='outline' width='100%'>
            <Button color='white'>
              {language==='Español'? 'CURRÍCULUM' : 'CURRICULUM' }
            </Button>
              {/* <IconButton color='white' aria-label='Add to friends' icon={<ArrowDownIcon/>} /> */}
          </ButtonGroup>
          </Flex>

            </Flex>

           
            </Flex>
            <Box position='relative' padding='10'>
              <Divider />
                <AbsoluteCenter bg='white' px='4'>
                  ABOUT ME
                </AbsoluteCenter>
            </Box>
            <Text
            fontSize='xl'
            mt='5rem'

            color='white'
            textTransform='uppercase'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            
            textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
             mx='5rem'
            mb='5rem'
            textAlign="center"
            >¡Hola! 👋 Soy Rubén Corbalán, un apasionado desarrollador web Full Stack. 👨‍💻 Inicié mi recorrido académico en la Licenciatura en Sistemas de Información en UNSE y recientemente culminé el bootcamp de Soy Henry, donde trabajé en proyectos utilizando JS, React, Node, Redux, Express, PostgreSQL, Sequelize, HTML, y CSS.

            Me motiva aprender nuevas tecnologías y mejorar mis habilidades en informática. Disfruto los desafíos, los viajes y la adquisición de conocimientos. He trabajado como profesor de ajedrez, recepcionista, fotógrafo, y traductor en diferentes países de América Latina, lo que me ha brindado una gran versatilidad laboral. Domino el español, inglés y portugués, y estoy abierto a nuevas oportunidades y colaboraciones en el ámbito de IT. 
            
            {/* Conversemos sobre cómo podemos colaborar
            ✉ Mail: rubencorba@gmail.com */}
            </Text>
            {/* <ThreeScene /> */}

            <Box position='relative' padding='10'>
              <Divider />
                <AbsoluteCenter bg='white' px='4'>
                  PROJECTS
                </AbsoluteCenter>
            </Box>

            <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            mb='5rem' 
            mx='10rem'
            mt='5rem'>
            <SimpleGrid 
            spacing={8} 
            templateColumns='repeat(auto-fill, minmax(25rem, 1fr))'
            /* justifyItems="center"
            alignItems="center" */
            >
  <Card borderRadius="lg" boxShadow="dark-lg">
    <Image 
          src={HomeVamos} 
          alt="HomeVamos" 
          borderRadius="lg"
          
          width='100%'
          height='100%'
          objectFit="cover"
          /> 
  </Card>
  <Card borderRadius="lg" boxShadow="dark-lg">
  <Image 
          src={miniaturaCountries} 
          alt="miniaturaCountries" 
          borderRadius="lg"
          
          /* ml='5rem' */
          width='100%'
          height='100%'
          objectFit="cover"
          /> 
  </Card>
  <Card borderRadius="lg" boxShadow="dark-lg">
    
    <Image 
          src={miniaturaRyM} 
          alt="miniaturaRyM" 
          borderRadius="lg"
          
          width='100%'
          height='100%'
          objectFit="cover"
          /> 
  </Card>
  <Card borderRadius="lg" boxShadow="dark-lg">
    
    <Image 
          src={miniaturaVamos} 
          alt="miniaturaVamos" 
          borderRadius="lg"
          
          width='100%'
          height='100%'
          objectFit="cover"
          /> 
  </Card>
</SimpleGrid>
</Box>
<Box position='relative' padding='10'>
              <Divider />
                <AbsoluteCenter bg='white' px='4'>
                  SKILLS
                </AbsoluteCenter>
            </Box>
            <Flex gap="2rem"  mt='5rem' /* position='absolute' *//* mx='5rem' */ mb='5rem' alignItems="center" justifyContent="center" display="flex" >
            <Image 
          src={logos} 
          alt="logos" 
          width='21rem'
          /> 
            <Image 
          src={reactLogo} 
          alt="reactLogo" 
          width='8rem'
          /> 
            <Image 
          src={reduxLogo} 
          alt="reduxLogo" 
          width='8rem'
          /> 
            <Image 
          src={nodeLogo} 
          alt="nodeLogo" 
          width='8rem'
          /> 
            <Image 
          src={expressLogo} 
          alt="expressLogo" 
          width='8rem'
          /> 
            <Image 
          src={postgreLogo} 
          alt="postgreLogo" 
          width='8rem'
          /> 
            <Image 
          src={mySqlLogo} 
          alt="mySqlLogo" 
          width='8rem'
          /> 
            </Flex>
          <Box position='relative' padding='10'>
              <Divider />
                <AbsoluteCenter bg='white' px='4'>
                  CONTACT
                </AbsoluteCenter>
            </Box>
            <Flex
      /* height="100vh" */
      alignItems="center"
      justifyContent="center"
      /* bg="gray.100" */
      my='5rem'
    >
              <FormControl bg='white' borderRadius="lg" width='30rem' p='1rem' boxShadow="dark-lg" border='1px'>
                <FormLabel>Email address</FormLabel>
                <Input type='email' border='1px'/>
                <FormLabel>Message</FormLabel>
                {/* <Input type='text' size='lg' height='10rem'/> */}
                <Textarea
                  /* value={value}
                  onChange={handleInputChange}
                  placeholder='Here is a sample placeholder' */
                  border='1px'
                  borderRadius="lg"
                  size='sm'
                />
                <Button leftIcon={<EmailIcon />} color=/* '#2c5e7e' */'#2c5e7e' /* bg="#2c5e7e" */border='2px' borderColor='#2c5e7e' variant='solid' mt='1rem'>
                  Send
                </Button>
              </FormControl>
           
            </Flex>
            </Flex>
    );
}

export default Home;