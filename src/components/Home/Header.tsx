import {Box, HStack, Text} from 'native-base';

const Header = ({image, title}: any) => {
  return (
    <Box bgColor="primary.600" p={3}>
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
