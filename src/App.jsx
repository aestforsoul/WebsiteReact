import styled from "styled-components";
import Contact from "./components/Contact";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Service from "./components/Service";

const Container = styled.div`
    height: 100vh;
    overflow: hidden;
`

const App = () => {
  return (
    <>
  <Container id='home'>
    <NavBar />
    <Intro />
  </Container>
  <Container id='feature'>
    <Feature />
  </Container>
  <Container id='service'>
    <Service/>
  </Container>
  <Container id='contact'>
    <Contact/>
    <Footer/>
  </Container>
  </>
  );
};

export default App;