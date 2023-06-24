import styled from "styled-components";

export const Wrapper = styled.div`
	display: flex;
	align-items: center;

	img:first-child {
		width: ${({ theme }) => theme.spacing.xxxxl};
		height: ${({ theme }) => theme.spacing.xxxxl};
		object-fit: cover;
		border-radius: 50%;
	}

	img:last-child {
		margin-left: ${({ theme }) => theme.spacing.s};
	}
`