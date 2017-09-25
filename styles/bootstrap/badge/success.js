import { css } from "emotion";

export const badgeSuccess = css`
    color: #fff;
    background-color: #28a745;

    &[href]:focus,
    &[href]:hover {
        color: #fff;
        text-decoration: none;
        background-color: #1e7e34;
    }
`;
