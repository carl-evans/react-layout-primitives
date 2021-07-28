import styled, { css } from 'styled-components';

interface GridProps {
	columns?: string;
	rows?: string;
	gap?: string;
}

const Grid = styled.div<GridProps>`
	display: grid;

	${(props) =>
		props.columns &&
		css`
			grid-template-columns ${props.columns};
		`}

	${(props) =>
		props.rows &&
		css`
			grid-template-rows: ${props.rows};
		`}

	${(props) =>
		props.gap &&
		css`
			gap: ${props.gap};
		`}
`;

export default Grid;
