import styled from 'styled-components';

type BodyProps = {
	color?: string,
	children?: any
}
export default({children, color}: BodyProps) => (
	<Wrapper style={{backgroundColor: color}}>
		{children}
	</Wrapper>
);

const Wrapper = styled.section `
 text-align: center;
 `;
