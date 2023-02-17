/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Badge, Box, HStack, Pressable, Text} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-easy-icon';

const Item = ({item}) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('ingreso.show')} key={item.id}>
      {({isHovered, isPressed}) => {
        return (
          <Box
            bg={
              isPressed ? 'coolGray.200' : isHovered ? 'coolGray.200' : 'white'
            }
            borderRadius={10}
            my={0.5}
            p={2.5}
            style={{
              transform: [
                {
                  scale: isPressed ? 0.96 : 1,
                },
              ],
            }}>
            <HStack space={3} justifyContent="space-between">
              <Box>
                <Text bold>{item.codigo}</Text>
                <Text fontSize={9}>
                  {item.fecha} {item.hora}
                </Text>
              </Box>
              <HStack space={1}>
                <Box>
                  <HStack alignItems="center">
                    <Icon type="ionicon" name="layers-outline" color="orange" size={14} />
                    <Text ml={1} color="orange.500" fontSize={12}>
                      {item.nro_sacos}
                    </Text>
                  </HStack>
                </Box>
                <Box mx={3}>
                  <HStack alignItems="center">
                    <Icon type="feather" name="file-minus" color="blue" size={14} />
                    <Text ml={1} color="blue.500" fontSize={12}>
                      {item.nro_guias}
                    </Text>
                  </HStack>
                </Box>
                <Box>
                  <HStack alignItems="center">
                    <Icon type="feather" name="archive" color="green" size={14} />
                    <Text ml={1} color="green.500" fontSize={12}>
                      {item.peso_total + ' kg'}
                    </Text>
                  </HStack>
                </Box>
              </HStack>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  );
};
export default Item;
