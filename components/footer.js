import {FaFacebook, FaTwitter, FaGithub} from 'react-icons/lib/fa';
import styled from 'styled-components';

export default() => (
	<Wrapper>
		<Text>
			ReactNow Armenia 2017<br/>
			By IterateHackerspace |
			<Icon style={{
				color: ' #0033a0'
			}} href='http://iteratehackerspace.com/' target="_blank">
				iteratehackerspace.com
			</Icon>
			<br/>
			<Icon href='https://www.facebook.com/groups/410797219090898/?fref=ts' target="_blank">
				<FaFacebook size={30} color='#3b5998' style={{
					padding: '10px'
				}}/>
			</Icon>
			<Icon href='https://twitter.com/iteratehckrspac' target="_blank">
				<FaTwitter size={33} color='#1da1f2' style={{
					padding: '10px'
				}}/>
			</Icon>
			<Icon href='https://github.com/iteratehackerspace' target="_blank">
				<FaGithub size={33} color='#24292e' style={{
					padding: '10px'
				}}/>
			</Icon>
		</Text>
	</Wrapper>
);

const Wrapper = styled.section `
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  rgb(17, 19, 19);
  text-align: center;
  line-height: 1.8;
  margin-top: 0rem !important;
`;
const Text = styled.p `
  color: #ececec;
  font-size: 1.2rem;
  letter-spacing: 1.2px;
`;
const Icon = styled.a `
  text-decoration: none;
`;
