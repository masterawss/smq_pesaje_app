/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Box, Text} from 'native-base';
const SalidaStack = createNativeStackNavigator();
import Salida from '../../../screen/Salida';

const SalidaTab = () => {
  return (
    <SalidaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="DefaultSalidaScreen">
      <SalidaStack.Screen name="DefaultSalidaScreen" component={Salida} />
      {/*add more screen with bottom tabs here*/}
    </SalidaStack.Navigator>
  );
};
export default SalidaTab;
