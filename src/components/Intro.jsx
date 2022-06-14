import React from 'react'
import styled from 'styled-components'
import Cake from '../img/cake.jpg'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  height: calc( 100vh - 50px);
  padding: 20px;
  display: flex;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  width: 60%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.h1`
  font-size: 70px;  
  width: 60%;

  @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;

  @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 480px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #4451d8;
  padding: 15px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Phone = styled.span`
  color: crimson;
  font-weight: bold;
`;

const ContactText = styled.span`
  color: grey;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%; 

  @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Image = styled.img`
  width: 100%;
  border-top-left-radius: 300px;
  border-top-right-radius: 300px;
`;

const Intro = () => {
  return (
    <Container>
        <Left>
            <Title>Explore the world of sweets</Title>
            <Desc>We provide different types of cakes, desserts, cupcakes, muffins and other sweets. Order in advance to be sure that sweets will be on time in your special day.</Desc>
            <Info>
                <Button>VIEW CATALOG</Button>
                <Contact>
                    <Phone>093 880 88 88</Phone>
                    <ContactText>For any questions</ContactText>
                </Contact>
            </Info>
        </Left>
        <Right>
            <Image src={Cake}></Image>
        </Right>
        <AnimatedShapes/>
    </Container>
  )
}

export default Intro