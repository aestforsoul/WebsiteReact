import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 10%;
    color: lightgray;
    background-color: #111;
`;

const Wrapper = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
`;

const List = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
`;

const ListItem = styled.div`
    margin-right: 40px;
`;

const Copyright = styled.div`
    height: 10%;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>Lishchynska (C)</Copyright>
      </Wrapper>
    </Container>
  )
}

export default Footer