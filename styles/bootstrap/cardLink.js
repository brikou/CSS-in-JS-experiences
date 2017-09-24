import { css } from "emotion";

export const cardLink = css`
    &:hover {
        text-decoration: none;
    }

    & + & {
        margin-left: 1.25rem;
    }
`;
