import { settings } from '../settings';
import styled, { css } from 'styled-components';

interface BoxProps {
	m?: string;
	mx?: string;
	my?: string;
	mt?: string;
	mr?: string;
	ml?: string;
	mb?: string;
	p?: string;
	px?: string;
	py?: string;
	pt?: string;
	pr?: string;
	pl?: string;
	pb?: string;
	mediumM?: string;
	mediumMx?: string;
	mediumMy?: string;
	mediumMt?: string;
	mediumMr?: string;
	mediumMl?: string;
	mediumMb?: string;
	mediumP?: string;
	mediumPx?: string;
	mediumPy?: string;
	mediumPt?: string;
	mediumPr?: string;
	mediumPl?: string;
	mediumPb?: string;
	largeM?: string;
	largeMx?: string;
	largeMy?: string;
	largeMt?: string;
	largeMr?: string;
	largeMl?: string;
	largeMb?: string;
	largeP?: string;
	largePx?: string;
	largePy?: string;
	largePt?: string;
	largePr?: string;
	largePl?: string;
	largePb?: string;
	ultraM?: string;
	ultraMx?: string;
	ultraMy?: string;
	ultraMt?: string;
	ultraMr?: string;
	ultraMl?: string;
	ultraMb?: string;
	ultraP?: string;
	ultraPx?: string;
	ultraPy?: string;
	ultraPt?: string;
	ultraPr?: string;
	ultraPl?: string;
	ultraPb?: string;
}

const [, queries] = settings;
const { medium, large, ultra } = queries;

const Box = styled.div`
	display: block;

	${(props: BoxProps) =>
		props.m &&
		css`
			margin: ${props.m};
		`}

	${(props: BoxProps) =>
		props.mx &&
		css`
			margin-left: ${props.mx};
			margin-right: ${props.mx};
		`}

    ${(props: BoxProps) =>
		props.my &&
		css`
			margin-bottom: ${props.my};
			margin-top: ${props.my};
		`}

    ${(props: BoxProps) =>
		props.mt &&
		css`
			margin-top: ${props.mt};
		`}

    ${(props: BoxProps) =>
		props.mr &&
		css`
			margin-right: ${props.mr};
		`}

    ${(props: BoxProps) =>
		props.ml &&
		css`
			margin-left: ${props.ml};
		`}

    ${(props: BoxProps) =>
		props.mb &&
		css`
			margin-bottom: ${props.mb};
		`}

    ${(props: BoxProps) =>
		props.p &&
		css`
			padding: ${props.p};
		`}

    ${(props: BoxProps) =>
		props.px &&
		css`
			padding-left: ${props.px};
			padding-right: ${props.px};
		`}

    ${(props: BoxProps) =>
		props.py &&
		css`
			padding-bottom: ${props.py};
			padding-top: ${props.py};
		`}

    ${(props: BoxProps) =>
		props.pt &&
		css`
			padding-top: ${props.pt};
		`}

    ${(props: BoxProps) =>
		props.pr &&
		css`
			padding-right: ${props.pr};
		`}

    ${(props: BoxProps) =>
		props.pl &&
		css`
			padding-left: ${props.pl};
		`}

    ${(props: BoxProps) =>
		props.pb &&
		css`
			padding-bottom: ${props.pb};
		`}

	${medium} {
		${(props: BoxProps) =>
			props.mediumM &&
			css`
				margin: ${props.mediumM};
			`}

		${(props: BoxProps) =>
			props.mediumMx &&
			css`
				margin-left: ${props.mediumMx};
				margin-right: ${props.mediumMx};
			`}
    
        ${(props: BoxProps) =>
			props.mediumMy &&
			css`
				margin-bottom: ${props.mediumMy};
				margin-top: ${props.mediumMy};
			`}
    
        ${(props: BoxProps) =>
			props.mediumMt &&
			css`
				margin-top: ${props.mediumMt};
			`}
    
        ${(props: BoxProps) =>
			props.mediumMr &&
			css`
				margin-right: ${props.mediumMr};
			`}
    
        ${(props: BoxProps) =>
			props.mediumMl &&
			css`
				margin-left: ${props.mediumMl};
			`}
    
        ${(props: BoxProps) =>
			props.mediumMb &&
			css`
				margin-bottom: ${props.mediumMb};
			`}
    
        ${(props: BoxProps) =>
			props.mediumP &&
			css`
				padding: ${props.mediumP};
			`}
    
        ${(props: BoxProps) =>
			props.mediumPx &&
			css`
				padding-left: ${props.mediumPx};
				padding-right: ${props.mediumPx};
			`}
    
        ${(props: BoxProps) =>
			props.mediumPy &&
			css`
				padding-bottom: ${props.mediumPy};
				padding-top: ${props.mediumPy};
			`}
    
        ${(props: BoxProps) =>
			props.mediumPt &&
			css`
				padding-top: ${props.mediumPt};
			`}
    
        ${(props: BoxProps) =>
			props.mediumPr &&
			css`
				padding-right: ${props.mediumPr};
			`}
    
        ${(props: BoxProps) =>
			props.mediumPl &&
			css`
				padding-left: ${props.mediumPl};
			`}
    
        ${(props: BoxProps) =>
			props.mediumPb &&
			css`
				padding-bottom: ${props.mediumPb};
			`}
	}

	${large} {
		${(props: BoxProps) =>
			props.largeM &&
			css`
				margin: ${props.largeM};
			`}

		${(props: BoxProps) =>
			props.largeMx &&
			css`
				margin-left: ${props.largeMx};
				margin-right: ${props.largeMx};
			`}
    
        ${(props: BoxProps) =>
			props.largeMy &&
			css`
				margin-bottom: ${props.largeMy};
				margin-top: ${props.largeMy};
			`}
    
        ${(props: BoxProps) =>
			props.largeMt &&
			css`
				margin-top: ${props.largeMt};
			`}
    
        ${(props: BoxProps) =>
			props.largeMr &&
			css`
				margin-right: ${props.largeMr};
			`}
    
        ${(props: BoxProps) =>
			props.largeMl &&
			css`
				margin-left: ${props.largeMl};
			`}
    
        ${(props: BoxProps) =>
			props.largeMb &&
			css`
				margin-bottom: ${props.largeMb};
			`}
    
        ${(props: BoxProps) =>
			props.largeP &&
			css`
				padding: ${props.largeP};
			`}
    
        ${(props: BoxProps) =>
			props.largePx &&
			css`
				padding-left: ${props.largePx};
				padding-right: ${props.largePx};
			`}
    
        ${(props: BoxProps) =>
			props.largePy &&
			css`
				padding-bottom: ${props.largePy};
				padding-top: ${props.largePy};
			`}
    
        ${(props: BoxProps) =>
			props.largePt &&
			css`
				padding-top: ${props.largePt};
			`}
    
        ${(props: BoxProps) =>
			props.largePr &&
			css`
				padding-right: ${props.largePr};
			`}
    
        ${(props: BoxProps) =>
			props.largePl &&
			css`
				padding-left: ${props.largePl};
			`}
    
        ${(props: BoxProps) =>
			props.largePb &&
			css`
				padding-bottom: ${props.largePb};
			`}
	}

	${ultra} {
		${(props: BoxProps) =>
			props.ultraM &&
			css`
				margin: ${props.ultraM};
			`}

		${(props: BoxProps) =>
			props.ultraMx &&
			css`
				margin-left: ${props.ultraMx};
				margin-right: ${props.ultraMx};
			`}
    
        ${(props: BoxProps) =>
			props.ultraMy &&
			css`
				margin-bottom: ${props.ultraMy};
				margin-top: ${props.ultraMy};
			`}
    
        ${(props: BoxProps) =>
			props.ultraMt &&
			css`
				margin-top: ${props.ultraMt};
			`}
    
        ${(props: BoxProps) =>
			props.ultraMr &&
			css`
				margin-right: ${props.ultraMr};
			`}
    
        ${(props: BoxProps) =>
			props.ultraMl &&
			css`
				margin-left: ${props.ultraMl};
			`}
    
        ${(props: BoxProps) =>
			props.ultraMb &&
			css`
				margin-bottom: ${props.ultraMb};
			`}
    
        ${(props: BoxProps) =>
			props.ultraP &&
			css`
				padding: ${props.ultraP};
			`}
    
        ${(props: BoxProps) =>
			props.ultraPx &&
			css`
				padding-left: ${props.ultraPx};
				padding-right: ${props.ultraPx};
			`}
    
        ${(props: BoxProps) =>
			props.ultraPy &&
			css`
				padding-bottom: ${props.ultraPy};
				padding-top: ${props.ultraPy};
			`}
    
        ${(props: BoxProps) =>
			props.ultraPt &&
			css`
				padding-top: ${props.ultraPt};
			`}
    
        ${(props: BoxProps) =>
			props.ultraPr &&
			css`
				padding-right: ${props.ultraPr};
			`}
    
        ${(props: BoxProps) =>
			props.ultraPl &&
			css`
				padding-left: ${props.ultraPl};
			`}
    
        ${(props: BoxProps) =>
			props.ultraPb &&
			css`
				padding-bottom: ${props.ultraPb};
			`}
	}
`;

export default Box;
