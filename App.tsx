/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Link,
  Text,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  VStack,
  Box,
} from 'native-base';
import NativeBaseIcon from './src/components/NativeBaseIcon';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Color Switch Component
// function ToggleDarkMode() {
//   const {colorMode, toggleColorMode} = useColorMode();
//   return (
//     <HStack space={2} alignItems="center">
//       <Text>Dark</Text>
//       <Switch
//         isChecked={colorMode === 'light'}
//         onToggle={toggleColorMode}
//         aria-label={
//           colorMode === 'light' ? 'switch to dark mode' : 'switch to light mode'
//         }
//       />
//       <Text>Light</Text>
//     </HStack>
//   );
// }
import LoginScreen from './src/screen/Login';
import HomeScreen from './src/screen/Home';
import IngresoCreateScreen from './src/screen/Ingreso/Create';
import IngresoShowScreen from './src/screen/Ingreso/Show';

const Stack = createNativeStackNavigator();

const App = () => {
  const config = {
    dependencies: {
      'linear-gradient': require('react-native-linear-gradient').default,
    },
  };

  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="login" component={LoginScreen} />
          <Stack.Screen name="home" component={HomeScreen} />
          <Stack.Screen name="ingreso.create" component={IngresoCreateScreen} />
          <Stack.Screen name="ingreso.show" component={IngresoShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>

    // <NativeBaseProvider>
    //   <Center
    //     _dark={{bg: 'blueGray.900'}}
    //     _light={{bg: 'blueGray.50'}}
    //     px={4}
    //     flex={1}>
    //     <VStack space={5} alignItems="center">
    //       <NativeBaseIcon />
    //       <Heading size="lg">Welcome to NativeBase</Heading>
    //       <HStack space={2} alignItems="center">
    //         <Text>Edit</Text>
    //         <Box
    //           px={2}
    //           py={1}
    //           _dark={{bg: 'blueGray.800'}}
    //           _light={{bg: 'blueGray.200'}}>
    //           App.js
    //         </Box>
    //         <Text>and save to reload.</Text>
    //       </HStack>
    //       <Link href="https://docs.nativebase.io" isExternal>
    //         <Text color="primary.500" underline fontSize={'xl'}>
    //           Learn NativeBase
    //         </Text>
    //       </Link>
    //       <ToggleDarkMode />
    //     </VStack>
    //   </Center>
    // </NativeBaseProvider>
  );
};
export default App;
