import React from 'react';
import styled from 'styled-components';;

type SponsorProps = {
  children?: any,
  imgurl?: string,
}
export default ({imgurl, children} : SponsorProps) => (

    <Wrapper>
        <Sponsor><Image src={imgurl}/></Sponsor>
</Wrapper>

);


const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;


`;
const Sponsor = styled.div`
	align-items: center;
	padding: 10px;
	margin: 30px;
	transition: border 0.2s;
	transition-timing-function: ease-out;

`;
const Image = styled.img`
	max-width: 200px;
	max-height: 200px;
	width: auto;
	height: auto;
	display:block;
  margin:auto;
  filter: grayscale(40%);
`;
