import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding-top: 18px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.svg`
  margin-right: 8px;
  padding: 6px;

  border-radius: 30px;
  background-color: var(--brand-color);
  fill: var(--contrast-color);

  transition: fill var(--animation-duration) ease,
    background-color var(--animation-duration) ease;
`;

export const LogoText = styled.p`
  font-family: "Font-Spring", sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.11;
  color: var(--black-color);

  transition: color var(--animation-duration) ease;
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-top: 12px;
  padding-bottom: 13px;
  padding-left: 5px;
  padding-right: 5px;

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

  font-weight: 400;
  font-size: 14px;
  line-height: 1.29;
  transition: background-color var(--animation-duration) ease;
  &:hover {
    background-color: var(--brand-hover-color);
  }
`;

export const CartLink = styled(NavLink)`
  padding: 12px;
  border-radius: 30px;
  background-color: var(--brand-color);
  fill: var(--contrast-color);

  transition: background-color var(--animation-duration) ease;
  &:hover {
    background-color: var(--brand-hover-color);
  }
`;

export const IconContainer = styled.svg`
  display: inline-flex;
`;

export const Cart = styled.svg`
  font-size: 9px;
`;
