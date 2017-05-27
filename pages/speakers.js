import React from 'react';
import Layout from '../layouts/default';
import Speaker from '../components/speakersCard';
import styled, {injectGlobal, css} from 'styled-components'

const sizes = {
	desktop: 992,
	tablet: 768,
	phone: 376
}

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {})


import Head from 'next/head'
export default() => (
	<div>
		<Head>
			<title>ReactNow Conference Armenia | Speakers</title>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
		</Head>
		<Layout>
			<Wrapper>
				<div>
					<Title> Meet Our Speakers </Title>
				<Speaker
					margin='3rem 0 0 0rem'
					cardWidth='56rem'
					cardHeight='20rem'
					imgurl='https://avatars1.githubusercontent.com/u/22010816?v=3&s=400'>
					Edgar Khanzadian
					<LongDescription>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. In bibendum,
						 nisl at scelerisque bibendum, odio dolor congue enim,
						 lobortis bibendum ligula lectus et lorem.
						  Etiam neque tellus, malesuada vel finibus at, posuere ac turpis.
							Integer nisi tellus, molestie facilisis feugiat
					</LongDescription>
				</Speaker>
				<Speaker
					margin='3rem 0 0 0rem'
					cardWidth='56rem'
					cardHeight='20rem'
					imgurl='https://avatars1.githubusercontent.com/u/3036816?v=3&s=400'>
					Edgar Aroutiounian
					<LongDescription>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. In bibendum,
						 nisl at scelerisque bibendum, odio dolor congue enim,
						 lobortis bibendum ligula lectus et lorem.
							Etiam neque tellus, malesuada vel finibus at, posuere ac turpis.
							Integer nisi tellus, molestie facilisis feugiat					</LongDescription>
				</Speaker>
				<Speaker
					margin='3rem 0 0 0rem'
					cardWidth='56rem'
					cardHeight='20rem'
					imgurl='https://avatars1.githubusercontent.com/u/15631149?v=3&s=400'>
					Narek Ghevandiani
					<LongDescription>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. In bibendum,
						 nisl at scelerisque bibendum, odio dolor congue enim,
						 lobortis bibendum ligula lectus et lorem.
							Etiam neque tellus, malesuada vel finibus at, posuere ac turpis.
							Integer nisi tellus, molestie facilisis feugiat					</LongDescription>
				</Speaker>
				<Speaker
					margin='3rem 0 0 0rem'
					cardWidth='56rem'
					cardHeight='20rem'
					imgurl='https://avatars1.githubusercontent.com/u/22914589?v=3&s=400'>
					BirthDay Boy
					<LongDescription>
						Lorem ipsum dolor sit amet,
						consectetur adipiscing elit. In bibendum,
						 nisl at scelerisque bibendum, odio dolor congue enim,
						 lobortis bibendum ligula lectus et lorem.
							Etiam neque tellus, malesuada vel finibus at, posuere ac turpis.
							Integer nisi tellus, molestie facilisis feugiat					</LongDescription>
				</Speaker>

				<Speaker
					margin='3rem 0 0 0rem'
					cardWidth='56rem'
					cardHeight='20rem'
					imgurl='https://www.sideshowtoy.com/wp-content/uploads/2013/06/901935-product-feature.jpg'>
					RoboCop
					<LongDescription>
						Serve the public trust
					</LongDescription>
				</Speaker>
				<Speaker
					margin='3rem 0 0 0rem'
					cardWidth='56rem'
					cardHeight='20rem'
					imgurl='https://www.sideshowtoy.com/photo.php?sku=902622'>
					Iron Man
					<LongDescription>
						Give me a scotch. I'm starving.
					</LongDescription>
				</Speaker>

			</div>
			</Wrapper>
		</Layout>
	</div>
)

injectGlobal `
  font-family: 'Lora', serif
`;

const Wrapper = styled.section `
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  margin-bottom: 3rem;
	padding-top: 10rem;
	background-color: #f6f6f6;

`


const LongDescription = styled.p `
  color: rgb(19, 22, 23);
  height: auto;
  font-family: sans-serif;
  width: 100%;
  font-weight: lighter;
  font-size: 18px;
  margin-top: 2px;
	text-align: justify;
	text-justify: inter-word;
	${media.desktop`
		font-size: 20px;
		color: rgb(19, 22, 23);
	`}
`



const Title = styled.h1 `
  font-size: 3rem;
  color: #0033a0;
  font-weight: 400;
	padding-top: 2rem;
	display: flex;
	justify-content: center !important;
	align-items: center !important;
	align-content: center;
`;
