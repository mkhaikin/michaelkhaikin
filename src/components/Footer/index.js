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
    <FooterContainer className="FooterContainer">
      <FooterWrap className="FooterWrap">
        <FooterLinksContainer>
          <FooterLinksWrapper className="FooterLinksWrapper">
            {/* <FooterLinkTitle>Menu</FooterLinkTitle> */}
            <FooterLinksItems>
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/resume">Resume</FooterLink>
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
