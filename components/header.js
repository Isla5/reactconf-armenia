import React from 'react';
import styled, { css } from 'styled-components';
import Head from 'next/head'

import NavBar from './navBar'


export default () => (
  <Header>
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
    </Head>
    <Wrapper>
    <div>
      <Wrapper>
        <TopNav>
        <img style={{width: '120px', height: '110px', marginLeft: '-1rem  ' }} src="static/logo.png"/>
        <Title>
          ReactNow 2017
        </Title>
        <NavBar/>
      </TopNav>
      </Wrapper>
      <Text>
        Coming this fall, first React conference in Caucasus, details coming soon ...
      </Text>

 </div>
    </Wrapper>
  </Header>
);


const Wrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;

`
const Title = styled.h1 `
  text-align: center;
  color: #0033a0;
  letter-spacing: 1.2px;
  padding-right: 12rem;
  font-size: 1.3rem;
  font-family: 'Lora', serif;

  `
const Text = styled.p `
  color:#fff;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 13rem;
  font-family: 'Lora', serif;
`
const Header  = styled.header `
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(static/bg.jpg);
  padding: 10rem;
`
const TopNav = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -7rem;

`
