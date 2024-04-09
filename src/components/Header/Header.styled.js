import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { media } from 'constants/constants';

export const HeaderContainer = styled.header`
  padding-top: 18px;

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 24px;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.svg`
  padding: 6px;
  margin-right: 8px;

  border-radius: 30px;
  background-color: var(--brand-color);
  fill: var(--contrast-color);

  transition:
    fill var(--animation-duration) ease,
    background-color var(--animation-duration) ease;

  @media screen and (min-width: ${media.tablet}) {
    margin-right: 4px;
  }
`;

export const LogoText = styled.p`
  font-family: 'Font-Spring', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;

  color: var(--black-color);

  transition: color var(--animation-duration) ease;

  @media screen and (min-width: ${media.tablet}) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 13px;
  padding-left: 15px;
  padding-right: 21px;

  border-radius: 9px;

  transition: background-color var(--animation-duration) ease;

  &:hover {
    background-color: var(--brand-color);
    & ${LogoText} {
      color: var(--contrast-color);
    }

    & ${Logo} {
      fill: var(--brand-color);
      background-color: var(--contrast-color);
    }
  }

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 13px;
    padding-bottom: 15px;
    padding-left: 9px;
    padding-right: 14px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const HomeLink = styled(NavLink)`
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 6px;

  background-color: var(--brand-color);
  color: var(--contrast-color);

  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  transition: background-color var(--animation-duration) ease;
  &:hover {
    background-color: var(--brand-hover-color);
  }

  @media screen and (min-width: ${media.tablet}) {
    padding: 12px 28px;
    margin-right: 16px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const CartIcon = styled.svg`
  padding: 12px;
  border-radius: 30px;
  background-color: var(--brand-color);

  transition: background-color var(--animation-duration) ease;
  @media screen and (min-width: ${media.tablet}) {
    padding: 10px;
    margin-right: 14px;
  }
`;

export const CartLink = styled(NavLink)`
  display: flex;
  align-items: center;
  fill: var(--contrast-color);

  &:hover ${CartIcon} {
    background-color: var(--brand-hover-color);
  }
`;

export const CartText = styled.p`
  display: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33;

  color: black;

  @media screen and (min-width: ${media.tablet}) {
    display: block;
  }
`;
