import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	height: 100dvh;
`

export const Header = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.l};
	padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.xxxl}`};
	border-bottom: 1px solid #E3E3E3;
	background-color: ${({ theme }) => theme.palette.headerBg};
`

export const Main = styled.div`
	flex-grow: 1;
	display: flex;
`

export const SidebarWrapper = styled.div`
	width: 180px;
	flex-shrink: 0;
`

export const EditorWrapper = styled.div`
	flex-grow: 1;
`

export const Footer = styled.div`

`
