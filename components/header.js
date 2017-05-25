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
        <TopNav>
        <NavBar/>
      </TopNav>
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
  padding: 10rem !important;
`
const TopNav = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10rem;

`
