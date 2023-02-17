/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IngresoIndex from '../../../screen/Ingreso/Index';

const IngresoStack = createNativeStackNavigator();

const IngresoTab = () => {
  // return <Box>
  //   <Text>Ingreso</Text>
  // </Box>;
  return (
    <IngresoStack.Navigator
      screenOptions={{
        headerShown: false,
      }} initialRouteName="ingreso.index"
    >
      <IngresoStack.Screen name="ingreso.index" component={IngresoIndex} />
      {/*add more screen with bottom tabs here*/}
    </IngresoStack.Navigator>
  );
};
export default IngresoTab;
