
import React, { useState } from 'react';
import * as Styled from "./styled";
import { ReactComponent as CheckIcon } from "../../svg/check-button.svg";
import { ReactComponent as  Speech} from "../../svg/speech-logo.svg";
import { ReactComponent as Microphone } from "../../svg/microphone.svg";
import { ReactComponent as Settings } from "../../svg/settings.svg";
import { ReactComponent as Facebook } from "../../svg/facebook-logo.svg";
import { ReactComponent as Support } from "../../svg/support-logo.svg";
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
    const { t } = useTranslation();
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const menu = [
        {label: t('sidebar.spellchecker'), Icon: CheckIcon},
        {label: t("sidebar.textToSpeech"), Icon: Speech},
        {label: t("sidebar.speechToText"), Icon: Microphone},
    ]

    return (
        <Styled.Wrapper activeItemIndex={activeItemIndex}>
            <div className='upper'></div>
            <div className='lower'></div>
            <ul>
                {menu.map((item, index) => (
                    <li key={index} className={activeItemIndex === index ? 'active' : ''} onClick={() => setActiveItemIndex(index)}>
                        <div>
                            <item.Icon />
                            <span>{item.label}</span>
                        </div>
                    </li>
                ))}
            </ul>

            <ul className='nav'>
                <li>
                    <div>
                        <Settings width="24px"/>
                        <span>{t("sidebar.settings")}</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Facebook width="24px"/>
                        <span>{t("sidebar.facebook")}</span>
                    </div>
                </li>
                <li>
                    <div>
                        <Support width="24px"/>
                        <span>{t("sidebar.contactSupport")} </span>
                    </div>
                </li>
            </ul>

            <Styled.ThemeIcons />
        </Styled.Wrapper>
    )
}
