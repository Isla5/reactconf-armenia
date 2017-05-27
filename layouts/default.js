import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
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

type LayoutProps = {
	children ?: any,
	padding?: number,
}
export default({children, padding}: LayoutProps ) => (
	<div>
		<Wrapper
			style={{paddingLeft: padding || '0'}}>
			<NavBar

			backgroundColor='rgba(254,254,254, 0.8)'/>
		</Wrapper>
		{children}
		<Footer/>
	</div>
);

injectGlobal `
  html, body {
    padding: 0 !important;
    margin: 0 !important;
  }
`;
const Wrapper = styled.section `
	z-index: 1;
	position: fixed;
	top : 0;
	right: 0;
	left: 0;
  margin-top: 0 !important;
  width: 100%;
	border-bottom: solid 2px #efefef;
`;
