/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {
  Box,
  Button,
  Center,
  FormControl,
  Heading,
  Image,
  Input,
  Text,
  VStack,
} from 'native-base';
import { useEffect, useRef } from 'react';
import img from '../assets/img/illustration-pesaje.png';

// const img = require('../assets/img/illustration-pesaje.png');

const Login = () => {

  const myRef = useRef({});
  useEffect(() => {
    const styleObj = {
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
    };
    myRef.current.setNativeProps({
      style: styleObj,
    });
  }, [myRef]);

  return (
    <Box safeArea bg="primary.600" >
        <Center>
          <Box minW={300} maxW="100%">
            <Image
              source={img}
              width={200}
              height={200}
            />
            <Box my={8}>
              <Text color="white" bold fontSize="2xl">Bienvenido</Text>
              <Text color="white">Ingresa tus credenciales para empezar</Text>
            </Box>
          </Box>
        </Center>
      <Box ref={myRef} bg="white" height="100%">
        <Center w="100%">
          <Box mt={10} minW={300} maxW="100%">
            <VStack space={3} mt="5">
              <FormControl>
                <FormControl.Label>Usuario</FormControl.Label>
                <Input />
              </FormControl>
              <FormControl>
                <FormControl.Label>Contraseña</FormControl.Label>
                <Input type="password" />
              </FormControl>
              <Button mt="2" colorScheme="primary">
                Ingresar
              </Button>
            </VStack>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};
export default Login;
