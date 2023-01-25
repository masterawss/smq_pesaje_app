/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresoTab from '../components/Home/Tabs/IngresoTab';
import SalidaTab from '../components/Home/Tabs/SalidaTab';
import Icon from 'react-native-ionicons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Box, Text } from 'native-base';

const Tab = createBottomTabNavigator();


const Home = () => {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => <Icon name="add" />,
      })} initialRouteName="Ingreso">
        <Tab.Screen name="Ingreso" component={IngresoTab} />
        <Tab.Screen name="Salida" component={SalidaTab} />
      </Tab.Navigator>
  );
};

export default Home;
