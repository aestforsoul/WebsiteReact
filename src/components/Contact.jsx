import React from 'react'
import styled from 'styled-components'
import Map from '../img/map.png'
import Phone from '../img/phone.png'
import Send from '../img/send.png'

const Container = styled.div`
    height: 90%;
    background: url('https://sms.luxioholdings.com/wp-content/uploads/2018/09/pattern-colorsp.png');
`;

const Wrapper = styled.div`
    height: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const FormContainer = styled.div`
    width: 50%;

    @media only screen and (max-width: 480px) {
    width: 100%;
  }
`;

const Title = styled.h1`
    margin: 70px;
    margin-top: 0;

    @media only screen and (max-width: 480px) {
    margin: 0 0 20px 70px;
    font-size: 32px;
  }
`;

const Form = styled.form`
    height: 250px;
    display: flex;
    margin-left: 70px;

    @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const LeftForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 20px;

    @media only screen and (max-width: 480px) {
    height: 50%;
    margin-right: 0;
  }
`;

const RightForm = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media only screen and (max-width: 480px) {
    height: 50%;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  color: white;
  background-color: #4451d8;
  padding: 15px;
  margin-top: 20px;
  font-size: 20px;
  letter-spacing: 2px;
  cursor: pointer;

  @media only screen and (max-width: 480px) {
    font-size: 14px;
    padding: 10px;
    width: 210px;
  }
`;

const Input = styled.input`
    width: 200px;
    padding: 20px;

    @media only screen and (max-width: 480px) {
    padding: 5px;
  }
`;

const TextArea = styled.textarea`
    width: 200px;
    height: 60%;
    padding:20px;

    @media only screen and (max-width: 480px) {
    padding: 5px;
    margin-top: 20px;
  }
`;

const AddressContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media only screen and (max-width: 480px) {
    width: 100%;
    margin-top: 40px;
  }
`;

const AddressItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    @media only screen and (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

const Icon = styled.img`
    width: 20px;
    margin-right: 20px;
`;

const Text = styled.span`
    font-size: 20px;
    margin-right: 15px;

    @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const Contact = () => {
  return (
    <Container>
        <Wrapper>
            <FormContainer>
            <Title>Questions? <br/> Let's get in touch</Title>
                <Form>
                <LeftForm>
                    <Input placeholder='Your Name'/>
                    <Input placeholder='Your Phone'/>
                    <Input placeholder='Category of sweet'/>
                </LeftForm>
                <RightForm>
                    <TextArea placeholder='What do you want?'/>
                    <Button>Send</Button>
                </RightForm>
                </Form>
            </FormContainer>
            <AddressContainer>
                <AddressItem>
                    <Icon src={Map}/><Text>25/5 Kotliareevskoho street, Kyiv, Ukraine</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone}/><Text>+(380)93 884 84 84</Text><Text>+(380)93 884 84 84</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send}/><Text>bakeryli@gmail.com</Text><Text>+(380)93 884 84 84</Text>
                </AddressItem>
            </AddressContainer>
        </Wrapper>
    </Container>
  )
}

export default Contact