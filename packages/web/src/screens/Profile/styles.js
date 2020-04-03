import styled from 'styled-components';
// import { Link as RLink } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

export const Container = styled.main`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: require('~/assets/logo.svg'),
  alt: 'Be The Hero',
})`
  height: 64px;
`;

export const OngName = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NewCase = styled.button`
  width: 260px;
  height: 60px;
  background-color: var(--actions);
  border: 0;
  border-radius: 8px;
  color: var(--actions-text);
  font-weight: 700;
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

export const Logout = styled.button`
  width: 60px;
  height: 60px;
  background-color: transparent;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  color: var(--actions-text);
  font-weight: 700;
  font-size: 18px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  line-height: 60px;
  transition: filter 0.2s;
  margin-left: 16px;

  &:hover {
    filter: brightness(90%);
  }
`;

export const IconLogout = styled(FiPower).attrs({
  size: 18,
})`
  color: var(--actions);
`;

export const Title = styled.h1`
  color: var(--text-darker);
  font-size: 32px;
  margin: 80px 0 24px;
`;
