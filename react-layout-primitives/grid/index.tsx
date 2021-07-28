import styled, { css } from 'styled-components';

interface GridProps {
	columns?: string;
	rows?: string;
	gap?: string;
}

const Grid = styled.div`
	display: grid;

	${(props: GridProps) =>
		props.columns &&
		css`
			grid-template-columns ${props.columns};
		`}

	${(props: GridProps) =>
		props.rows &&
		css`
			grid-template-rows: ${props.rows};
		`}

	${(props: GridProps) =>
		props.gap &&
		css`
			gap: ${props.gap};
		`}
`;

export default Grid;
