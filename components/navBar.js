import styled from 'styled-components';
import Link from 'next/link';
import Loader from './loader';

type ElementProps = {
	fontColor?: string,
	backgroundColor?: string,
	height?: number
};
export default({fontColor, backgroundColor, height} : ElementProps) => (
	<Wrapper style={{
		backgroundColor: backgroundColor || 'none'
	}}>
		<Loader/>
		<Link href='/'><img style={{
				width: '120px',
				height: '110px',
				cursor: 'pointer'
			}}
			src="static/img/logo.png"/>
		</Link>
		<Title>ReactNow 2017</Title>
		<Menu style={{
			color: fontColor || ' #0033a0',
			padding: height || 'auto'
		}}>
			<Link href='speakers'>
				<Item>Speakers</Item>
			</Link>
			<Link href='/sponsors'>
				<Item>Sponsors</Item>
			</Link>
			<Link href='#schedule'>
				<Item>Schedule</Item>
			</Link>
			<Link href='#donate'>
				<Item>Donate</Item>
			</Link>
		</Menu>
	</Wrapper>
);

const Wrapper = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Menu = styled.ul `
  color: #0033a0 ;
`;
const Item = styled.a `
  font-size: 1.3rem;
   text-align: center;
   padding-left: 1rem;
   padding-right: 1rem;
   text-decoration: none;
   user-select: none;
   cursor: pointer;
   transition: 0.2s ease-in-out;
   &:hover  {
     color: #cfcfcf;
   }
`;

const Title = styled.h1 `
  text-align: center;
  color: #0033a0;
  letter-spacing: 1.2px;
  padding-right: 12rem;
  font-size: 1.3rem;
  font-family: 'Lora', serif;
  text-decoration: none;
`;
