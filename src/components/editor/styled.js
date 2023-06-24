import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.palette.primary};
    height: 100%;
`

export const ControlsWrapper = styled.div`

`

export const EditingArea = styled.div`
	padding: 60px 120px 14px;
	flex-grow: 1;

	textarea {
		all: unset;
		font-size: ${({ theme }) => theme.fontSize.s};
		width: 100%;
		height: 100%;
		border: none;
		background-color: ${({ theme }) => theme.palette.primary};
		resize: none;
	}
`

export const FormattingWrapper = styled.div`
	height: 130px;
	padding: 35px 60px 0 120px;
`