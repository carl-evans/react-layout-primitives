import styled, { css } from 'styled-components';

interface ContainerProps {
	maxWidth?: string;
	px: string;
}

const Container = styled.div<ContainerProps>`
	box-sizing: border-box;
	margin: auto;
	width: 100%;
	max-width: ${(props) => props.maxWidth};
	overflow-x: hidden;

	${(props) =>
		props.px &&
		css`
			padding-left: ${props.px};
			padding-right: ${props.px};
		`}
`;

export default Container;
