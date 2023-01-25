/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import IngresoTab from '../components/Home/Tabs/IngresoTab';
import SalidaTab from '../components/Home/Tabs/SalidaTab';
import Icon from 'react-native-easy-icon';

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
      <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Ingreso':
              return <Icon  type="feather" name="corner-left-down" color="orange" size={21}/>;
            case 'Salida':
              return <Icon  type="feather" name="corner-right-up" color="orange" size={21}/>;
            default:
              break;
          }
        },
      })} initialRouteName="Ingreso">
        <Tab.Screen name="Ingreso" component={IngresoTab} />
        <Tab.Screen name="Salida" component={SalidaTab} />
      </Tab.Navigator>
  );
};

export default Home;
