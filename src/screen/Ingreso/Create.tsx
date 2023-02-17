/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Box, Button, Center, FormControl, HStack, IconButton, Image, Input, Text, VStack} from 'native-base';
import Icon from 'react-native-easy-icon';
import Ripple from 'react-native-material-ripple';
import img from '../../assets/img/movements.png';

const IngresoCreate = ({navigation}) => {
  return (
    <Box safeArea>
      <HStack px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <Ripple onPressOut={() => navigation.goBack()}>
            <IconButton icon={<Icon type="feather" name="arrow-left" color="black" size={21}/>} />
          </Ripple>
          <Text fontSize="20" fontWeight="bold">
            Registrar ingreso
          </Text>
        </HStack>
        <HStack>
          {/* <IconButton icon={<Icon type="feather" name="plus" color="white" size={21}/>} /> */}
        </HStack>
      </HStack>

      <Box mx={6}>
        <Center>
          <Image
            alt="as"
            source={img}
            width={200}
            height={200}
          />
        </Center>
        <VStack>
        <FormControl my={4} isInvalid>
          <FormControl.Label>Código de ticket</FormControl.Label>
          <Input type="number" placeholder="Código" w="100%" />
          <FormControl.ErrorMessage>
            Este código ya existe
          </FormControl.ErrorMessage>
        </FormControl>
          <Button
            onPress={() => navigation.replace('ingreso.show')}
            endIcon={<Icon type="feather" name="arrow-right" color="white" size={21}/>}
          >
            Registrar
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default IngresoCreate;
