import React from 'react';

import * as S from './styles';

export default function Profile() {
  return (
    <S.Container>
      <S.Header>
        <S.Logo />
        <S.OngName>Bem Vinda, APAD</S.OngName>
        <S.Actions>
          <S.NewCase>Cadastrar novo caso</S.NewCase>
          <S.Logout>
            <S.IconLogout />
          </S.Logout>
        </S.Actions>
      </S.Header>
      <S.Title>Casos Cadastrados</S.Title>
    </S.Container>
  );
}
