/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import {
  Box,
  Button,
  Center,
  Divider,
  Fab,
  HStack,
  IconButton,
  ScrollView,
  Text,
} from 'native-base';
import {useState} from 'react';
import Icon from 'react-native-easy-icon';
import CardInfo from '../../components/Ingreso/CardInfo';
import ModalPesajeCreate from '../../components/Ingreso/ModalPesajeCreate';
import ModalGRRCreate from '../../components/Ingreso/ModalGRRCreate';
import PesajeTab from '../../components/Ingreso/Tabs/PesajeTab';
import GuiaRemisionTab from '../../components/Ingreso/Tabs/GuiaRemisionTab';

const IngresoShow = ({navigation}) => {
  const [tab, setTab] = useState('pesaje');
  const [showModalCreatePesaje, setShowModalCreatePesaje] = useState(false);
  const [showModalCreateGRR, setShowModalCreateGRR] = useState(false);
  const savePesaje = () => {
    setShowModalCreatePesaje(false);
  };
  const saveGRR = () => {
    setShowModalCreateGRR(false);
  };
  return (
    <Box safeArea >
      <HStack
        px="1"
        py="2"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center">
          <IconButton
            onPressOut={() => navigation.goBack()}
            icon={
              <Icon type="feather" name="arrow-left" color="black" size={21} />
            }
          />
          <Text fontSize="20" fontWeight="bold">
            Ingreso
          </Text>
        </HStack>
        {/* <HStack>
          <IconButton icon={<Icon type="feather" name="plus" color="white" size={21}/>} />
        </HStack> */}
      </HStack>
      <ScrollView h="100%">
        <CardInfo />
        <HStack space={3} justifyContent="space-between" m={2}>
          <Button
            width="30%"
            onPress={() => setTab('pesaje')}
            variant={tab === 'pesaje' ? 'solid' : 'outline'}
            size="sm">
            Pesaje
          </Button>
          <Button
            width="30%"
            onPress={() => setTab('guias_remision')}
            variant={tab === 'guias_remision' ? 'solid' : 'outline'}
            size="sm">
            Guías de remisión
          </Button>
          <Button
            width="30%"
            onPress={() => setTab('resumen')}
            variant={tab === 'resumen' ? 'solid' : 'outline'}
            size="sm">
            Resúmen
          </Button>
        </HStack>
        {
          {
            pesaje: <PesajeTab />,
            guias_remision: <GuiaRemisionTab/>,
          }[tab]
        }
      </ScrollView>
      {
        {
          pesaje:
            <Fab mb="55px" renderInPortal={false} shadow={2} placement="bottom-right" size="sm"
              bg="secondary.500"
              icon={<Icon type="feather" name="plus" color="white" size={21} />} label="Agregar pesaje"
              onPress={() => setShowModalCreatePesaje(true)}
            />,
          guias_remision:
            <Fab mb="55px" renderInPortal={false} shadow={2} placement="bottom-right" size="sm"
              bg="secondary.500"
              icon={<Icon type="feather" name="plus" color="white" size={21} />} label="Agregar guía"
              onPress={() => setShowModalCreateGRR(true)}
            />,
        }[tab]
      }
      <ModalGRRCreate showModal={showModalCreateGRR} setShowModal={setShowModalCreateGRR} saveData={saveGRR}/>
      <ModalPesajeCreate showModal={showModalCreatePesaje} setShowModal={setShowModalCreatePesaje} saveData={savePesaje}/>
    </Box>
  );
};

export default IngresoShow;
