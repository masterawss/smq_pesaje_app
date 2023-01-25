/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {Box, Center, Divider, HStack, Image, Text, Fab, VStack, Badge, Pressable} from 'native-base';
import {useState, useEffect} from 'react';
import img from '../../assets/img/illustration-pesaje.png';
import Icon from 'react-native-easy-icon';
import Header from '../../components/Home/Header';
import Item from '../../components/Ingreso/Item';

const IngresoIndex = ({ navigation }) => {
  const [historial, setHistorial] = useState<any>([]);
  useEffect(() => {
    setHistorial([
      {
        id: 1,
        codigo: 'IPS-123456',
        fecha: '2021-08-01',
        hora: '10:00',
        nro_guias: 2,
        nro_sacos: 10,
        peso_promedio: 76,
        peso_total: 760,
      },
      {
        id: 2,
        codigo: 'IPS-98789',
        fecha: '2021-08-01',
        hora: '10:00',
        nro_guias: 2,
        nro_sacos: 10,
        peso_promedio: 76,
        peso_total: 760,
      },
      {
        id: 3,
        codigo: 'IPS-098893',
        fecha: '2021-08-01',
        hora: '10:00',
        nro_guias: 2,
        nro_sacos: 10,
        peso_promedio: 76,
        peso_total: 760,
      },
    ]);
  }, []);

  return (
    <Box safeArea minHeight="full">
      <Header
        title="Historial de ingresos"
        image={<Image alt="asd" source={img} width="24" height="24" />}
      />
      <Box p={3} >
        <Text bold pb={4}>Ingresos registrados</Text>
        <Box >
        {
          historial.map((item: any) => (
            <Item key={item.id} item={item} />
          ))
        }
        </Box>
      </Box>
      <Fab renderInPortal={false} shadow={2} placement="bottom-right" size="sm" bgColor="secondary.500"
        icon={<Icon type="feather" name="plus" color="white" size={21}/>}
        onPress={() => navigation.navigate('ingreso.create')}
      />
    </Box>
  );
};
export default IngresoIndex;
