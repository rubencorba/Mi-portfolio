import { 
    Box, 
    Heading, 
    SimpleGrid, 
    Image, 
    Text, 
    Card,
    Flex
  } from "@chakra-ui/react";

  import Equipaje from './gladis2.jpg';

function AboutMe() {
  return (
    <Flex
        h='100vh'
        position= 'relative'
        direction={{ base: "column", md: "row" }}
        >
            <Box
            /* position='absolute' */ // Volver a esto para que funcione bien
            position='absolute'
            top='0'
            left='0'
            w='100%'
            h='100%'
            /* bgImage="https://res.cloudinary.com/drgnsbah9/image/upload/v1705767603/Vamos/Aeropuerto1_ypg3br.jpg" */
            bgImage={Equipaje}
            bgSize='cover'
            bgPosition='center'
            filter='blur(2px) brightness(0.5)'
            zIndex='-1'
            />
            <Flex
            direction='column'
            alignItems={['flex-start', null, 'flex-start']}
            justify={['flex-start', null, 'center']}
            h='100%'
            w='100%'
            mb={{ base: '-10rem', md: '2' }}
            p={['30px', null, '50px 10%']}
            >
            <Heading
            color='white'
            textTransform='uppercase'
            textAlign={['left', null, 'left']}
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['xl', null, '4xl']}
            mb='2'
            textShadow='2px 2px 4px rgb(0, 0, 0, 0.9)'
            mt={{ base: "1rem", md: "0" }}
            marginTop={{ base: "30%", lg: "0%" }}
            >
            Rubén Corbalán
            </Heading>
            </Flex>
            </Flex>
  );
}

export default AboutMe;
