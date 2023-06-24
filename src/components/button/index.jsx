import React from 'react'
import * as Styled from "./styled";

export default function Button({variant="primary", borderless=false, size="m", icon, children}) {

	return (
		<Styled.Wrapper variant={variant} borderless={borderless} size={size}>
			{icon && <img src={icon} alt='icon'/>}
			{children}
		</Styled.Wrapper>
	)
}
