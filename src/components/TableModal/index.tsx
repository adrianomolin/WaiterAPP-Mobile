import { Modal, TouchableOpacity } from 'react-native';

import { Text } from '../Text';

import { Overlay, ModalBody, Header, Form, Input } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';
import { useState } from 'react';

import { isAndroid } from '../../utils/isAndroid';

import { useTable } from '../../hooks/useTable';

export function TableModal() {
  const [table, setTable] = useState('');

  const { handleSaveTable, isTableModalVisible, handleModalVisibility } = useTable();

  function onClose() {
    handleModalVisibility(false);
  }

  function handleSave() {
    setTable('');
    handleSaveTable(table);
    onClose();
  }

  return (
    <Modal
      visible={isTableModalVisible}
      transparent
      animationType='fade'
    >
      <Overlay behavior={isAndroid ? 'height' : 'padding'}>
        <ModalBody>
          <Header>
            <Text weight="600">Informe a mesa</Text>

            <TouchableOpacity onPress={onClose}>
              <Close color="#666"/>
            </TouchableOpacity>
          </Header>

          <Form>
            <Input
              placeholder="Número da mesa"
              placeholderTextColor="#666"
              keyboardType='number-pad'
              onChangeText={setTable}
            />

            <Button onPress={handleSave} disabled={table.length === 0}>
              Salvar
            </Button>
          </Form>
        </ModalBody>
      </Overlay>
    </Modal>
  );
}
