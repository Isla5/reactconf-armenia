import React from 'react'
import Head from 'next/head';
import styled, {injectGlobal} from 'styled-components';
import {normalize, desaturate} from 'polished';
import Layout from '../layouts/default';
import Sponsors from '../components/sponsorsCard';
export default() => (
	<div>
		<Head>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
			<title>ReactNow Conference Armenia | Sponsors</title>
			<link rel="shortcut icon" href="static/logo.png"/>
		</Head>
		<Layout>
				<Wrapper>
					<Sponsors imgurl='https://it-center.am/images/partners/apollobytes.png' />
					<Sponsors imgurl='http://www.nocode.tech/uploads/1/1/9/9/11996464/render-forest.png?233' />
				</Wrapper>
	</Layout>
	</div>
);
const OurSponsorsWrapper = styled.div`

`
const Wrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: flex-start;
	background-color: '#FFF'
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
