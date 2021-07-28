import { settings } from "../settings";
import styled, { css } from "styled-components";

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

const Box = styled.div<BoxProps>`
  display: block;

  ${(props) =>
    props.m &&
    css`
      margin: ${props.m};
    `}

  ${(props) =>
    props.mx &&
    css`
      margin-left: ${props.mx};
      margin-right: ${props.mx};
    `}

    ${(props) =>
    props.my &&
    css`
      margin-bottom: ${props.my};
      margin-top: ${props.my};
    `}

    ${(props) =>
    props.mt &&
    css`
      margin-top: ${props.mt};
    `}

    ${(props) =>
    props.mr &&
    css`
      margin-right: ${props.mr};
    `}

    ${(props) =>
    props.ml &&
    css`
      margin-left: ${props.ml};
    `}

    ${(props) =>
    props.mb &&
    css`
      margin-bottom: ${props.mb};
    `}

    ${(props) =>
    props.p &&
    css`
      padding: ${props.p};
    `}

    ${(props) =>
    props.px &&
    css`
      padding-left: ${props.px};
      padding-right: ${props.px};
    `}

    ${(props) =>
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

    ${(props) =>
    props.pr &&
    css`
      padding-right: ${props.pr};
    `}

    ${(props) =>
    props.pl &&
    css`
      padding-left: ${props.pl};
    `}

    ${(props) =>
    props.pb &&
    css`
      padding-bottom: ${props.pb};
    `}

	${medium} {
    ${(props) =>
      props.mediumM &&
      css`
        margin: ${props.mediumM};
      `}

    ${(props) =>
      props.mediumMx &&
      css`
        margin-left: ${props.mediumMx};
        margin-right: ${props.mediumMx};
      `}
    
        ${(props) =>
      props.mediumMy &&
      css`
        margin-bottom: ${props.mediumMy};
        margin-top: ${props.mediumMy};
      `}
    
        ${(props) =>
      props.mediumMt &&
      css`
        margin-top: ${props.mediumMt};
      `}
    
        ${(props) =>
      props.mediumMr &&
      css`
        margin-right: ${props.mediumMr};
      `}
    
        ${(props) =>
      props.mediumMl &&
      css`
        margin-left: ${props.mediumMl};
      `}
    
        ${(props) =>
      props.mediumMb &&
      css`
        margin-bottom: ${props.mediumMb};
      `}
    
        ${(props) =>
      props.mediumP &&
      css`
        padding: ${props.mediumP};
      `}
    
        ${(props) =>
      props.mediumPx &&
      css`
        padding-left: ${props.mediumPx};
        padding-right: ${props.mediumPx};
      `}
    
        ${(props) =>
      props.mediumPy &&
      css`
        padding-bottom: ${props.mediumPy};
        padding-top: ${props.mediumPy};
      `}
    
        ${(props) =>
      props.mediumPt &&
      css`
        padding-top: ${props.mediumPt};
      `}
    
        ${(props) =>
      props.mediumPr &&
      css`
        padding-right: ${props.mediumPr};
      `}
    
        ${(props) =>
      props.mediumPl &&
      css`
        padding-left: ${props.mediumPl};
      `}
    
        ${(props) =>
      props.mediumPb &&
      css`
        padding-bottom: ${props.mediumPb};
      `}
  }

  ${large} {
    ${(props) =>
      props.largeM &&
      css`
        margin: ${props.largeM};
      `}

    ${(props) =>
      props.largeMx &&
      css`
        margin-left: ${props.largeMx};
        margin-right: ${props.largeMx};
      `}
    
        ${(props) =>
      props.largeMy &&
      css`
        margin-bottom: ${props.largeMy};
        margin-top: ${props.largeMy};
      `}
    
        ${(props) =>
      props.largeMt &&
      css`
        margin-top: ${props.largeMt};
      `}
    
        ${(props) =>
      props.largeMr &&
      css`
        margin-right: ${props.largeMr};
      `}
    
        ${(props) =>
      props.largeMl &&
      css`
        margin-left: ${props.largeMl};
      `}
    
        ${(props) =>
      props.largeMb &&
      css`
        margin-bottom: ${props.largeMb};
      `}
    
        ${(props) =>
      props.largeP &&
      css`
        padding: ${props.largeP};
      `}
    
        ${(props) =>
      props.largePx &&
      css`
        padding-left: ${props.largePx};
        padding-right: ${props.largePx};
      `}
    
        ${(props) =>
      props.largePy &&
      css`
        padding-bottom: ${props.largePy};
        padding-top: ${props.largePy};
      `}
    
        ${(props) =>
      props.largePt &&
      css`
        padding-top: ${props.largePt};
      `}
    
        ${(props) =>
      props.largePr &&
      css`
        padding-right: ${props.largePr};
      `}
    
        ${(props) =>
      props.largePl &&
      css`
        padding-left: ${props.largePl};
      `}
    
        ${(props) =>
      props.largePb &&
      css`
        padding-bottom: ${props.largePb};
      `}
  }

  ${ultra} {
    ${(props) =>
      props.ultraM &&
      css`
        margin: ${props.ultraM};
      `}

    ${(props) =>
      props.ultraMx &&
      css`
        margin-left: ${props.ultraMx};
        margin-right: ${props.ultraMx};
      `}
    
        ${(props) =>
      props.ultraMy &&
      css`
        margin-bottom: ${props.ultraMy};
        margin-top: ${props.ultraMy};
      `}
    
        ${(props) =>
      props.ultraMt &&
      css`
        margin-top: ${props.ultraMt};
      `}
    
        ${(props) =>
      props.ultraMr &&
      css`
        margin-right: ${props.ultraMr};
      `}
    
        ${(props) =>
      props.ultraMl &&
      css`
        margin-left: ${props.ultraMl};
      `}
    
        ${(props) =>
      props.ultraMb &&
      css`
        margin-bottom: ${props.ultraMb};
      `}
    
        ${(props) =>
      props.ultraP &&
      css`
        padding: ${props.ultraP};
      `}
    
        ${(props) =>
      props.ultraPx &&
      css`
        padding-left: ${props.ultraPx};
        padding-right: ${props.ultraPx};
      `}
    
        ${(props) =>
      props.ultraPy &&
      css`
        padding-bottom: ${props.ultraPy};
        padding-top: ${props.ultraPy};
      `}
    
        ${(props) =>
      props.ultraPt &&
      css`
        padding-top: ${props.ultraPt};
      `}
    
        ${(props) =>
      props.ultraPr &&
      css`
        padding-right: ${props.ultraPr};
      `}
    
        ${(props) =>
      props.ultraPl &&
      css`
        padding-left: ${props.ultraPl};
      `}
    
        ${(props) =>
      props.ultraPb &&
      css`
        padding-bottom: ${props.ultraPb};
      `}
  }
`;

export default Box;
