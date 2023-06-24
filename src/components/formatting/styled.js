import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: ${({ theme }) => theme.spacing.xxl};
	font-size: ${({ theme }) => theme.fontSize.s};

	div.icons {
		display: flex;
		gap: ${({ theme }) => theme.spacing.l};
		
		span {
			display: inline-block;
			height: 24px;
			border-left: 1px solid #CCCACA;
		}
	}

	div.count {
		flex-basis: 380px;
		display: flex;
		justify-content: space-between;
		gap: ${({ theme }) => theme.spacing.m};
	}

`