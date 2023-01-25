/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const SalidaStack = createNativeStackNavigator();
import SalidaIndex from '../../../screen/Salida/Index';

const SalidaTab = () => {
  return (
    <SalidaStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="salida.index">
      <SalidaStack.Screen name="salida.index" component={SalidaIndex} />
      {/*add more screen with bottom tabs here*/}
    </SalidaStack.Navigator>
  );
};
export default SalidaTab;
