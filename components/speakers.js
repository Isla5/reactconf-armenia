import React from 'react';
import styled from 'styled-components';


type CardProps = {
  children?: any,
  imgurl?: string,
  title?: string,
  github?: string,
  twitter?: string
}
export default  ({children, imgurl, title, description } : CardProps)  => (
    <Card>
      <CardHeader>
        <img src={imgurl}/>
      </CardHeader>
       <CardBody>{children}</CardBody>
    </Card>

)


const Card = styled.section `
  display: flex;
  height: 8rem;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0,0,0, 0.1);
  transition: .2s linear;
  margin-right: 5rem;
  margin-left: 5rem;
  &:hover {
    box-shadow: 0px 0px 50px rgba(0,0,0,0.3);
}
`
const CardHeader = styled.header `
  overflow: hidden;
  background-color: grey;
  transition: height .2s;
  margin-right: 1rem;
  img {
    width: 180px;
    height: 180px;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-block !important;
    padding: 0;
    vertical-align: top;

  }
`

const CardBody = styled.h1 `
  height: auto;
  font-family: sans-serif;
  color: #0033a0;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: bold;

`
