import React, { useContext } from 'react'
import * as Styled from "./styled";
import {ReactComponent as Sun} from "../../svg/sun.svg";
import {ReactComponent as Moon} from "../../svg/moon.svg";
import { ThemeContext } from '../../contexts/themeContext';
import { palette } from '../../contexts/themeContext/themes';

export default function SelectTheme({className}) {
	const {toggleTheme, currentPalette} = useContext(ThemeContext);

	let isLight = currentPalette === palette.light;

	return (
		<Styled.Wrapper isLight={isLight} className={className}>
			<div onClick={toggleTheme}>
				<Sun />
				<Moon />
			</div>
		</Styled.Wrapper>
	)
}
