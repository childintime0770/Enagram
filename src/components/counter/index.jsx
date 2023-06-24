
import React from 'react'
import * as Styled from "./styled"
import { countWords } from '../../helpers';
import { useTranslation } from 'react-i18next';

function Counter({text=""}) {
    const { t } = useTranslation();
    let charsCount = text.length;
    let wordsCount = countWords(text);

    return (
        <Styled.Wrapper>
            <span>{charsCount} {t("characters")},</span>
            <span>{wordsCount} {t("words")}</span>
        </Styled.Wrapper>
    )
}

export default React.memo(Counter);
