import React from 'react'
import { styled } from 'styled-components';
import Navbar from './Navbar';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:space-between;
`;

const Container = styled.div`
  height:100vh;
  scroll-snap-align:center;
  width: 1400px;
  display:flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #EE3E38;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #EE3E38;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;


const Hero = () => {
  return (
   <Section>
      <Navbar />

      <Container>
        <Left>
          <Title>Crafting Innovative Solutions | Your Full-Stack Developer</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What I Do</Subtitle>
          </WhatWeDo>
          <Desc>I Enjoy Creating User-Friendly Web Solutions with a Full-Stack Approach.</Desc>
          {/*<Button>Learn More</Button>*/}
          
        </Left>
        <Right>
          <Img src="./img/fullstack.png"/>
        </Right>
      </Container>
   </Section>
  )
}

export default Hero



