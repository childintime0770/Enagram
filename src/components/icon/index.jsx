import React from 'react';
import * as Styled from "./styled";
// import {ReactComponent as Bold} from "../../svg/bold.svg"

export default function Icon({SVG, hover=false, color="white", tooltip, tooltipPosition="bottom"}) {
	const id = tooltip.split().join();
	return (
		<Styled.Wrapper hover={hover} $color={color} data-tooltip-id={id} data-tooltip-content={tooltip} data-tooltip-place={tooltipPosition}>
			{SVG ? <SVG viewBox="0 0 24 24"/> : null}
			{tooltip && <Styled.Tooltip id={id} />}
		</Styled.Wrapper>
  )
}
