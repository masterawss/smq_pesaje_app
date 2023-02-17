import {Box, HStack, Text} from 'native-base';

const Header = ({image, title}: any) => {
  return (
    <Box
      p={3}
      bg={{
        linearGradient: {
          colors: ['lightBlue.300', 'violet.800'],
          start: [0, 2],
          end: [1, 0],
        },
      }}>
      <HStack space={2} justifyContent="space-between">
        <Box>
          <Text color="white" fontSize={15} pb={5}>
            Almacén central
          </Text>
          <Text color="white" fontSize={20} bold>
            {title}
          </Text>
        </Box>
        {image}
      </HStack>
    </Box>
  );
};
export default Header;
