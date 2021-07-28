import { settings } from '../settings';
import styled, { css } from 'styled-components';

const [, queries] = settings;
const { medium, large, ultra } = queries;

interface StackProps {
	$x?: string;
	$y?: string;
	mediumX?: string;
	mediumY?: string;
	largeX?: string;
	largeY?: string;
	ultraX?: string;
	ultraY?: string;
}

const Stack = styled.div<StackProps>`
	display: flex;
	flex-direction: ${(props) => (props.$x ? 'row' : 'column')};

	${(props) =>
		css`
			& > * {
				margin: 0;
			}

			& > * + * {
				margin-left: ${props.$x ? props.$x : 0};
				margin-top: ${props.$y ? props.$y : 0};
			}
		`}

	${medium} {
		${(props) =>
			(props.mediumX || props.mediumY) &&
			css`
				flex-direction: ${props.mediumX
					? 'row'
					: 'column'};

				& > * + * {
					margin-left: ${props.mediumX
						? props.mediumX
						: 0};
					margin-top: ${props.mediumY
						? props.mediumY
						: 0};
				}
			`}
	}

	${large} {
		${(props) =>
			(props.largeX || props.largeY) &&
			css`
				flex-direction: ${props.largeX
					? 'row'
					: 'column'};

				& > * + * {
					margin-left: ${props.largeX
						? props.largeX
						: 0};
					margin-top: ${props.largeY
						? props.largeY
						: 0};
				}
			`}
	}

	${ultra} {
		${(props) =>
			(props.ultraX || props.ultraY) &&
			css`
				flex-direction: ${props.ultraX
					? 'row'
					: 'column'};

				& > * + * {
					margin-left: ${props.ultraX
						? props.ultraX
						: 0};
					margin-top: ${props.ultraY
						? props.ultraY
						: 0};
				}
			`}
	}
`;

export default Stack;
