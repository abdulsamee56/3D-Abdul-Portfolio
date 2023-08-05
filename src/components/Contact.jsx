import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  /* scroll-snap-align: center; */
  
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #EE3E38;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;
  position: relative;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
  object-fit: contain;
  animation: animate 2s infinite ease alternate;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position:absolute;
  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
    display: none;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;
const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      "service_pooffrj",
      "template_vc2iyvc",
      ref.current,
      "Y3bJEY2V6Akcv_GL0"
    )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. I'll get back to you soon :)"}
          </Form>
        </Left>
        <Right>
        {/* <Map /> */}
        <ImageContainer>
            <Img src="./img/email.png" />
          </ImageContainer>
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;