import {Box, HStack, Text} from 'native-base';
import Icon from 'react-native-easy-icon';

const CardInfo = () => {
  return (
    <Box
      mx={2}
      borderRadius={10}
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 2],
          end: [1, 0],
        },
      }}>
      <HStack p={4} justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Box mb={2}>
            <Icon type="feather" name="tag" color="white" size={32} />
          </Box>
          <Text color="white">PSJ-01222</Text>
          <Text fontSize={10} color="white">
            anthony_will
          </Text>
        </Box>
        <Box>
          <Text color="white" fontSize={10}>
            29/09/2023
          </Text>
          <Text textAlign="right" color="white" fontSize={10}>
            10:00 am
          </Text>
        </Box>
      </HStack>
      {/* <Divider my={3} bg="white" /> */}
      <Box bg="white" borderBottomRadius={10} p={3}>
        <HStack space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Box p={2.5} bg="amber.100" borderRadius={10}>
              <Icon
                type="ionicon"
                name="layers-outline"
                color="orange"
                size={22}
              />
            </Box>
            <Box ml={2}>
              <Text bold fontSize={15}>
                50
              </Text>
              <Text fontSize={11}>Sacos</Text>
            </Box>
          </HStack>
          <HStack alignItems="center">
            <Box p={2.5} bg="blue.100" borderRadius={10}>
              <Icon type="feather" name="file-minus" color="blue" size={22} />
            </Box>
            <Box ml={2}>
              <Text bold fontSize={15}>
                12
              </Text>
              <Text fontSize={11}>Guías</Text>
            </Box>
          </HStack>
          <HStack alignItems="center">
            <Box p={2.5} bg="green.100" borderRadius={10}>
              <Icon type="feather" name="briefcase" color="green" size={22} />
            </Box>
            <Box ml={2}>
              <Text bold fontSize={15}>
                359
              </Text>
              <Text fontSize={11}>Kg</Text>
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default CardInfo;
