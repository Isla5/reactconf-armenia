import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {FaFacebook, FaTwitter, FaGithub} from 'react-icons/lib/fa'
import Media  from './mediaQuery'




type CardProps = {
	children?: any,
	imgurl?: string,
	github?: string,
	twitter?: string,
	cardWidth?: number,
	cardHeight?: number,
	margin?: margin
};
export default({children, imgurl, twitter, github, cardWidth, cardHeight, margin} : CardProps) => (
<Wrapper>
	<Card
		style={{width: cardWidth , height: cardHeight , margin: margin}}>
		<CardHeader>
			<img src={imgurl}/>
		</CardHeader>
		<CardBody>
			{children}
		</CardBody>
		<Icon href='https://twitter.com/iteratehckrspac' target="_blank"><FaTwitter size={28} color='#1da1f2' style={{
		padding: '5px'
	}}/>
		</Icon>
		<Icon href='https://github.com/iteratehackerspace' target="_blank"><FaGithub size={28} color='#24292e' style={{
		padding: '5px'
	}}/>
		</Icon>
	</Card>
</Wrapper>
);
const Wrapper = styled.section `
	padding: 1rem;
`
const Card = styled.section `
  display: flex;
  background-color: #fff;
  box-shadow: 0px 0px 20px rgba(0,0,0, 0.1);
  transition: .2s linear;
  margin-top: 2rem;
	width: 28rem;
	height: 10rem;
  &:hover {
    box-shadow: 0px 0px 50px rgba(0,0,0,0.3);
    cursor: pointer;
  }
	${Media.desktop`
		height: 20rem;
		width: 100%;
	`}
`;
const CardHeader = styled.header `
  overflow: hidden;
  background-color: grey;
  margin-right: 1rem;
	width: 100%;
	width: 100%;
  img {
    width: 100%;
    height: 100%;
    display: flex !important;
    padding: 0;
  }
`;

const CardBody = styled.h1 `
  height: auto;
  font-family: sans-serif;
  color: #0033a0;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: normal;
  margin-top: 1rem;
	${Media.desktop`
		font-size: 47px;
	`}
`;

const Icon = styled.a `
  text-decoration: none;
  margin-top: 0.3rem;
  height: 0;
  padding-top: 0.8rem;
	padding-left: 0.5rem;
`;
