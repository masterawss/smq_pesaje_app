/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */'';
import { Box, Button, Center, FormControl, HStack, Image, Input, Modal, Text } from 'native-base';
import Icon from 'react-native-easy-icon';
import DocRev from '../../assets/img/document-revision.png';

const ModalCreate = ({showModal, setShowModal, saveData}: any) => {
  const save = () => {
    saveData();
  };
  return (
    <Modal animationPreset="slide" isOpen={showModal} onClose={() => setShowModal(false)} size="full">
      <Modal.Content {...styles.bottom}>
        <Modal.CloseButton />
        <Modal.Header>Registrar guía de remisión remitente</Modal.Header>
        <Modal.Body>
              <Center mt={4} mb={4}>
                <Image
                  mb={3}
                  alt="asdasd"
                  source={DocRev}
                  width={200}
                  height={200}
                />
                <FormControl isInvalid>
                  <FormControl.Label>Código de guía</FormControl.Label>
                  <Input placeholder="Escriba el código" />
                  <FormControl.ErrorMessage leftIcon={<Icon type="feather" name="alert-circle" color="red" size={15} />}>
                    No se encontró la guía.
                  </FormControl.ErrorMessage>
                </FormControl>
              </Center>
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
};
