import React, {Component} from 'react'
import {Sticky, StickyContainer} from 'react-sticky';
import Head from 'next/head';
import styled, {injectGlobal} from 'styled-components';
import {normalize, desaturate} from 'polished';
import Header from '../components/header';
import BodyElement from '../components/bodyElement';
import Footer from '../components/footer';
import NavBar from '../components/navBar'
import Speaker from '../components/speakersCard'

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
					backgroundColor: '#FFF'
				}}>
					<div>
						<Title>
							Our Sponsors
						</Title>
						<OurSponsorsWrapper>
		          <Pair>
								<Sponsor><Image src='static/img/google.png'/></Sponsor>
								<Sponsor><Image src='static/img/facebook.png'/></Sponsor>
							</Pair>
							<Pair>
								<Sponsor><Image src='static/img/react2.png'/></Sponsor>
								<Sponsor><Image src='static/img/google.png'/></Sponsor>
							</Pair>
						</OurSponsorsWrapper>
					</div>
				</Wrapper>
			</BodyElement>
			<Footer/>
		</StickyContainer>
	</div>
);
const OurSponsorsWrapper = styled.div`
	padding: 50px
`
const Pair = styled.div`
	display: flex;
	justify-content: space-between;
`;
const Sponsor = styled.div`
	border: 10px solid ${desaturate(0.7, '#97a3fc')};
	margin: 30px;
	padding: 10px;
	transition: border 0.2s;
	transition-timing-function: ease-out;
	&:hover  {
		border: 10px solid #97a3fc;
	}
`;
const Image = styled.img`
	max-width: 200px;
	max-height: 200px;
	width: auto;
	height: auto;
	display:block;
  margin:auto;
`;
const Wrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
const Title = styled.h1 `
  font-size: 2.5rem;
  color: #0033a0;
  text-align: center;
  font-weight: 400;
`;
injectGlobal `
    ${normalize()}
`;
