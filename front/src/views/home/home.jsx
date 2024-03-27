import { 
  Box, 
  Heading, 
  SimpleGrid, 
  Image, 
  Text, 
  Card,
  Flex
} from "@chakra-ui/react";

import Equipaje from './paPerfilp.jpg';
import AboutMe from "../aboutMe/aboutMe";



function Home() {
    return (
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
          <Image src={Equipaje} alt="Equipaje" borderRadius='10px' /> {/* Aquí puedes ajustar el radio de borde según tu preferencia */}
        </Flex>
            {/* <Box
            
            position='relative'
            top='0'
            left='0'
            w='100%'
            h='100%'
            
            bgImage={Equipaje}
            
            bgSize='auto' 
            bgPosition='center'
            
            zIndex='-1'

            bgRepeat='no-repeat'
            borderRadius='10px'
            /> */}
            <Flex
            /* direction='column'
            alignItems={['flex-start', null, 'flex-start']}
            justify={['flex-start', null, 'center']}
            h='100%'
            w='100%'
            mb={{ base: '-10rem', md: '2' }}
            p={['30px', null, '50px 10%']} */
            flex='1' // Ocupa todo el espacio disponible
          justifyContent='flex-start' // Centra horizontalmente
          alignItems='center' 
            >
            <Heading
            /* color='white'
            textTransform='uppercase'
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['xl', null, '4xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            mt={{ base: "1rem", md: "0" }}
            marginTop={{ base: "30%", lg: "0%" }} */
            color='white'
            textTransform='uppercase'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['xl', null, '4xl']}
            textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
            >
            {'<Rubén Corbalán/>'}
            </Heading>
            </Flex>

           {/*  <Box>
            <AboutMe/>

            </Box> */}
            </Flex>
    );
}

export default Home;