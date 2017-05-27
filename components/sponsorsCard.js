import React from 'react';
import styled from 'styled-components';;

type SponsorProps = {
  imgurl?: string,
  sponsorurl?: string,
}
export default ({imgurl, sponsorurl} : SponsorProps) => (

    <Wrapper>
        <Sponsor>
          <a target="_blank" href={sponsorurl} >
          <Image src={imgurl}/>
          </a>

          </Sponsor>
</Wrapper>

);


const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
  align-items: center;

`;
const Sponsor = styled.div`
	align-items: center;
  margin-left: 8rem;
  margin-right: 8rem;

`;
const Image = styled.img`
  max-height: 200px;
	max-width: 200px;
	width: auto%;
	height: auto%;
	display:block;
  margin:auto;
  filter: grayscale(100%);
  transition: filter .2s ease-in;
  &:hover {
    filter: grayscale(0)
  }
`;
