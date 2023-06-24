import styled from "styled-components";
import SelectTheme from "../selectTheme";

export const Wrapper = styled.div`
	padding: ${({ theme }) => `125px 0 ${theme.spacing.xxxxxl} 0`};
	font-size: ${({ theme }) => theme.fontSize.s};
	color: ${({ theme }) => theme.palette.textSecondary};
	height: 100%;
	position: relative;

	display: flex;
	flex-direction: column;

	ul {
		display: flex;
		flex-direction: column;
		border-bottom: 2px solid #9EB9FF;
		position: relative;
	}

	ul:first-of-type {
		flex-grow: 1;
	}

	ul.nav {
		padding: ${({ theme }) => `${theme.spacing.xxxxl} 0`};
	}

	li {
		cursor: pointer;
		background-color: ${({ theme }) => theme.palette.secondary};
		padding-left: 12px;
		border-radius: 0 30px 30px 0;
		margin-top: ${({ theme }) => theme.spacing.xs}; 
		margin-bottom: ${({ theme }) => theme.spacing.xs}; 

		div {
			display: flex;
			align-items: center;
			gap: ${({ theme }) => theme.spacing.s};
			padding: ${({ theme }) => `${theme.spacing.s} 0 ${theme.spacing.s} ${theme.spacing.m}`};

			svg {
				height: 24px;
			}
		}
	}

	li.active {
		div {
			background-color: ${({ theme }) => theme.palette.menuItemBg};
			color: ${({ theme }) => theme.palette.textPrimary};
			border-radius: 30px 0 0 30px;
		}
		
		

		path {
			fill: ${({ theme }) => theme.palette.textPrimary};
		}
	}

	.upper, .lower {
		position: absolute;
		width: 100%;
		
	background-color: ${({ theme }) => theme.palette.secondary};
	}

	.upper {
		top: 0;
		left: 0;
		height: ${({activeItemIndex}) => `calc(129px + ${activeItemIndex * 48}px)`};
		border-bottom-right-radius: 20px;
	}

	.lower {
		left: 0;
		top: ${({activeItemIndex}) => `calc(121px + ${(activeItemIndex + 1) * 48}px)`};
		height: 100%;
		border-top-right-radius: 20px;
	}
	
`

export const ThemeIcons = styled(SelectTheme)`
	position: relative;
`;
