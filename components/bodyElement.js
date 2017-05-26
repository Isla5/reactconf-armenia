import styled from 'styled-components';

export default({children}) => (
	<Wrapper>
		{children}
	</Wrapper>
);

const Wrapper = styled.section `
 text-align: center;
 `;