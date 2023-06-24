import React from 'react'
import * as Styled from "./styled";
import avatar from "../../images/person.png"
import arrowDown from "../../svg/arrow-drop-down-line.svg"

export default function Profile({className}) {
  return (
	<Styled.Wrapper className={className}>
		<img src={avatar} alt="Avatar" />
		<img src={arrowDown} alt="Arrow Down" />
	</Styled.Wrapper>
  )
}
