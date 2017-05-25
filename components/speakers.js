import React from 'react';
import styled from 'styled-components';
import {FaFacebook, FaTwitter, FaGithub} from 'react-icons/lib/fa'


type CardProps = {
  children?: any,
  imgurl?: string,
  github?: string,
  twitter?: string,
}
export default  ({children, imgurl, twitter, github } : CardProps)  => (
    <Card>
      <CardHeader>
        <img src={imgurl}/>
      </CardHeader>
       <CardBody>
         {children}
       </CardBody>
       <Icon href='https://twitter.com/iteratehckrspac' target="_blank"><FaTwitter  size={28} color='#1da1f2' style={{padding: '5px'}}/> </Icon>
       <Icon href='https://github.com/iteratehackerspace' target="_blank"><FaGithub size={28} color='#24292e' style={{padding: '5px'}}/> </Icon>
    </Card>

)


const Card = styled.section `
  display: flex;
  height: 8rem;
  width: 22rem;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0,0,0, 0.1);
  transition: .2s linear;
  margin-right: 4rem;
  margin-left: 4rem;
  &:hover {
    box-shadow: 0px 0px 50px rgba(0,0,0,0.3);
    cursor: pointer;
}
`
const CardHeader = styled.header `
  overflow: hidden;
  background-color: grey;
  transition: height .2s;
  margin-right: 1rem;
  width: 18rem;
  img {
    width: 180px;
    height: 180px;
    display: flex !important;
    padding: 0;

  }
`

const CardBody = styled.p `
  height: auto;
  font-family: sans-serif;
  color: #0033a0;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: normal;
  margin-top: 1rem;
`

const Icon = styled.a `
  text-decoration: none;
  margin-top: 0.3rem;
  height: 0;
`
