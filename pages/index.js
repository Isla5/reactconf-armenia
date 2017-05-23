import Header from '../components/header';
import BodyElement from '../components/bodyElement';
import Footer from '../components/footer';

import styled from 'styled-components';
import Head from 'next/head';
export default  () => (
  <div>
  <Head>
    <title>ReactNow Conference Armenia</title>
    <link rel="shortcut icon" href="static/logo.png" />
    <style >{`
      html,body {padding:0; margin:0;}
    ` } </style>
  </Head>
  <Header/>
  <BodyElement>
    <Wrapper style={{backgroundColor:"#cecece"}} href='#speakers'>
      <Title> Our Speakers </Title>
    </Wrapper>
  </BodyElement>
  <BodyElement style={{backgroundColor:"#0033a0"}}>
    <Wrapper style={{backgroundColor:"#0033a0"}} href='#sponsors'>
      <Title style={{color: "#cecece"}}> Our Sponsors</Title>
    </Wrapper>
  </BodyElement>
  <Footer/>
  </div>



)

const Wrapper = styled.section  `
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50rem;
`
const Title = styled.h1 `
  text-align: center;
  font-size: 2.5rem;
  color: #0033a0
`
