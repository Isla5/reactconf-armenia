import styled, {css} from 'styled-components';
import Head from 'next/head';

import NavBar from './navBar';


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
export default() => (
	<Header>
		<Head>
			<link href="https://fonts.googleapis.com/css?family=Lora" rel="stylesheet"/>
		</Head>
		<Wrapper>
			<div>
				<TopNav>
					<NavBar/>
				</TopNav>
				<Text>
					Coming this fall, first React conference in Caucasus, details coming soon ...
				</Text>
			</div>
		</Wrapper>
	</Header>
);

const Wrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
	margin-left: 0;
`;

const Text = styled.p `
  color:#fff;
  text-align: center;
  font-size: 1.5rem;
  padding-top: 12rem;
  font-family: 'Lora', serif;
	${media.desktop`
   font-size: 4rem;
	`}
`;
const Header = styled.header `
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(static/img/bg.jpg);
  padding: 10rem !important;
`;
const TopNav = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -10rem;
`;
