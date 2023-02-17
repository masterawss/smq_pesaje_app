/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import {Box, HStack, IconButton, Menu, Pressable, Text} from 'native-base';
import Icon from 'react-native-easy-icon';
import Ripple from 'react-native-material-ripple';

export const Item = ({pesaje}: any) => {
  return (
    <Box>
      <HStack space={4} justifyContent="space-between" p={3}>
        <HStack>
          <HStack alignItems="center">
              <Box p={2} bg="amber.100" borderRadius={10}>
                <Icon type="feather" name="archive" color="orange" size={14} />
              </Box>
              <Box ml={2}>
                <Text  fontSize={15}>
                  {pesaje.peso_neto} kg
                </Text>
                <Text  fontSize={10} color="gray.400">
                  74 kg de paleta
                </Text>
              </Box>
            </HStack>
          {/* <Icon type="ionicon" name="layers-outline" color="orange" size={21} />
          <Text ml={2}>2 sacos</Text> */}
        </HStack>
        <HStack alignItems="center">
          <HStack alignItems="center">
            <Icon type="ionicon" name="layers-outline" color="orange" size={12} />
            <Text color="orange.500" ml={1} fontSize={12}>18 sacos</Text>
          </HStack>
          <HStack alignItems="center" ml={3}>
            <Icon type="feather" name="box" color="green" size={12} />
            <Text color="green.500" ml={1} fontSize={12}>78 kg prom.</Text>
          </HStack>

          <Box alignItems="center" ml={2}>
            <Menu defaultIsOpen={false} w="100" trigger={triggerProps => {
              return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
                      <Icon type="ionicon" name="ellipsis-vertical-outline" color="gray"  size={15} />
                    </Pressable>;
            }}>
              <Menu.Item>Editar</Menu.Item>
              <Menu.Item><Text color="danger.500">Eliminar</Text></Menu.Item>
            </Menu>
          </Box>

        </HStack>
      </HStack>
    </Box>
  );
};

export default Item;
