import React, { useState } from "react";
import styled from "styled-components";
import { tablet } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
const Wrapper = styled.div`
  width: 50%;
  justify-content: center;
  align-items: center;
  background-color: teal;
  padding: 20px;
  border-radius: 5px;
  ${tablet({
    width: "100%",
  })}
`;
const Title = styled.h1`
  font-size: 65px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
  text-align: center;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 15px;
  ${tablet({
    flexDirection: "column",
  })}
`;
const Input = styled.input`
  padding: 15px;
  width: 45%;
  border-radius: 5px;
  margin: 10px;
  border: none;
  outline: none;
  ${tablet({
    width: "90%",
  })}
`;

const Button = styled.button`
  color: white;
  background-color: tomato;
  border-radius: 5px;
  padding: 15px;
  outline: none;
  border: none;
  font-size: 18px;
  cursor: pointer;
  flex: 1;
  margin: 10px;
`;

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in to continue</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            placeholder="Enter email"
            onChange={handleInput}
            name="email"
            value={email}
            required
          />
          <Input
            type="password"
            placeholder="Enter password"
            onChange={handleInput}
            name="password"
            value={password}
            required
          />
          <Button>Submit</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
