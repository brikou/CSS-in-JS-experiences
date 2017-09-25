import { css } from "emotion";

export const badgeWarning = css`
    color: #111;
    background-color: #ffc107;

    &[href]:focus,
    &[href]:hover {
        color: #111;
        text-decoration: none;
        background-color: #d39e00;
    }
`;
