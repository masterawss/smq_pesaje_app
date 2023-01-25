/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Box, Text} from 'native-base';
import Ingreso from '../../../screen/Ingreso';
const IngresoStack = createNativeStackNavigator();

const IngresoTab = () => {
  // return <Box>
  //   <Text>Ingreso</Text>
  // </Box>;
  return (
    <IngresoStack.Navigator screenOptions={{
      headerShown: false,
    }} initialRouteName="DefaultIngresoScreen">
      <IngresoStack.Screen name="DefaultIngresoScreen" component={Ingreso} />
      {/*add more screen with bottom tabs here*/}
    </IngresoStack.Navigator>
  );
};
export default IngresoTab;
