/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */'';
import { Box, Button, Center, FormControl, HStack, Image, Input, Modal, Text } from 'native-base';
import Icon from 'react-native-easy-icon';
import { useState } from 'react';
import ImgBluetoothDisconnected from '../../assets/img/bluetooth-disconnected.png';

const ModalCreate = ({showModal, setShowModal, saveData}: any) => {
  const [balanzaConnected, setBalanzaConnected] = useState(true);

  const [pesoPaleta, setPesoPaleta] = useState('80');

  const save = () => {
    saveData(pesoPaleta);
  };

  return (
    <Modal animationPreset="slide" isOpen={showModal} onClose={() => setShowModal(false)} size="full">
      <Modal.Content {...styles.bottom}>
        <Modal.CloseButton />
        <Modal.Header>Registrar pesaje</Modal.Header>
        <Modal.Body>
          <HStack space={2}>
            <FormControl width="50%">
              <FormControl.Label>Número de sacos</FormControl.Label>
              <Input keyboardType="numeric" />
            </FormControl>
            <FormControl width="50%">
              <FormControl.Label>Peso de paleta (Kg)</FormControl.Label>
              <Input keyboardType="numeric" onChangeText={newText => setPesoPaleta(newText)} defaultValue={pesoPaleta} />
            </FormControl>
          </HStack>
          {/* <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl> */}
          {
            balanzaConnected ? (
              <Center mt={10} mb={4}>
                <HStack alignItems="center">
                  <Icon type="feather" name="server" color="orange" size={35} />
                  <Box ml={3}>
                    <Text>Peso</Text>
                    <Text color="secondary.500" fontSize={20} bold>2 502 kg</Text>
                  </Box>
                </HStack>
                <Text color="gray.500" fontSize={10}>
                  *Datos obtenidos de la balanza eléctrica
                </Text>
              </Center>
            )
            :
            (
              <Center mt={10} mb={4}>
                <HStack alignItems="center">
                  <Image
                    source={ImgBluetoothDisconnected}
                    width={50}
                    height={50}
                    alt="asd"
                  />
                  <FormControl ml={3} width={20}>
                    <FormControl.Label>Peso</FormControl.Label>
                    <Input keyboardType="numeric" size="sm" />
                  </FormControl>
                </HStack>
                <Text color="danger.500" fontSize={10}>
                  *No hay conexión con la balanza eléctrica
                </Text>
              </Center>
            )
          }
        </Modal.Body>
        <Modal.Footer>
          <Button.Group space={2}>
            <Button
              variant="ghost"
              colorScheme="blueGray"
              onPress={() => {
                setShowModal(false);
              }}>
              Cancelar
            </Button>
            <Button
              onPress={() => {
                save();
              }}>
              Guardar
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};
export default ModalCreate;

const styles = {
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  // top: {
  //   marginBottom: 'auto',
  //   marginTop: 0,
  // },

  // left: {
  //   marginLeft: 0,
  //   marginRight: 'auto',
  // },
  // right: {
  //   marginLeft: 'auto',
  //   marginRight: 0,
  // },
  // center: {},
};
