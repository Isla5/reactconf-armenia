import React from 'react'
import Head from 'next/head';
import styled, {injectGlobal} from 'styled-components';
import {normalize, desaturate} from 'polished';
import Layout from '../layouts/default';
import Sponsors from '../components/sponsorsCard';
import BodyElement	from '../components/bodyElement'
export default() => (
	<div>
		<Head>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
			<title>ReactNow Conference Armenia | Sponsors</title>
			<link rel="shortcut icon" href="static/logo.png"/>
		</Head>
		<Layout>
			<OurSponsorsWrapper>
				<Title>Meet Our Sponsors</Title>
				<Row>
					<Sponsors
						sponsorurl='https://www.apollobytes.com/'
						imgurl='https://it-center.am/images/partners/apollobytes.png' />
					<Sponsors
							 sponsorurl='https://facebook.github.io/react'
							 imgurl='http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19764.png' />
						 </Row>
				<Row>
					<Sponsors
						sponsorurl='https://www.renderforest.com/'
						 imgurl='http://www.nocode.tech/uploads/1/1/9/9/11996464/render-forest.png?233' />
						 <Sponsors
							 sponsorurl='https://netflix.com'
							 imgurl='https://s-media-cache-ak0.pinimg.com/originals/99/73/0d/99730d10b40801dc93178989782d52b9.png' />
					 </Row>
				 </OurSponsorsWrapper>

	</Layout>
	</div>
);
const OurSponsorsWrapper = styled.section`
	padding-bottom: 2rem;
	background: #f6f6f6;
	padding-top: 10rem;
`
const Row = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
	background-color: '#FFF';
`;
const Title = styled.h1 `
  font-size: 3rem;
  color: #0033a0;
  text-align: center;
  font-weight: 400;
`;
