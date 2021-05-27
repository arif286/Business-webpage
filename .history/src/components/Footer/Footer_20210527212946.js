import {
    faFacebookF,
    faInstagram,
    faLinkedinIn,
    faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import FooterCol from "./FooterCol";

const Footer = () => {
  const ourAddress = [
    {
      name: "H#000 (0th Floor), Road #00,New DOHS, Mohakhali, Dhaka, Bangladesh  ",
    },
  ];
  const Business = [
    {
      name: "Get advice & evaluations",
      link: "//google.com/map",
    },
    {
      name: "Get advice on future shifts",
      link: "//google.com/map",
    },
    {
      name: "Get advice on technology",
      link: "//google.com/map",
    },
    {
      name: "Assess cost of new investments",
      link: "//google.com/map",
    },
    {
      name: "Join the CIO/CISO success council",
      link: "//google.com/map",
    },
    {
      name: "Other..",
      link: "//google.com/map",
    },
  ];
  const Service = [
    { name: "Give a brief", link: "/important/link" },
    { name: "Connect with analysts", link: "/rentals" },
    { name: "Engage analyst-influencers", link: "/sales" },
    { name: "Sponsor an event", link: "/contact" },
    { name: "Join the CMO success council", link: "/blog" },
    { name: "Other..", link: "/blog" },
  ];
  const Analysts = [
    { name: "Build your brand", link: "/about" },
    { name: "Contribute insights", link: "/project" },
    { name: "Collaborate on research", link: "/team" },
    { name: "Join the community", link: "/terms" },
    { name: "Get opportunities", link: "/list" },
    { name: "Other..", link: "/list" },
  ];
  return (
    <footer className="footer-area clear-both">
      <Container className="">
        <div className="row py-5">
          <div className="col-md-3 col-sm-6 footer-single-widget">
            <h5>THE ANALYST SYNDICATE</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="social-media list-inline">
              <li className="list-inline-item">
                <a href="//facebook.com">
                  <FontAwesomeIcon
                    className="icon active-icon"
                    icon={faFacebookF}
                  />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//google.com">
                  <FontAwesomeIcon className="icon" icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//instagram.com">
                  <FontAwesomeIcon className="icon" icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="//youtube.com">
                  <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
                </a>
              </li>
            </ul>
          </div>
          <FooterCol
            key={1}
            menuItems={Business}
            menuTitle="FOR BUSINESS LEADERS"
          />
          <FooterCol
            key={2}
            menuTitle="FOR SERVICE PROVIDERS"
            menuItems={Service}
          />
          <FooterCol key={3} menuTitle="FOR ANALYSTS" menuItems={Analysts} />
        </div>
        <Row>
          <Col md={12} lg={5}>
            <ul className="copy-list">
              <li>
                <a href="http">Privacy Policy</a>
              </li>
              <li>
                <a href="http">Terms & Conditions</a>
              </li>
              <li>
                <a href="http">Disclaimers</a>
              </li>
            </ul>
          </Col>
          <Col className="copy-text" md={12} lg={7}>
            <p>Copyright @2021. The Analyst Syndicate. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
