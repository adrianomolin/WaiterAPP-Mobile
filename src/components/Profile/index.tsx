import { Button } from '../Button';
import { Header } from '../Header';
import { Text } from '../Text';
import { FormInput, FormArea, Input, ProfileHeader } from './styles';

import { useAuth } from '../../hooks/auth';
import { useState } from 'react';
import { LogoutIcon } from '../Icons/LogoutIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Profile() {
  const { user, signOut }  = useAuth();
  const [disabled, setDisabled] = useState(true);

  return (
    <>
      <Header>
        <ProfileHeader>
          <Text weight="600" size={24}>Meu Perfil</Text>
          <TouchableOpacity onPress={signOut}><LogoutIcon color="#D73035"/></TouchableOpacity>
        </ProfileHeader>
      </Header>

      <FormArea>
        <FormInput>
          <Text size={14} color="#666" style={{marginBottom: 8}}>Nome</Text>
          <Input
            placeholder='Name'
            defaultValue={user?.name}
          />
        </FormInput>
        <FormInput>
          <Text size={14} color="#666" style={{marginBottom: 8}}>Email</Text>
          <Input
            placeholder='email'
            textContentType='emailAddress'
            value={user?.email || 'email'}
          />
        </FormInput>
        <FormInput>
          <Text size={14} color="#666" style={{marginBottom: 8}}>Senha</Text>
          <Input
            placeholder='Senha'
            textContentType='password'
            defaultValue="teste"
            secureTextEntry
          />
        </FormInput>
        <FormInput style={{ marginBottom: 40 }}>
          <Text size={14} color="#666" style={{marginBottom: 8}}>Confirmação de Senha</Text>
          <Input
            placeholder='Confirmar senha'
            textContentType='password'
            defaultValue="teste"
            secureTextEntry
          />
        </FormInput>

        <Button disabled={disabled} onPress={() => alert('ok')}>Salvar alterações</Button>
      </FormArea>
    </>
  );
}
