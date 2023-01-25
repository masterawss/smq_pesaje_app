/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Badge, Box, HStack, Pressable, Text} from 'native-base';

const Item = ({item}) => {
  return (
    <Pressable key={item.id}>
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
                <Badge colorScheme="coolGray">
                  <Text fontSize={12}>{item.nro_guias + ' guías'}</Text>
                </Badge>
                <Badge colorScheme="coolGray">
                  {item.nro_sacos + ' sacos'}
                </Badge>
                <Badge colorScheme="info">{item.peso_total + ' kg'}</Badge>
              </HStack>
            </HStack>
          </Box>
        );
      }}
    </Pressable>
  );
};
export default Item;
