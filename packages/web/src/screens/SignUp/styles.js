import styled from 'styled-components';
import { Link as RLink } from 'react-router-dom';
import { Form as Unform } from '@unform/web';
import { FiArrowLeft } from 'react-icons/fi';

export const Container = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img.attrs({
  src: require('~/assets/logo.svg'),
  alt: 'Be The Hero',
})``;

export const Title = styled.h1`
  color: var(--text-darker);
  font-size: 32px;
  margin: 64px 0 32px;
`;

export const Description = styled.h1`
  color: var(--text);
  font-size: 18px;
  line-height: 32px;
`;

export const Infos = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const FormContainer = styled.section`
  width: 100%;
  padding: 96px;
  background-color: var(--background);
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled(Unform)`
  width: 100%;
  max-width: 450px;
`;

export const Submit = styled.button`
  width: 100%;
  height: 60px;
  background-color: var(--actions);
  border: 0;
  border-radius: 8px;
  color: var(--actions-text);
  font-weight: 700;
  margin-top: 16px;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 60px;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;

export const Link = styled(RLink)`
  color: var(--text-dark);
  text-decoration: none;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-top: 40px;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const LoginIcon = styled(FiArrowLeft).attrs({
  size: 16,
})`
  color: var(--actions);
  margin-right: 8px;
`;

export const Inline = styled.span`
  display: flex;

  input:last-child {
    width: 15%;
    margin-left: 8px;
  }
`;
