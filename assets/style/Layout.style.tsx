import {css} from "@emotion/core";
import {media} from "./Media.style";
import styled from "@emotion/styled";

export const FlexBox = (flexDirection:string='row', justifyContent: string = 'center', alignItems: string = 'center') => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const Section=()=>css` 
  //padding:0 20%;
   width:1000px;
  margin:auto;
  min-height:100vh;
  ${media.md`width:80%; margin:6em auto;`};
  ${media.sm`width:90%; margin:6em auto;`};
`

export const onlyPc=()=>css`
  display:initial;
  ${media.sm`display:none;`}
`

export const onlyMobile=()=>css`
  display:none;
  ${media.sm`display:initial;`}
`

export const Position=(position:string)=>css`
  position:${position};
`;

export const Margin=(top:number=0, right:number=0, bottom:number=0, left:number=0)=>css`
  margin:${top}em ${right}em ${bottom}em ${left}em;
`;

export const Padding=(top:number=0, right:number=0, bottom:number=0, left:number=0)=>css`
  padding:${top}em ${right}em ${bottom}em ${left}em;
`;


export const HalfGrid=styled.div`
  display:grid; 
  grid-template-columns: 1fr 1fr; 
  grid-gap:1em;
`;
