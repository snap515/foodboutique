import {
  FooterLinksList, FooterContainer, LogoLink, Logo, LogoText, SocialLinksList, SocialLinkElem, SocialLink,
  SocialIcon, FooterMessageContainer, FooterSlogan, FooterText, Form, FormLabel, Input,
  Button, ButtonText, PolicyContainer, PolicyText, PolicyLink, Divider
} from "./Footer.styled"
import { ReactComponent as Sprite } from '../../img/symbol-defs.svg'

export const Footer = () => {
  return (
    
    <FooterContainer>
      <Sprite/>
      <div className="container">
      <FooterLinksList>
        <LogoLink to="/">
          <Logo width={16} height={16}>
            <use xlinkHref="#icon-logo-mobile"></use>
          </Logo>
          <LogoText>Food Boutique</LogoText>
        </LogoLink>
        <SocialLinksList>
          <SocialLinkElem>
            <SocialLink href="/foodboutique">
                <SocialIcon width={24} height={24}>
                  <use xlinkHref="#icon-facebook"></use>
                </SocialIcon>
              </SocialLink>
            </SocialLinkElem>
          <SocialLinkElem>
            <SocialLink href="/foodboutique">
                <SocialIcon width={24} height={24}>
                  <use xlinkHref="#icon-instagram"></use>
                </SocialIcon>
              </SocialLink>
            </SocialLinkElem>
          <SocialLinkElem>
            <SocialLink href="/foodboutique">
                <SocialIcon width={24} height={24}>
                  <use xlinkHref="#icon-youtube"></use>
                </SocialIcon>
              </SocialLink>
            </SocialLinkElem>
        </SocialLinksList> 
      </FooterLinksList>
      <FooterMessageContainer>
        <FooterSlogan>Discover the Variety of Flavors and Quality</FooterSlogan>
        <FooterText>An online store where you will find fresh, natural and delicious products for a healthy life and unforgettable gastronomic adventures.</FooterText>
      </FooterMessageContainer>
      <Form action="">
        <FormLabel htmlFor="subscription">Subscribe and learn about new products!</FormLabel>
        <Input type="text" id="subscription" placeholder="Email" />
          <Button type="Submit">
            <ButtonText>Send</ButtonText>
          </Button>
        </Form>
        <PolicyContainer>
          <PolicyText>Food Boutique. All rights reserved.</PolicyText>
          <div>
            <PolicyLink href="/foodboutique">Privacy Policy</PolicyLink>
            <Divider> / </Divider>
            <PolicyLink href="/foodboutique">Terms of Service</PolicyLink>
          </div>

        </PolicyContainer>
        </div>
    </FooterContainer>
    
    
  )
}