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
  Link,
  Wrap,
  WrapItem,
  useBreakpointValue 
} from "@chakra-ui/react";
import {ArrowDownIcon, ArrowUpIcon, EmailIcon } from '@chakra-ui/icons'

import FotoPerfil from './paPerfilPortfolio2.png';
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

import { Element, animateScroll as scroll} from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


/* import ThreeScene from './threeScene'; */


function Home() {


  const { language } = useContext(LanguageContext);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  // Utiliza useBreakpointValue para ajustar los valores según el tamaño de la pantalla
  const ml = useBreakpointValue({ base: '-4rem', md: '0rem', lg: '9rem' });
  const width = useBreakpointValue({ base: '150px', md: '200px', lg: '300px' });

  const handleClick= () => {
  window.alert(language === 'English' ? 'Email sent successfully!' : (language === 'Español' ? '¡Correo enviado con éxito!' : 'Email enviado com sucesso!'));
  }

  const settings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Hace que el carrusel sea infinito
    speed: 400, // Velocidad de transición
    slidesToShow: 1, // Cuántos slides se muestran al mismo tiempo
    slidesToScroll: 1, // Cuántos slides se desplazan al hacer scroll
    autoplay: true, // Autoplay
    autoplaySpeed: 3000, // Velocidad del autoplay (en ms)
    arrows: true, // Muestra flechas de navegación
    /* responsive: [
      {
        breakpoint: 1024, // At 1024px or less, it shows 2 slides
        settings: {
          speed:1000
        }
      },
      {
        breakpoint: 600, // At 600px or less, it shows 1 slide
        settings: {
          speed:200
        }
      },
      {
        breakpoint: 480, // At 480px or less, it shows 1 slide
        settings: {
          speed:200
        }
      }
    ] */

    
  };


    return (
      <Flex
      direction="column"
      background='linear-gradient(to right, #2c5e7e, #05162b)'
      overflowX= 'hidden'
    >
      
      <Flex
        /* h='100vh' */
        mt='5rem'
        /* position= 'relative' */
        /* direction={{ base: "column", md: "row" }} */
        
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
          src={FotoPerfil} 
          alt="FotoPerfil" 
          borderRadius='10px' 
          mt='2rem'
          ml={{ base: '0', md: '9rem' }} 
          width={{ base: '150px', md: '300px' }} 
          border='2px'
          borderColor='white'
          /> 
        </Flex>
           
            <Flex
            flex='1' 
          /* justifyContent='flex-start'  */
          justifyContent={{ base: 'flex-end', md: 'center' }} 
          alignItems='left' 
          /* mr='6rem' */
          mb={{ base: '6rem', md: '0' }} 
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
            {'< Rubén Corbalán />'}
            {/* <Text
            fontSize='xl'
            mt='5rem'

            lineHeight='1.5'
            >Argentino con pasión por el desarrollo Web 👨‍💻 <br/><br/>

            Conversemos sobre cómo diseñar tu página web para que sea única <br/><br/>

            ✉ Mail: rubencorba@gmail.com
            </Text> */}
            </Heading>
            <Flex 
            gap={{ base: '3px', md: '1rem' }}   
            mt={{ base: '1.5rem', md: '2rem' }} 
            height={{ base: '22px', md: '50px' }} 
            direction={{ base: "column", md: "row" }}
            >
              <Flex gap={{ base: '10px', md: '1rem' }}>
            <Link /* width='50px' */ href="https://github.com/rubencorba" isExternal  /* height='50px' */ >
            <Image 
          src={GitHubLogo} 
          alt="GitHubLogo" 
          width={{ base: '35px', md: '50px' }} 
          /* height='50px' */
          objectFit="cover"
          /> 
          </Link>

          <Link  href="https://www.linkedin.com/in/rub%C3%A9n-corbal%C3%A1n-760a06287/" isExternal>
            <Image 
          src={LinkeIndLogo} 
          alt="LinkeIndLogo" 
          width={{ base: '35px', md: '50px' }} 
         /*  height='50px' */
          /> 
          </Link>

          <ScrollLink to="contact" smooth={true} duration={500} >
            <Image 
          src={ImagenMail} 
          alt="ImagenMail" 
          width={{ base: '45px', md: '65px' }} 
          
          cursor="pointer"
          /> 
          </ScrollLink>
          </Flex>

              <Flex mt={{ base: '1.5rem', md: '0' }}>
          <Link  href="https://drive.google.com/drive/folders/1jSoIeOiQAtMBo5poc5-sars7SDMsIAzQ?usp=drive_link" isExternal>
          <ButtonGroup 
          /* size='lg' */ 
          isAttached variant='outline'
           /* width={{ base: '80px', md: '100px' }}  */
           
           height={{ base: '40px', md: '50px' }} >
            <Button color='white' height={{ base: '40px', md: '50px' }} fontFamily="Open Sans, sans-serif">
              {language==='Español'? 'CURRÍCULUM' : (language==='English'?'RESUME': 'CURRÍCULO') }
            </Button>
              {/* <IconButton color='white' aria-label='Add to friends' icon={<ArrowDownIcon/>} /> */}
          </ButtonGroup>
          </Link>
          </Flex>


          </Flex>
            </Flex>
            </Flex>



            <Element name="about" id="about">
            <Box position='relative' padding='10' mt='3rem' mb='2rem'>
              <Divider />
                <AbsoluteCenter bg='white' px='4' fontWeight="bold" fontFamily="Open Sans, sans-serif">
                {language==='English'? 'About Me' : (language==='Español'? 'Sobre mi' : 'Sobre mim')}
                </AbsoluteCenter>
            </Box>

            <Slider {...settings}  >
              <Flex width="100%">
            <Flex
           
        p={4}
        border='2px'
        borderColor='white'
        borderRadius='10px'
        color="white"
        textAlign="center"
        justifyContent="center"
        alignItems="center"
        mx={{ base: '4rem', md: '23rem' }}
        fontSize='xl'
        textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
        fontFamily="Open Sans, sans-serif"
      >
        {language==='English'? "Hello! 👋 I'm Rubén Corbalán, a passionate Full Stack web developer 👨‍💻" 
        : (language==='Español'? '¡Hola! 👋 Soy Rubén Corbalán, un apasionado desarrollador web Full Stack 👨‍💻' 
        :'Olá! 👋 Sou Rubén Corbalán, um apaixonado desenvolvedor web Full Stack. 👨‍💻')}
      </Flex>
      </Flex>
      <Flex width="100%">
      <Flex
      p={4}
      border='2px'
      borderColor='white'
      borderRadius='10px'
      color="white"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      mx={{ base: '4rem', md: '23rem' }}
        fontSize='xl'
        textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
        fontFamily="Open Sans, sans-serif"
      >
        {language==='English'? "I began my academic journey in Information Systems at UNSE and recently completed the bootcamp at Soy Henry" 
        : (language==='Español'? 'Inicié mi recorrido académico en la Licenciatura en Sistemas de Información (UNSE) y recientemente culminé el bootcamp Soy Henry' 
        :'Iniciei meu percurso acadêmico na Licenciatura em Sistemas de Informação e recentemente concluí o bootcamp Soy Henry')}
        
      </Flex>
      </Flex>
      <Flex width="100%">
      <Flex
      p={4}
      border='2px'
      borderColor='white'
      borderRadius='10px'
      color="white"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      mx={{ base: '4rem', md: '23rem' }}
        fontSize='xl'
        textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
        fontFamily="Open Sans, sans-serif"
      >
        {language==='English'? "I have experience working with real projects and as a freelancer" 
        : (language==='Español'? 'Tengo experiencia trabajando con proyectos reales y como freelancer' 
        :'Tenho experiência trabalhando com projetos reais e como freelancer')}
        
      </Flex>
      </Flex>
      <Flex width="100%">
      <Flex
      p={4}
      border='2px'
      borderColor='white'
      borderRadius='10px'
      color="white"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      mx={{ base: '4rem', md: '23rem' }}
        fontSize='xl'
        textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
        fontFamily="Open Sans, sans-serif"
      >
        {language==='English'? "I have also worked as a chess instructor, receptionist, photographer, and translator" 
        : (language==='Español'? 'También he trabajado como instructor de ajedrez, recepcionista, fotógrafo y traductor' 
        :'Também trabalhei como instrutor de xadrez, recepcionista, fotógrafo e tradutor')}
        
      </Flex>
      </Flex>
      <Flex width="100%">
      <Flex
      p={4}
      border='2px'
      borderColor='white'
      borderRadius='10px'
      color="white"
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      mx={{ base: '4rem', md: '23rem' }}
        fontSize='xl'
        textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'

        fontFamily="Open Sans, sans-serif"
      >
        {language==='English'? "I speak native Spanish, fluent Portuguese and advanced English" 
        : (language==='Español'? 'Hablo español nativo, portugués fluido e inglés avanzado.' 
        :'Falo espanhol nativo, português fluente e inglês avançado')}
        
      </Flex>
      </Flex>
    </Slider>
            
            </Element>
           
            <Element name="projects" id="projects">
            <Box position='relative' padding='10' mt='3rem'>
              <Divider />
                <AbsoluteCenter bg='white' px='4' fontWeight="bold" fontFamily="Open Sans, sans-serif">
                {language==='English'? 'Projects' : (language==='Español'? 'Proyectos' : 'Projetos')}
                </AbsoluteCenter>
            </Box>

            <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
             
            mx='10rem'
            mt='5rem'>
            <SimpleGrid 
            spacing={8} 
            templateColumns='repeat(auto-fill, minmax(25rem, 1fr))'
            
            >

<Flex 
            display="flex" 
            justifyContent="center" 
            alignItems="center" >
<Link  href="https://www.vamos.pe/" isExternal>
  <Card 
  borderRadius="lg" 
  boxShadow="dark-lg" 
  _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
  width={{ base: '20rem', md: '100%' }}
  >
    <Image 
          src={HomeVamos} 
          alt="HomeVamos" 
          borderRadius="lg"
          
          
          height='100%'
          objectFit="cover"
          /> 
  </Card>
  </Link>
  </Flex>

              <Flex display="flex" 
            justifyContent="center" 
            alignItems="center" >
  <Card 
  width={{ base: '20rem', md: '100%' }}
  borderRadius="lg" 
  boxShadow="dark-lg" 
  _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}
  height='100%'>
  <Link  
  href="https://github.com/rubencorba/ProyectoIndividual-Countries" isExternal
  
  >
  <Image 
          src={miniaturaCountries} 
          alt="miniaturaCountries" 
          borderRadius="lg"
          
          height='104.5%'
          objectFit="cover"
          
          /> 
  </Link>
  </Card>
  </Flex>

              <Flex display="flex" 
            justifyContent="center" 
            alignItems="center" >
  <Link  href="https://github.com/rubencorba/Rick-And-Morty" isExternal>
  <Card 
  width={{ base: '20rem', md: '100%' }}
  borderRadius="lg" 
  boxShadow="dark-lg"
   _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}>
    <Image 
          src={miniaturaRyM} 
          alt="miniaturaRyM" 
          borderRadius="lg"
          
          
          height='100%'
          objectFit="cover"
          /> 
  </Card>
  </Link>
  </Flex>

              <Flex display="flex" 
            justifyContent="center" 
            alignItems="center" >
  <Link  href="https://github.com/VamosONG/VamosApp" isExternal>
  <Card 
  width={{ base: '20rem', md: '100%' }}
  borderRadius="lg" 
  boxShadow="dark-lg" 
  _hover={{ transform: "scale(1.05)", transition: "transform 0.3s" }}>
    <Image 
          src={miniaturaVamos} 
          alt="miniaturaVamos" 
          borderRadius="lg"
          
          
          height='101%'
          objectFit="cover"
          /> 
  </Card>
  </Link>
  </Flex>

</SimpleGrid>
</Box>
</Element>



<Element name="skills" id="skills">
<Box position='relative' padding='10' mt='5rem'>
              <Divider />
                <AbsoluteCenter bg='white' px='4' fontWeight="bold" fontFamily="Open Sans, sans-serif">
                {language==='English'? 'Skills' : (language==='Español'? 'Herramientas' : 'Ferramentas')}
                </AbsoluteCenter>
            </Box>
            
            <Wrap 
  spacing="2rem" 
  mt='5rem' 
  mb='5rem' 
  mx='2rem' 
  justify="center" 
>
  <WrapItem>
    <Image 
      src={logos} 
      alt="logos" 
      width={{ base: '15rem', md: '21rem' }} 
    /> 
  </WrapItem>
  <WrapItem>
    <Image 
      src={reactLogo} 
      alt="reactLogo" 
      width={{ base: '5rem', md: '8rem' }} 
    /> 
  </WrapItem>
  <WrapItem>
    <Image 
      src={reduxLogo} 
      alt="reduxLogo" 
      width={{ base: '5rem', md: '8rem' }} 
    /> 
  </WrapItem>
  <WrapItem>
    <Image 
      src={nodeLogo} 
      alt="nodeLogo" 
      width={{ base: '5rem', md: '8rem' }} 
    /> 
  </WrapItem>
  <WrapItem>
    <Image 
      src={expressLogo} 
      alt="expressLogo" 
      width={{ base: '5rem', md: '8rem' }} 
    /> 
  </WrapItem>
  <WrapItem>
    <Image 
      src={postgreLogo} 
      alt="postgreLogo" 
      width={{ base: '5rem', md: '8rem' }} 
    /> 
  </WrapItem>
  <WrapItem>
    <Image 
      src={mySqlLogo} 
      alt="mySqlLogo" 
      width={{ base: '5rem', md: '8rem' }} 
    /> 
  </WrapItem>
</Wrap>
            </Element>

            <Element name="contact" id="contact">
          <Box position='relative' padding='10'>
              <Divider />
                <AbsoluteCenter bg='white' px='4' fontWeight="bold" fontFamily="Open Sans, sans-serif">
                {language==='English'? 'Contact' : (language==='Español'? 'Contáctame' : 'Contato')}
                </AbsoluteCenter>
            </Box>

            <Flex 
            direction="column" 
            justifyContent="center"
            alignItems="center"
            mx='1rem'>
                <Text 
                mt='1rem' 
                color='white' 
                fontSize='xl' 
                as='b'
                justifyContent="center"
                alignItems="center"
                direction="column"
                textAlign="center"
                fontFamily="Open Sans, sans-serif"
                >
                  {language==='Español'? 'Emprendamos proyectos innovadores juntos!!' 
                  : (language==='English'?"Let's start innovative projects together!!"
                  : 'Vamos juntos iniciar projetos inovadores!!') }
                </Text>
                </Flex>

            
            <Flex
      /* direction="column" */
      alignItems="center"
      justifyContent="center"
      my='3rem'
      mx='2rem'
      borderRadius="lg"
      /* boxShadow="dark-lg" */
      /* width= '30rem' */
    >
              {/* <FormControl 
              bg='white' 
              borderRadius="lg" 
              width='30rem'
              p='1rem' 
              boxShadow="dark-lg" 
              border='1px'
              action="https://formsubmit.co/rubencorba@gmail.com" method="POST">
                <FormLabel>
                {language==='English'? 'Email Address' : (language==='Español'? 'Correo Electrónico' : 'Endereço de email')}
                </FormLabel>
                <Input type='email' border='1px' name='email'/>
                <FormLabel>
                {language==='English'? 'Message' : (language==='Español'? 'Mensaje' : 'Message')}
                </FormLabel>
                
                <Textarea
                  
                  border='1px'
                  borderRadius="lg"
                  size='sm'
                  name='Texto'
                />
                <Button 
                type='submit'
                value='enviar'

                leftIcon={<EmailIcon />} 
                color='#2c5e7e' 
                border='2px' 
                borderColor='#2c5e7e' 
                variant='solid' 
                mt='1rem'>
                {language==='English'? 'Send' : 'Enviar'}
                </Button>
              </FormControl> */}
                

                {/* <Flex  borderRadius= 'lg'> */}
              <form
      action="https://formsubmit.co/rubencorba@gmail.com"
      method="POST"
      style={{
        background: 'white',
        borderRadius: 'lg',
        width: '30rem',
        padding: '1rem',
        boxShadow: 'dark-lg',
        border: '1px solid',
      }}
    >
      <FormControl>
        <FormLabel fontFamily="Open Sans, sans-serif">
          {language === 'English' ? 'Email Address' : (language === 'Español' ? 'Correo Electrónico' : 'Endereço de email')}
        </FormLabel>
        <Input type='email' border='1px' name='email' required />
      </FormControl>

      <FormControl mt='1rem'>
        <FormLabel fontFamily="Open Sans, sans-serif">
          {language === 'English' ? 'Message' : (language === 'Español' ? 'Mensaje' : 'Message')}
        </FormLabel>
        <Textarea
          border='1px'
          borderRadius="lg"
          size='sm'
          name='message'
          required
        />
      </FormControl>

      <input type="hidden" name="_next" value="https://rubencorbalan.vercel.app/" /> {/* Para que no redirija a otra página al enviar */}
      <input type="hidden" name="_captcha" value="false" />  {/* Para evitar bots */}

      <Button
        type='submit'
        value='enviar'
        leftIcon={<EmailIcon />}
        color='#2c5e7e'
        border='2px'
        borderColor='#2c5e7e'
        variant='solid'
        mt='1rem'
        onClick={handleClick}

        fontFamily="Open Sans, sans-serif"
      >
        {language === 'English' ? 'Send' : 'Enviar'}
      </Button>
    </form>
    
           
            </Flex>
            </Element>

              {/* Botón de Scroll to Top */}
      <Button
        onClick={scrollToTop}
        position="fixed"
        bottom="20px"
        right="20px"
        colorScheme="blue"
        borderRadius="full"
        p={4}
        boxShadow="md"
        zIndex={1000}
      >
        <ArrowUpIcon />
      </Button>


            </Flex>
    );
}

export default Home;