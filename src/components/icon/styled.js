import styled from "styled-components";
import { Tooltip as ReactTooltip } from 'react-tooltip';

export const Wrapper = styled.div`
	width: 24px;
	height: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	svg, path {
		fill: ${({ $color }) => $color};

		${({ hover }) => hover && `
			&:hover {
				fill: black;
			}
		`}

	}

`

export const Tooltip = styled(ReactTooltip)`
	background-color: ${({ theme }) => theme.palette.secondary};
`