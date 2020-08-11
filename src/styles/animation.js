import {css, keyframes} from 'styled-components'

const fadeInKeyfames = keyframes`

from {
	filter:blur(5px);
	opacity:0;
}

to {
	filter:blur(0);
	opacity:1;
}
`
export const fadeIn =({time = '0.5s',type = 'ease '}={})=>css`
animation:${time} ${fadeInKeyfames} ${type};
`