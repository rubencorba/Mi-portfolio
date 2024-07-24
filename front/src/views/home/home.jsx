import { 
  Box, 
  Heading, 
  SimpleGrid, 
  Image, 
  Text, 
  Card,
  Flex,
  Textarea
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
          <Image 
          src={Equipaje} 
          alt="Equipaje" 
          borderRadius='10px' 
          mt='5rem'
          /> {/* Aquí puedes ajustar el radio de borde según tu preferencia */}
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
            
            color='white'
            textTransform='uppercase'
            fontFamily="'DIN Alternate Black', sans-serif"
            letterSpacing='2px'
            fontSize={['xl', null, '4xl']}
            textShadow='2px 2px 4px rgba(0, 0, 0, 0.9)'
            >
            {'<Rubén Corbalán/>'}
            <Text
            fontSize='xl'
            mt='5rem'
            >¡Hola! 👋 Soy Rubén Corbalán, un apasionado desarrollador web Full Stack. 👨‍💻 Inicié mi recorrido académico en la Licenciatura en Sistemas de Información en UNSE y recientemente culminé el bootcamp de Soy Henry, donde trabajé en proyectos utilizando JS, React, Node, Redux, Express, PostgreSQL, Sequelize, HTML, y CSS.

            Me motiva aprender nuevas tecnologías y mejorar mis habilidades en informática. Disfruto los desafíos, los viajes y la adquisición de conocimientos. He trabajado como profesor de ajedrez, recepcionista, fotógrafo, y traductor en diferentes países de América Latina, lo que me ha brindado una gran versatilidad laboral. Domino el español, inglés y portugués, y estoy abierto a nuevas oportunidades y colaboraciones en el ámbito de IT. 
            
            Conversemos sobre cómo podemos colaborar
            ✉ Mail: rubencorba@gmail.com
            </Text>
            </Heading>
            </Flex>

           {/*  <Box>
            <AboutMe/>

            </Box> */}
            </Flex>
    );
}

export default Home;