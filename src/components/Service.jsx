import React from 'react'
import styled from 'styled-components'
import Card from './Card';
import data from '../data';

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.p`
    font-size: 54px;  
    margin-top: 60px;

    @media only screen and (max-width: 480px) {
    margin-top: 0;
    font-size: 20px;
  }
`;

const CardContainer = styled.div`
  display: flex;  
  justify-content: space-between;
  margin-top: 30px;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
    margin-top: 20px;
  }
`;

const Service = () => {
    const cards = data.map(item => {
        return (
        <Card
        img={item.img}
        title={item.title}
        description={item.description}
        />
        )
    })
  return (
    <Container>
        <MainTitle>What can we offer?</MainTitle>
        <CardContainer>
            {cards}
        </CardContainer>
    </Container>
  )
}

export default Service