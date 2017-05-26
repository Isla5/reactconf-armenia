import React from 'react';
import Layout from '../layouts/default';
import Speaker from '../components/speakersCard';
import styled, {injectGlobal} from 'styled-components'

import Sponsors	from '../components/speakersCard';

import Head from 'next/head'
export default() => (
	<div>
		<Head>
			<title>ReactNow Conference Armenia | Speakers</title>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
		</Head>
		<Layout></Layout>
	</div>
)

injectGlobal `
  font-family: 'Lora', serif
`;
