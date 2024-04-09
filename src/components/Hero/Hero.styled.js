import styled from 'styled-components';
import { media } from 'constants/constants';

export const HeroContainer = styled.div`
  padding-top: 72px;
  @media screen and (min-width: ${media.tablet}) {
    padding-top: 116px;
  }
  @media screen and (min-width: ${media.desktop}) {
    padding-top: 77px;
  }
`;

export const HeroSlogan = styled.h1`
  text-align: center;
  font-weight: 500;
  font-size: 44px;
  line-height: 1.09;
  letter-spacing: -0.02em;

  color: black;

  @media screen and (min-width: ${media.tablet}) {
    font-size: 80px;
    line-height: 1;
  }
  @media screen and (min-width: ${media.desktop}) {
  }
`;

export const SloganColoured = styled.span`
  font-weight: 500;
  font-size: 44px;
  line-height: 1.09;
  letter-spacing: -0.02em;

  color: var(--brand-color);

  @media screen and (min-width: ${media.tablet}) {
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

  @media screen and (min-width: ${media.tablet}) {
    max-width: 492px;
    margin-top: 20px;

    font-size: 18px;
    line-height: 1.33;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;

  margin-top: 32px;
  @media screen and (min-width: ${media.tablet}) {
    margin-top: 40px;
  }
`;
export const OrganicIcon = styled.svg`
  position: absolute;
  right: 8px;
  top: -7px;

  @media screen and (min-width: ${media.tablet}) {
    right: 10px;
    top: -30px;
  }
  @media screen and (min-width: ${media.desktop}) {
    right: 20px;
    top: -50px;
  }
`;
