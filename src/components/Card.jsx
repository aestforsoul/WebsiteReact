import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    height: 65vh;
    padding: 20px;
    margin-right: 30px;
    border-radius: 20px;
    position: relative;
    display: inline-block;
    -webkit-box-shadow: 0px 0px 12px -7px crimson; 
    box-shadow: 0px 0px 12px -7px crimson;

    @media only screen and (max-width: 480px) {
    margin-bottom: 20px;
    margin-right: 0;
    padding: 10px;
    height: 25vh;
  }
`;

const Top = styled.div`
    height: 20%;

    @media only screen and (max-width: 480px) {
    height: 10%;
  }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0);
    border-radius: 20px;
    ${Container}:hover &{
        display: block;
        background: rgba(0, 0, 0, .7);
  }
`;

const Image = styled.img`
    float: left;
    border-radius: 5px;
    width: 100%;
    height: 80%;
    object-fit: cover;
`;

const Title = styled.h1`
    font-size: 24px;
    text-align: center;

    @media only screen and (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Text = styled.p`
    font-size: 20px;
    margin-top: 10px;
    text-align: center;

    @media only screen and (max-width: 480px) {
    display: none;
  }
`;

const Button = styled.button`
    padding: 15px 60px;
    border: none;
    border-radius: 5px;
    background-color: crimson;
    color: white;
    letter-spacing: 2px;
    display: none;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 85px);
    cursor: pointer;
    ${Container}:hover &{
        display: block;
    }
`;

const Card = (props) => {
  return (
    <Container>
        <Top>
        <Title>{props.title}</Title>
        <Text>{props.description}</Text>
        </Top>
        <Image src={`../img/${props.img}`}/>
        <Overlay/>
        <Button>ORDER</Button>
    </Container>
  )
}

export default Card