import React from 'react';
import Input from '~/components/Input';

import * as S from './styles';

export default function SignUp() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <S.Container>
      <S.FormContainer>
        <S.Infos>
          <S.Logo />
          <S.Title>Cadastro</S.Title>
          <S.Description>
            Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem
            os casos da sua ONG.
          </S.Description>
          <S.Link to="/">
            <S.LoginIcon />
            Voltar para o login
          </S.Link>
        </S.Infos>
        <S.Form onSubmit={handleSubmit}>
          <Input name="name" type="text" placeholder="Nome da ONG" />
          <Input name="email" type="email" placeholder="E-mail" />
          <Input name="whatsapp" type="tel" placeholder="WhatsApp" />
          <S.Inline>
            <Input name="city" type="text" placeholder="Cidade" />
            <Input name="uf" type="text" placeholder="UF" />
          </S.Inline>
          <S.Submit>Cadastrar</S.Submit>
        </S.Form>
      </S.FormContainer>
    </S.Container>
  );
}
