import styled from "styled-components";

export const Wrapper = styled.div`
	font-size: ${({ theme }) => theme.fontSize.s};
	position: relative;
	width: 100px;
	user-select: none;

	>div {
		display: flex;
		justify-content: space-between;
		cursor: pointer;
	}

	img.arrow {
		cursor: pointer;
	}

	ul {
		position: absolute;
		width: 100%;
		bottom: -70px;
		left: -8px;
		display: flex;
		flex-direction: column;
		gap: ${({ theme }) => theme.spacing.s};
		background-color: #FFFFFF;
		padding: ${({ theme }) => theme.spacing.s};
		border-radius: 6px;
	}

	li {
		display: flex;
		align-items: center;
		gap: ${({ theme }) => theme.spacing.s};
		cursor: pointer;
	}

	img {
		width: ${({ theme }) => theme.spacing.l};
	}
`