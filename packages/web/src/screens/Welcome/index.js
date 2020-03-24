import React from 'react';

import * as S from './styles';

export default function Welcome() {
  return (
    <S.Container>
      <S.Title>Be The Hero</S.Title>
      <S.Description>
        Be the hero is the web application created in Week OmniStack 11
      </S.Description>
      <S.Link to="/register">Cadastro</S.Link>
    </S.Container>
  );
}
