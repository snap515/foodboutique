import {
  HeroContainer,
  HeroImage,
  HeroSlogan,
  HeroText,
  SloganColoured,
  OrganicIcon,
} from './Hero.styled';

import {
  heroDesktop2x,
  heroDesktop,
  heroMobile2x,
  heroMobile,
  heroTablet,
  heroTablet2x,
} from '../../img/images';

export const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <HeroSlogan>
          Welcome to the <SloganColoured>Food</SloganColoured> Boutique!{' '}
        </HeroSlogan>
        <HeroText>
          With Food Boutique, you're not just subscribing to food, you're
          signing up for a fresher, fitter, and happier you.
        </HeroText>
        <div>
          {/* <HeroImage
            srcSet={`
              ${heroMobile} 335w,
              ${heroMobile2x} 670w, 
              ${heroTablet} 704w,
              ${heroTablet2x} 1408w,
              ${heroDesktop} 1240w,
              ${heroDesktop2x} 2480w
              `}
            sizes="
              (max-width: 767px) 335px,
              (max-width: 1439px) 704px,
              1240px"
            src={heroDesktop}
            alt="box with vegetables"
          /> */}
          <HeroImage>
            <source
              media="(max-width: 767px)"
              srcSet={`${heroMobile} 1x, ${heroMobile2x} 2x`}
            />
            <source
              media="(max-width: 1439px)"
              srcSet={`${heroTablet} 1x, ${heroTablet2x} 2x`}
            />
            <source srcSet={`${heroDesktop} 1x, ${heroDesktop2x} 2x`} />
            <img src={heroDesktop} alt="box with vegetables" />
          </HeroImage>
          <OrganicIcon width={100} height={100}>
            <use xlinkHref="#icon-organic-food"></use>
          </OrganicIcon>
        </div>
      </div>
    </HeroContainer>
  );
};
// srcSet={`
//   ${heroMobile} 335w,
//   ${heroMobile2x} 670w,
//   ${heroTablet} 704w,
//   ${heroTablet2x} 1408w,
//   ${heroDesktop} 1240w,
//   ${heroDesktop2x} 2480w
//   `}

// <HeroImage>
//   <source
//     media="(max-width: 767px)"
//     srcSet={`${heroMobile} 1x, ${heroMobile2x} 2x`}
//   />
//   <source
//     media="(max-width: 1439px)"
//     srcSet={`${heroTablet} 1x, ${heroTablet2x} 2x`}
//   />
//   <source srcSet={`${heroDesktop} 1x, ${heroDesktop2x} 2x`} />
//   <img src={heroDesktop} alt="box with vegetables" />
// </HeroImage>;
