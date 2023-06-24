import styled from "styled-components";

export const Wrapper = styled.button`
	/* reset */
	border: none;
	margin: 0;
	padding: 0;
	width: auto;
	overflow: visible;

	background: transparent;

	color: inherit;
	font: inherit;

	line-height: normal;

	-webkit-font-smoothing: inherit;
	-moz-osx-font-smoothing: inherit;

	&::-moz-focus-inner {
		border: 0;
		padding: 0;
	}

	/* style */
	display: flex;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.s};
	cursor: pointer;
	border-radius: 6px;

	padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.xl}`};
	font-size: ${({ theme, size }) => theme.fontSize[size]};
	${({ theme, variant }) => theme.palette.buttons[variant]};
	${({ borderless }) => borderless && "border: none"};

	&:hover {
		${({ theme, variant }) => theme.palette.buttons[variant].hover}
	}
`