import React from 'react';
import * as Styled from './styled';
import Button from '../button';
import Language from '../language';
import copy from "../../svg/copy.svg";
import deleteIcon from "../../svg/delete-icon.svg";
import checkButton from "../../svg/check-button.svg";
import { useTranslation } from 'react-i18next';

export default function Controls() {
	const { t } = useTranslation();

	return (
		<Styled.Wrapper>
			<Button variant="primary" icon={checkButton} >{t("buttons.check")}</Button>
			<div>
				<Button variant="secondary" icon={copy} size="s" borderless>{t("buttons.copy")}</Button>
				<Button variant="secondary" icon={deleteIcon} size="s" borderless>{t("buttons.delete")}</Button>
				<span></span>
				<Language />
			</div>
		</Styled.Wrapper>
	);
}
