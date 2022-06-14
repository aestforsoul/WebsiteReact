import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-scroll'

const Container = styled.div`
  height: 50px;
`;

const Wrapper = styled.div`
  padding: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Left = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  text-decoration: underline crimson;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin-right: 30px;
  font-size: 20px;
  font-weight: bold;
  color: grey;
  cursor: pointer;
`;

const Button = styled.button`
  border: 2px solid white;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 10px 15px;
  background-color: crimson;
  border-radius: 5px;
  color: white;
  cursor: pointer;
`;

const NavBar = () => {
  return (
    <Container>
        <Wrapper>
          <Left><Logo>With love, cake</Logo>
          <Menu>
            <MenuItem><Link to="home" spy={true} smooth={true} duration={500}>Home</Link></MenuItem>
            <MenuItem><Link to="feature" spy={true} smooth={true} duration={500}>Features</Link></MenuItem>
            <MenuItem><Link to="service" spy={true} smooth={true} duration={500}>Services</Link></MenuItem>
            <MenuItem><Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link></MenuItem>
          </Menu>
          </Left>
          <Button>ORDER NOW</Button>
        </Wrapper>
    </Container>
  )
}

export default NavBar