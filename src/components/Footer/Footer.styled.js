import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  padding-top: 40px;
  padding-bottom: 20px;

  background-color: var(--brand-color);
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  width: 100%;
`;

export const FooterLinksList = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: start;

  @media screen and (min-width: 768px) {
    margin-right: 78px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 149px;
  }
`;

export const Logo = styled.svg`
  padding: 6px;
  margin-right: 8px;
  border-radius: 30px;

  background-color: var(--contrast-color);
  fill: var(--brand-color);

  transition:
    fill var(--animation-duration) ease,
    background-color var(--animation-duration) ease;
`;

export const LogoText = styled.p`
  display: inline-block;

  font-family: 'Font-Spring', sans-serif;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.11;
  letter-spacing: -0.02em;

  color: var(--contrast-color);

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
  }
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialLinksList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;

  margin-top: 20px;
`;

export const SocialLinkElem = styled.li`
  display: flex;
  align-items: center;
`;

export const SocialLink = styled.a`
  border: 1px solid var(--social-hover);
  border-radius: 10px;

  transition: background-color var(--animation-duration) ease;
  &:hover {
    background-color: var(--social-hover);
  }
`;

export const SocialIcon = styled.svg`
  padding: 8px;
  fill: var(--contrast-color);
`;

//! FOOTER SLOGAN

export const FooterMessageContainer = styled.div`
  padding-top: 40px;
  @media screen and (min-width: 768px) {
    padding: 0;
    width: 429px;
  }

  @media screen and (min-width: 1440px) {
    width: 410px;
    padding: 0;
  }
`;

export const FooterSlogan = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: var(--contrast-color);
  @media screen and (min-width: 768px) {
    font-size: 40px;
    line-height: 1.1;
  }
`;

export const FooterText = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.29;
  color: rgba(232, 232, 226, 0.7);

  @media screen and (min-width: 768px) {
    margin-top: 20px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

//!FORM

export const Form = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    margin-top: 64px;
    margin-left: 275px;
    width: 336px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: 0;
    margin-left: 148px;
  }
`;

export const FormLabel = styled.label`
  font-size: 14px;
  line-height: 1.29;

  color: var(--contrast-color);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Input = styled.input`
  /* width: 335px; */
  margin-top: 20px;
  padding-left: 18px;
  padding-top: 12px;
  padding-bottom: 12px;

  border-radius: 30px;
  border: 1px solid var(--contrast-color);
  outline: 2px solid var(--brand-color);

  background-color: var(--brand-color);
  transition:
    outline var(--animation-duration) ease,
    border var(--animation-duration) ease;
  &::placeholder {
    color: rgba(232, 232, 226, 0.6);

    font-size: 14px;
    line-height: 1.29;
    @media screen and (min-width: 768px) {
      font-size: 16px;
      line-height: 1.5;
    }
  }
  &:focus {
    border: 1px solid var(--contrast-color);
    outline: 2px solid var(--contrast-color);
  }

  @media screen and (min-width: 768px) {
    /* width: 336px; */
  }
`;

export const Button = styled.button`
  margin-top: 14px;

  border: 0px;
  border-radius: 30px;
  padding-top: 12px;
  padding-bottom: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
  }
`;

export const ButtonText = styled.span`
  font-family: 'Neue-Montreal', sans-serif;
  font-weight: 500;
  line-height: 1.29;
  font-size: 14px;

  color: var(--black-color);

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

//!POLICY

export const PolicyContainer = styled.div`
  margin-top: 80px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-top: 120px;

    width: 100%;
  }
`;

export const PolicyText = styled.p`
  color: var(--contrast-color);
`;

// export const PolicyLinksContainer = styled.div``;

export const PolicyLink = styled.a`
  font-size: 14px;
  line-height: 1.29;
  color: var(--contrast-color);
`;

export const Divider = styled.span`
  color: var(--contrast-color);
`;
