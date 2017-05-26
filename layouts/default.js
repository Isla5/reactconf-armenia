import React from 'react'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import styled, {injectGlobal} from 'styled-components'


type LayoutProps = {
	backgroundColor ?: string,
	children ?: any,
}
export default({children, backgroundColor}: LayoutProps ) => (
	<div backgroundColor={backgroundColor || 'f6f6f6'}>
		<Wrapper>
			<NavBar/>
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
  margin-right: 1rem;
  padding: 10rem;
  margin-top: -10rem;
  background- color: rgba(255,255,255,0.8)
  width: 100%;
`;
