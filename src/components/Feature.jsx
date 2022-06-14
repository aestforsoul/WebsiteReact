import React from 'react'
import styled from 'styled-components'
import Cake from '../img/weddingcake.jpg'

const Container = styled.div`
    display: flex;
    padding: 0 20px;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const Right = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Image = styled.img`
    height: 100vh;
    border-top-left-radius: 300px;
    border-bottom-right-radius: 300px;
`;

const Title = styled.span`
    font-size: 70px;
    width: 60%;

    @media only screen and (max-width: 480px) {
    width: 100%;
    font-size: 50px;
  }
`;

const SubTitle = styled.span`
    font-size: 24px;
    font-style: italic;
    margin-top: 30px;
    width: 60%;

    @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Desc = styled.p`
    font-size: 20px;
    margin-top: 30px;
    width: 60%;

    @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 35px;
  }
`;

const Left = styled.div`
      width: 40%;

     @media only screen and (max-width: 480px) {
      display: none;
  }
`;

const Feature = () => {
  return (
    <Container>
      <Left>
        <Image src={Cake}></Image>
      </Left>
      <Right>
        <Title><b>Special</b> orders -<br /> <b>special</b> design</Title>
        <SubTitle>We are open to communication and creation your dream design.</SubTitle>
        <Desc>Our team includes <b>10</b> talantive decorators, <b>15</b> confectioners and <b>3</b> locations. Also we have a manager, with whom you can speak on phone or schedule a meeting to provide more details about your order. We have been working for 10 years, so nothing is impossible for us.</Desc>
        <Desc><b>Weddings,  birthdays,  corporate parties</b> - we are happy to be a part of your events.</Desc>
      </Right>
    </Container>
  )
}

export default Feature