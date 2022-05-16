import React from 'react'
import styled from 'styled-components'
import Cake from '../img/cake.jpg'
import AnimatedShapes from './AnimatedShapes';

const Container = styled.div`
  height: calc( 100vh - 50px);
  padding: 20px;
  display: flex;
`;

const Left = styled.div`
  width: 60%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 70px;  
  width: 60%;
`;

const Desc = styled.p`
  font-size: 20px;
  width: 60%;
  margin-top: 20px;
`;

const Info = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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