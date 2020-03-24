import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';

export const Container = styled.section`
  text-align: center;
`;

export const Title = styled.h1``;

export const Description = styled.h3`
  font-weight: normal;
`;

export const Link = styled(RLink)`
  color: var(--link-color);
  text-decoration: none;
  font-weight: bold;
`;
