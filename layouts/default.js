import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import styled, {injectGlobal} from 'styled-components'

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
		width: 100%
  }
`;
const Wrapper = styled.section `
	z-index: 100;
	position: fixed;
	top : 0;
	right: 0;
	left: 0;
  margin-top: 0 !important;
  background-color: rgba(255,255,255,0.8)
  width: 100%;
	border-bottom: solid 2px #efefef;

`;
