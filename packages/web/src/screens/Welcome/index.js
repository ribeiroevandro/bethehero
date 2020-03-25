import React from 'react';

import Input from '~/components/Input';

import * as S from './styles';

export default function Welcome() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <S.Container>
      <S.FormContainer>
        <S.Logo />
        <S.Title>Faça seu login</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <Input name="ong" type="text" placeholder="Sua ID" />
          <S.Submit>Entrar</S.Submit>
        </S.Form>
        <S.Link to="/register">
          <S.LoginIcon />
          Não tenho cadastro
        </S.Link>
      </S.FormContainer>
      <S.Heroes />
    </S.Container>
  );
}
