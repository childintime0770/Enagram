import React, { useRef } from 'react';
import * as Styled from './styled';
import englishLanguage from "../../svg/united-kingdom.svg"
import georgianLanguage from "../../svg/georgia.svg"
import arrowDown from "../../svg/arrow-drop-down-line.svg"
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const languages = {
	'en': {
		name: 'English',
		icon: englishLanguage
	},
	'ka': {
		name: 'ქართული',
		icon: georgianLanguage
	},
}

export default function Language() {
	const { i18n } = useTranslation();
	const [language, setLanguage] = useState('en');
	const [expanded, setExpanded] = useState(false);
	const selectionRef = useRef();

	function change(lang) {
		setLanguage(lang);
		setExpanded(false);
	}

	useEffect(function changeTranslation() {
		i18n.changeLanguage(language);
	}, [language, i18n]);

	useEffect(function handlerOutsideClick() {
		function clearSelection(event) {
			if(!selectionRef.current.contains(event.target)) {
				setExpanded(false);
			}
		}

		if(expanded) {
			document.addEventListener("click", clearSelection);
		}


		return () => expanded && document.removeEventListener("click", clearSelection);
	}, [expanded])

	return (
		<Styled.Wrapper ref={selectionRef}>
			<div onClick={() => setExpanded(!expanded)}>
				<img src={languages[language].icon} alt={`${languages[language].name} flag`} />
				{languages[language].name}
				<img src={arrowDown} alt='arrow down' className='arrow' />
			</div>
			{expanded && <ul>
				{Object.keys(languages).map(key => (
					<li onClick={() => change(key)}>
						<img src={languages[key].icon} alt="English flag" />
						{languages[key].name}
					</li>
				))}
			</ul>}
		</Styled.Wrapper>
	);
}
