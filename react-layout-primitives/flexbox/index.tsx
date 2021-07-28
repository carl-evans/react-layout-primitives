import { settings } from '../settings';
import styled, { css } from 'styled-components';

interface FlexboxProps {
	flexDirection?: string;
	flexWrap?: string;
	justifyContent?: string;
	alignItems?: string;
	mediumFlexDirection?: string;
	mediumFlexWrap?: string;
	mediumJustifyContent?: string;
	mediumAlignItems?: string;
	largeFlexDirection?: string;
	largeFlexWrap?: string;
	largeJustifyContent?: string;
	largeAlignItems?: string;
	ultraFlexDirection?: string;
	ultraFlexWrap?: string;
	ultraJustifyContent?: string;
	ultraAlignItems?: string;
	maxWidth?: string;
	mediumMaxWidth?: string;
	largeMaxWidth?: string;
	ultraMaxWidth?: string;
}

const [, queries] = settings;
const { medium, large, ultra } = queries;

const Flexbox = styled.div`
	display: flex;
	flex-direction: ${(props: FlexboxProps) =>
		props.flexDirection || 'column'};
	flex-wrap: ${(props: FlexboxProps) => props.flexDirection || 'nowrap'};
	justify-content: ${(props: FlexboxProps) =>
		props.justifyContent || 'space-between'};
	align-items: ${(props: FlexboxProps) => props.alignItems || 'center'};
	width: 100%;
	max-width: ${(props: FlexboxProps) => props.maxWidth || '100%'};

	${medium} {
		${(props) =>
			props.mediumFlexDirection &&
			css`
				flex-direction: ${props.mediumFlexDirection};
			`}

		${(props) =>
			props.mediumFlexWrap &&
			css`
				flex-direction: ${props.mediumFlexWrap};
			`}

		${(props) =>
			props.mediumJustifyContent &&
			css`
				justify-content: ${props.mediumJustifyContent};
			`}

			${(props) =>
			props.mediumAlignItems &&
			css`
				align-items: ${props.mediumAlignItems};
			`}

			${(props) =>
			props.mediumMaxWidth &&
			css`
				max-width: ${props.mediumMaxWidth};
			`}
	}

	${large} {
		${(props) =>
			props.largeFlexDirection &&
			css`
				flex-direction: ${props.largeFlexDirection};
			`}

		${(props) =>
			props.largeFlexWrap &&
			css`
				flex-direction: ${props.largeFlexWrap};
			`}

		${(props) =>
			props.largeJustifyContent &&
			css`
				justify-content: ${props.largeJustifyContent};
			`}

			${(props) =>
			props.largeAlignItems &&
			css`
				align-items: ${props.largeAlignItems};
			`}

			${(props) =>
			props.largeMaxWidth &&
			css`
				max-width: ${props.largeMaxWidth};
			`}
	}

	${ultra} {
		${(props) =>
			props.ultraFlexDirection &&
			css`
				flex-direction: ${props.ultraFlexDirection};
			`}

		${(props) =>
			props.ultraFlexWrap &&
			css`
				flex-direction: ${props.largeFlexWrap};
			`}

		${(props) =>
			props.ultraJustifyContent &&
			css`
				justify-content: ${props.ultraJustifyContent};
			`}

			${(props) =>
			props.ultraAlignItems &&
			css`
				align-items: ${props.ultraAlignItems};
			`}

			${(props) =>
			props.ultraMaxWidth &&
			css`
				max-width: ${props.ultraMaxWidth};
			`}
	}
`;

export default Flexbox;
