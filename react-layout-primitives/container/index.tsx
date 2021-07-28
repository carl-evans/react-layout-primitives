import styled, { css } from 'styled-components';

interface ContainerProps {
	maxWidth?: string;
	px: string;
}

const Container = styled.div`
	box-sizing: border-box;
	margin: auto;
	width: 100%;
	max-width: ${(props: ContainerProps) => props.maxWidth};
	overflow-x: hidden;

	${(props: ContainerProps) =>
		props.px &&
		css`
			padding-left: ${props.px};
			padding-right: ${props.px};
		`}
`;

export default Container;
