import { ReactComponent as Sprite } from '../../img/symbol-defs.svg';
import {
  HeaderContainer,
  LogoText,
  HomeLink,
  CartLink,
  LogoLink,
  Logo,
  Nav,
  CartIcon,
  LinkWrapper,
  CartText,
} from './Header.styled';

export const Header = () => {
  const isMobile = window.innerWidth <= 767; //!use effect ?
  console.log(isMobile);
  return (
    <HeaderContainer>
      <Sprite />
      <div className="container">
        <LinkWrapper>
          <LogoLink to="/">
            {isMobile ? (
              <Logo width={16} height={16}>
                <use xlinkHref="#icon-logo-mobile" />
              </Logo>
            ) : (
              <Logo width={20} height={20}>
                <use xlinkHref="#icon-logo-desktop" />
              </Logo>
            )}
            <LogoText>Food Boutique</LogoText>
          </LogoLink>
          <Nav>
            <HomeLink to="/">Home</HomeLink>
            <CartLink to="/cart">
              {isMobile ? (
                <>
                  <CartIcon width={14} height={14}>
                    <use xlinkHref="#icon-cart" />
                  </CartIcon>
                  <CartText>Cart (0)</CartText>
                </>
              ) : (
                <>
                  <CartIcon width={18} height={18}>
                    <use xlinkHref="#icon-cart" />
                  </CartIcon>
                  <CartText>Cart (0)</CartText>
                </>
              )}
            </CartLink>
          </Nav>
        </LinkWrapper>
      </div>
    </HeaderContainer>
  );
};
