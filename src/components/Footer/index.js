import React from "react";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIconLink,
  SocialIcons,
} from "./footerElems";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>Home </FooterLinkTitle>
              <FooterLink to="/#about">About</FooterLink>
              <FooterLink to="/#projects">Projects</FooterLink>
              <FooterLink to="/#contact">Contact</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle>Projects </FooterLinkTitle>
              <FooterLink to="/projects/about">React</FooterLink>
              <FooterLink to="/projects">Full-Stack</FooterLink>
              <FooterLink to="/contact">JS</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Michael Khaikin</SocialLogo>
            <WebsiteRights>
              MichaelKhaikin.com © {new Date().getFullYear()} All rights
              reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href="//www.linkedin.com/mkhaikin"
                target="_blank"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebookSquare />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
