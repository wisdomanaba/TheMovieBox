import React from "react";
import { Link } from "@reach/router";
import { FaFacebookSquare, FaPinterestSquare, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
import { Container, Flexbox, Li, Copyright, Title, SocialIcon } from "./styles";

export default function Footer({ footerLinks, footerIcons }) {
  return    <Container>
                  <div style={{ paddingBottom: 10, paddingTop: 10 }}>
                        <Flexbox>
                              <div style={{ flexGrow: 1 }}>
                                    <Title>THEMOVIEBOX</Title>
                              </div>
                              <div style={{ flexGrow: 0.3, margin: "auto" }} className="footer-links">
                                    <ul style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                          {footerLinks.map((link, i) => (
                                                <Li key={i}><Link style={{ textDecoration: "none", color: '#c7c6c6' }} to={link.path}>{link.name}</Link></Li>
                                          ))}
                                    </ul>
                              </div>
                        </Flexbox>
                  </div>
                  <hr style={{ borderColor: '#f1f0f0', opacity: 0.1 }} />
                  <Copyright>
                        <Flexbox>
                              <div style={{ flexGrow: 1 }}>
                                    <p style={{ fontSize: 12, color: '#c7c6c6' }}>Designed by Wisdom Anaba. All rights reserved</p>
                              </div>
                              <div style={{ flexGrow: 0.1, display: "flex", justifyContent: "space-between", alignItems: "center",  margin: "auto" }} className="footer-social-links">
                                    {footerIcons.map((icon, i) => (
                                          <SocialIcon key={i}><Link to={icon.path} style={{ textDecoration: 'none', color: '#c7c6c6' }}>{icon.name}</Link></SocialIcon>
                                    ))}
                              </div>
                        </Flexbox>
                  </Copyright>
            </Container>;
}

Footer.defaultProps = {
      footerLinks: [{
            name: "About",
            path: "/"
      },
      {
            name: "Movies",
            path: "/"
      },
      {
            name: "Rating",
            path: "/"
      },
      {
            name: "Contact",
            path: "/"
      }],
      footerIcons: [{
            name: <FaFacebookSquare />,
            path: "/"
      },
      {
            name: <FaPinterestSquare />,
            path: "/"
      },
      {
            name: <FaTwitterSquare />,
            path: "/"
      },
      {
            name: <FaLinkedin />,
            path: "/"
      }]
}
