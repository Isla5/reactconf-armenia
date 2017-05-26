import React, {Component} from 'react'
import {Sticky, StickyContainer} from 'react-sticky';
import Head from 'next/head';
import styled, {injectGlobal} from 'styled-components';
import {normalize} from 'polished';
import Header from '../components/header';
import BodyElement from '../components/bodyElement';
import Footer from '../components/footer';
import NavBar from '../components/navBar'
import Speaker from '../components/speakersCard'
import Sponsors	from '../components/sponsorsCard'
export default() => (

	<div>
		<Head>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
			<title>ReactNow Conference Armenia</title>
			<link rel="shortcut icon" href="static/logo.png"/>
		</Head>
		<Header/>
		<StickyContainer>
			<Sticky disableCompensation={true}>
				{({
					isSticky,
					wasSticky,
					style,
					distanceFromTop,
					distanceFromBottom,
					calculatedHeight
				}) => {
					return isSticky
						? <HeaderWrapper style={style}>
								<NavBar/>
							</HeaderWrapper>
						: <div></div>
				}
}
			</Sticky>
			<BodyElement>
				<Wrapper style={{
					backgroundColor: "#f6f6f6"
				}}>
					<div>
						<Title>
							Meet Our Speakers
						</Title>
						<SpeakersBox>
							<Speaker imgurl='https://avatars1.githubusercontent.com/u/22010816?v=3&s=400'>
								Edgar Khanzadian
								<ShortDescription>
									Short Description
								</ShortDescription>
							</Speaker>
							<Speaker imgurl='https://avatars1.githubusercontent.com/u/3036816?v=3&s=400'>
								Edgar Aroutiounian
								<ShortDescription>
									Short Description
								</ShortDescription>
							</Speaker>

						</SpeakersBox>
						<SpeakersBox>
							<Speaker imgurl='https://avatars1.githubusercontent.com/u/15631149?v=3&s=400'>
								Narek Ghevandiani
								<ShortDescription>
									Short Description
								</ShortDescription>
							</Speaker>
							<Speaker imgurl='https://avatars1.githubusercontent.com/u/22914589?v=3&s=400'>
								BirthDay Boy
								<ShortDescription>
									Isk arjukn u napastaky tox neren
								</ShortDescription>
							</Speaker>

						</SpeakersBox>
						<SpeakersBox>
							<Speaker imgurl='https://www.sideshowtoy.com/wp-content/uploads/2013/06/901935-product-feature.jpg'>
								RoboCop
								<ShortDescription>
									Serve the public trust
								</ShortDescription>
							</Speaker>
							<Speaker imgurl='https://www.sideshowtoy.com/photo.php?sku=902622'>
								Iron Man
								<ShortDescription>
									Give me a scotch. I'm starving.
								</ShortDescription>
							</Speaker>

						</SpeakersBox>
						<SpeakersBox>

							<Speaker imgurl='https://image.flaticon.com/icons/svg/37/37571.svg '>
								Apply Now, Be The Next Hero
							</Speaker>
						</SpeakersBox>
					</div>
				</Wrapper>
			</BodyElement>
			<BodyElement>
				<Wrapper style={{
					backgroundColor: '#FFF',
				}}>
				<div>
					<Title>
						Our Sponsors
					</Title>
					<Sponsors imgurl='https://it-center.am/images/partners/apollobytes.png' />
					<Sponsors imgurl='http://www.nocode.tech/uploads/1/1/9/9/11996464/render-forest.png?233' />
				</div>
				</Wrapper>
			</BodyElement>
			<Footer/>
		</StickyContainer>
	</div>
)

injectGlobal `
    ${normalize()}
  `

const Wrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Title = styled.h1 `
  font-size: 2.5rem;
  color: #0033a0;
  text-align: center;
  font-weight: 400;
`
const HeaderWrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  margin: 0;
  text-align: center;
  width: '100%';
  background-color: rgba(255,255,255,0.8);

`
const SpeakersBox = styled.section `
  display: flex;
  align-items: flex-start !important;
  justify-content: space-around !important;
  margin-bottom: 3rem;

`
const Text = styled.h1 `
  text-align: center;
  color: #0033a0;
  letter-spacing: 1.2px;
  padding-right: 12rem;
  font-size: 1.3rem;
  font-family: 'Lora', serif;

`
const ShortDescription = styled.p `
  color: rgb(139, 139, 135);
  height: auto;
  font-family: sans-serif;
  width: 100%;
  font-weight: lighter;
  font-size: 18px;
  margin-top: 2px;
`
