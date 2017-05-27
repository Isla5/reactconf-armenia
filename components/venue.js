import React from 'react';
import styled from 'styled-components'
import Media from './mediaQuery'

export default () => (
  <div style={{margin: '3rem'}}>
    <Title> The Venue </Title>
  <Wrapper>

    <div>

    <div style={{padding: '4rem'}}>
    <img style ={{width: '400px', height: "350px"}}src='http://photos.prnewswire.com/prn/20110629/DA27810' />
  </div>
  </div>
  <section>
    <Text>
   Tumo Creative Center
   </Text>
  <Description>
    Tumo is a free of charge digital media learning center in Yerevan, Armenia...
  </Description>
</section>
  </Wrapper>
<div>
  <Title> Location </Title>
  <iframe
  style={{
  width :"600",
  height:"450",
  frameborder:"0",
   border: "0",
   }}
   src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDe3xgf0WuxYvxuxB1wF-EMFJCYApzZ520&q=Tumo+HalabyanStreet,Yerevan+Armenia&center=40.1960156,44.4790516&zoom=18" allowfullscreen>
</iframe>
</div>
</div>
)


const Wrapper = styled.section `
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem;
  margin-bottom: 0;
  text-align: center;
  ${Media.desktop `
    display: block;
    margin: 0;
  `}
`

const Title = styled.h1 `
  padding: 2rem;
  align-content: center !important;
  font-size: 2.5rem;
  color: #0033a0;
  text-align: center;
  font-weight: 400;
	display: flex;
	justify-content: center;
	align-items: center;
	${Media.desktop`
   font-size: 4rem;
   margin: 0;

	`
};
  `

  const Description = styled.p `
    font-size: 1.5rem;
    margin-left: -20rem;
    width: 20rem;
    line-height: 1.55rem;
    font-weight: 400;
    text-align: left;
    ${Media.desktop `
      text-align: center;
      margin-left: 0;
      width: 100%;

    `}

  `
const Text = styled.p `
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Lora', sans-serif;
  text-align: left;
  margin-left: -20rem;
  ${Media.desktop `
    margin-left: 0;
    text-align: center;
  `}

`
