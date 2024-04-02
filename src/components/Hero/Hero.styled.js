import styled from 'styled-components';

export const HeroContainer = styled.div`
  padding-top: 72px;
  @media screen and (min-width: 768px) {
    padding-top: 116px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 149px;
  }
`;

export const HeroSlogan = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.09;
  letter-spacing: -0.02em;

  color: black;

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SloganColoured = styled.span`
  font-weight: 500;
  font-size: 44px;
  line-height: 1.09;
  letter-spacing: -0.02em;

  color: var(--brand-color);

  @media screen and (min-width: 768px) {
    font-size: 80px;
    line-height: 1;
  }
`;

export const HeroText = styled.p`
  display: block;
  margin: 0 auto;
  max-width: 292px;
  margin-top: 16px;

  color: var(--black-transparent);

  text-align: center;
  font-size: 14px;
  line-height: 1.29;

  @media screen and (min-width: 768px) {
    max-width: 492px;
    margin-top: 20px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 40px;
  }
`;
export const OrganicIcon = styled.svg`
  position: absolute;
  right: 8px;
  top: -7px;

  @media screen and (min-width: 768px) {
    right: 10px;
    top: -30px;
  }
  @media screen and (min-width: 1440px) {
    right: 20px;
    top: -50px;
  }
`;
