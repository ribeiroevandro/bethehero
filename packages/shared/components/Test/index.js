import React from 'react';

import * as S from './styles';

const Test = ({children}) => {
  return (
    <S.Container>
      <S.Text>{children}</S.Text>
    </S.Container>
  );
}

export default Test;
