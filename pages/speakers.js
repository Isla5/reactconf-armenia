import React from 'react';
import Page from './';
import Speaker from '../components/speakersCard';
import styled, {injectGlobal} from 'styled-components'

import Head from 'next/head'
export default() => (
	<div>
		<Head>
			<title>ReactNow Conference Armenia | Speakers</title>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
		</Head>
		<Page></Page>
	</div>
)

injectGlobal `
  font-family: 'Lora', serif
`;
