import React, {Component} from 'react'
import {Sticky, StickyContainer} from 'react-sticky';

import Header from '../components/header';
import BodyElement from '../components/bodyElement';
import Footer from '../components/footer';
import styled, {injectGlobal} from 'styled-components';
import NavBar from '../components/navBar'
import Speaker from '../components/speakers'

import Head from 'next/head';

export default () =>(

    <div>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
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
          <Sticky
            disableCompensation={true}>
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
              <div>
              <Title> Meet Our Speakers </Title>
              <SpeakersBox>
              <Speaker
                imgurl='https://avatars1.githubusercontent.com/u/22010816?v=3&s=400'>
                Edgar Khanzadian
              </Speaker>
              <Speaker
                imgurl='https://avatars1.githubusercontent.com/u/3036816?v=3&s=400'>
                Edgar Aroutiounian
              </Speaker>

            </SpeakersBox>
            <SpeakersBox>
            <Speaker
              imgurl='https://avatars1.githubusercontent.com/u/22010816?v=3&s=400'>
              Edgar Khanzadian
            </Speaker>
            <Speaker
              imgurl='https://avatars1.githubusercontent.com/u/3036816?v=3&s=400'>
              Edgar Aroutiounian
            </Speaker>

          </SpeakersBox>
          <SpeakersBox>
          <Speaker
            imgurl='https://avatars1.githubusercontent.com/u/22010816?v=3&s=400'>
            Edgar Khanzadian
          </Speaker>
          <Speaker
            imgurl='https://avatars1.githubusercontent.com/u/3036816?v=3&s=400'>
            Edgar Aroutiounian
          </Speaker>

        </SpeakersBox>
            </div>
            </Wrapper>
          </BodyElement>
          <BodyElement>
            <Wrapper style={{backgroundColor: '#89C4F4', height: '300px'}}>
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
`
const Title = styled.h1 `
  font-size: 2.5rem;
  color: #0033a0;
  text-align: center;
`
const HeaderWrapper = styled.section `
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  text-align: center;
  width: '100%';

`
const SpeakersBox = styled.section `
  display: flex;
  align-items: flex-start !important;
  justify-content: space-around !important;
  margin-bottom: 3rem;

`
