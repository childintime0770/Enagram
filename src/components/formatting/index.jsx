import React from 'react';
import * as Styled from './styled';
import { ReactComponent as bold } from "../../svg/bold.svg";
import { ReactComponent as italic } from "../../svg/italic.svg";
import { ReactComponent as underline } from "../../svg/underline.svg";
import { ReactComponent as dotedListIcon } from "../../svg/doted-list-icon.svg";
import { ReactComponent as numListIcon } from "../../svg/num-list-icon.svg";
import { ReactComponent as headerOne } from "../../svg/header-one.svg";
import { ReactComponent as headerTwo } from "../../svg/header-two.svg";
import { ReactComponent as link } from "../../svg/link-icon.svg";
import { ReactComponent as format } from "../../svg/format-clear.svg";
import Logo from "../../svg/enagram-logo.svg"
import Icon from '../icon';
import Counter from '../counter';

export default function Formatting({text}) {

	return (
		<Styled.Wrapper>
			<div className='icons'>
				<Icon SVG={bold} hover color="#606060" tooltip="Bold Ctrl+B" tooltipPosition="bottom"/>
				<Icon SVG={italic} hover color="#606060" tooltip="Bold Ctrl+I" tooltipPosition="bottom"/>
				<Icon SVG={underline} hover color="#606060" tooltip="Bold Ctrl+U" tooltipPosition="bottom"/>
				<span></span>
				<Icon SVG={dotedListIcon} hover color="#606060" tooltip="Bold Ctrl+D" tooltipPosition="bottom"/>
				<Icon SVG={numListIcon} hover color="#606060" tooltip="Bold Ctrl+N" tooltipPosition="bottom"/>
				<span></span>
				<Icon SVG={headerOne} hover color="#606060" tooltip="Bold Ctrl+H" tooltipPosition="bottom"/>
				<Icon SVG={headerTwo} hover color="#606060" tooltip="Bold Ctrl+J" tooltipPosition="bottom"/>
				<span></span>
				<Icon SVG={link} hover color="#606060" tooltip="Bold Ctrl+L" tooltipPosition="bottom"/>
				<span></span>
				<Icon SVG={format} hover color="#606060" tooltip="Bold Ctrl+F" tooltipPosition="bottom"/>
			</div>
			<div className='count'>
				<Counter text={text}/>
				<img src={Logo} alt="logo" />
			</div>
		</Styled.Wrapper>
	);
}
