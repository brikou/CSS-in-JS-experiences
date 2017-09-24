import { css } from "emotion";

export const badgeDark = css`
    color: #fff;
    background-color: #343a40;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #1d2124;
    }
`;
