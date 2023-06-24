import styled from "styled-components";

export const Wrapper = styled.div`
	text-align: center;

	div {
		cursor: pointer;
		display: inline-flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing.m};
		padding: ${({ theme }) => theme.spacing.xs};
		margin: 50px 0;
		border: 1px solid #FFFFFF;
		border-radius: 28px;

		svg:first-child path {
			stroke: ${({ theme, isLight }) => isLight ?  theme.palette.yellow : theme.palette.strokeLight};
		}

		svg:last-child path {
			fill: ${({ theme, isLight }) => !isLight ?  theme.palette.yellow : theme.palette.strokeLight};
		}
	}


`