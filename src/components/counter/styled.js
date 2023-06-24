import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    gap: ${({ theme }) => theme.spacing.m};
    flex-shrink: 0;
    padding: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.xl}`};
    background-color: #ffffff;
    border-radius: 6px;

    span {
        flex-shrink: 0;
    }
`