import React, {Component} from 'react'
import {Sticky, StickyContainer} from 'react-sticky';

import Header from '../components/header';
import BodyElement from '../components/bodyElement';
import Footer from '../components/footer';
import styled from 'styled-components';
import NavBar from '../components/navBar'

import Head from 'next/head';

export default () =>(
    <div>
      <Head>
        <title>ReactNow Conference Armenia</title>
        <link rel="shortcut icon" href="static/logo.png" />
        </Head>
        <style global jsx> {`
          html, body {
            padding: 0 !important;
            margin: 0 !important;
          }
          `} </style>
        <Header/>
        <StickyContainer>
          <Sticky>
           {
             ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                 return isSticky ?
                 <HeaderWrapper style={style}>
                   <NavBar
                     fontColor='#fff'
                     backgroundColor='rgba(30, 139, 195,0.5)'
                     height='1rem'
                    />
                 </HeaderWrapper>
                 :<div></div>
               }
           }
         </Sticky>
          <BodyElement>
            <Wrapper style={{backgroundColor: "#F2F1EF"}}>
              <Title> Our Speakers </Title>
            </Wrapper>

          </BodyElement>
          <BodyElement>
            <Wrapper style={{backgroundColor: '#89C4F4'}}>
              <Title style={{color: '#F2F1EF'}}> Our Sponsors</Title>
            </Wrapper>
          </BodyElement>
          <Footer/>
        </StickyContainer>
      </div>
  )
const Wrapper = styled.section  `
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50rem;
`
const Title = styled.h1 `
  font-size: 2.5rem;
  color: #0033a0
`
const HeaderWrapper = styled.section `
  height: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  text-align: center;
  width: '100%'
`
