import { css } from "emotion";

export const navLink = css`
    display: block;
    padding: 0.5rem 1rem;

    &:focus,
    &:hover {
        text-decoration: none;
    }

    &.disabled {
        color: #868e96;
    }
`;
