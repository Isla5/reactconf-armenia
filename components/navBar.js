import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'

export default () =>  (
  <Wrapper>
    <Menu>
    <Link href='#speakers'><Item> Speakers</Item></Link>
    <Link href='#sponsors'><Item>Sponsors</Item></Link>
    <Link href='#schedule'><Item>Schedule</Item></Link>
    <Link href='#donate'><Item>Donate</Item></Link>
    </Menu>
   </Wrapper>
);


const Wrapper = styled.section `
  display: flex;
  align-items: center;
  justify-content: center;
`
const Menu = styled.ul `
  color: #0033a0;
`
const Item = styled.a `
  font-size: 1.3rem;
   text-align: center;
   padding: 1rem;
   text-decoration: none;
   user-select: none;
   cursor: pointer;
   transition: 0.2s ease-in-out;
   &:hover  {
     color: #cfcfcf;
   }
`
