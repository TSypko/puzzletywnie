import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import logo from "../assets/puzzleIcon.png";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Image src={logo} alt="logo" />
          <Title>{state.frontity.title}</Title>
          <SubTitle>{state.frontity.description}</SubTitle>
        </StyledLink>
        <MobileMenu />
        <Nav />
      </Container>
      
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  width: 1024px;
  max-width: 100%;
  padding: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 380px) {
        font-size: 20px;
    }
`;

const SubTitle = styled.h2`
  margin: 0 0 0 48px;
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  display: none;

  @media (min-width: 768px) {
      display: block;
    }
`;

const Image = styled.img`
  width: 48px;
  margin: 6px 12px;

  @media (max-width: 380px) {
    width: 36px;
    margin: 4px 8px;

  }
`;

