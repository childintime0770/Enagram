import styled from "styled-components";

export const Wrapper = styled.div`
	padding: 60px 120px 14px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #EDEDED;

	>div {
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing.l};

		span {
			display: inline-block;
			height: 24px;
			border-left: 1px solid #CCCACA;
		}
	}
`